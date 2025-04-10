/* eslint-disable react-native/no-inline-styles */
import {
  View,
  Text,
  ImageBackground,
  ScrollView,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import React, {useState} from 'react';
import {images} from '../../assets/images';
import {styles} from '../../Styles';
import {Color} from '../../assets/Utils/Colors';
import {
  responsiveHeight,
  responsiveWidth,
} from '../../assets/Responsive_Dimensions';
import Button from '../../Components/Button';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
  MaskSymbol,
  isLastFilledCell,
} from 'react-native-confirmation-code-field';
import {ShowToast} from '../../GlobalFunctions/ShowToast';
import {verifyOtp} from '../../GlobalFunctions/Apis';
import {setToken} from '../../redux/Slices';
import {useDispatch} from 'react-redux';

const Otp = ({navigation, route}) => {
  const [value, setValue] = useState();
  const {userId} = route?.params;
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const CELL_COUNT = 4;
  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  const renderCell = ({index, symbol, isFocused}) => {
    let textChild = null;
    if (symbol) {
      textChild = (
        <MaskSymbol
          maskSymbol="*"
          isLastFilledCell={isLastFilledCell({index, value})}>
          {symbol}
        </MaskSymbol>
      );
    } else if (isFocused) {
      textChild = <Cursor />;
    }

    return (
      <View
        style={{
          backgroundColor: Color.textLight,
          margin: responsiveHeight(1.5),
          // paddingVertical: 6,
          // paddingHorizontal: 4,
          borderRadius: responsiveHeight(1),
        }}>
        <Text
          key={index}
          style={[style.cell, isFocused && style.focusCell]}
          onLayout={getCellOnLayoutHandler(index)}>
          {textChild}
        </Text>
      </View>
    );
  };
  const handleOtpIntegration = async () => {
    if (!value) {
      ShowToast('error', 'Please enter your otp to proceed');
      setIsLoading(false);
      return;
    }
    try {
      setIsLoading(true);
      const response = await verifyOtp(value, userId);
      if (response.success) {
        ShowToast('success', 'Otp Verified');
        navigation.navigate('ResetPassword', {userId});
      } else {
        ShowToast('error', response.message);
      }
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      ShowToast('error', error);
      console.log('error', error);
    }
  };

  return (
    <ImageBackground
      source={images.bgImage}
      style={{flex: 1, padding: 20, backgroundColor: 'red'}}>
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          alignItems: 'center',
          justifyContent: 'space-around',
        }}>
        <View>
          <Text style={styles.welcomeTextStyle}>Verify Your Otp!</Text>
        </View>
        <View style={{marginTop: responsiveHeight(6)}}>
          <View style={{gap: 20}}>
            <CodeField
              ref={ref}
              {...props}
              value={value}
              onChangeText={setValue}
              cellCount={CELL_COUNT}
              rootStyle={style.codeFieldRoot}
              keyboardType="number-pad"
              textContentType="oneTimeCode"
              renderCell={renderCell}
            />
          </View>
        </View>

        <View style={{gap: responsiveHeight(1.5)}}>
          <Button
            bgColor={Color.loginBtnColor}
            handlePress={() => handleOtpIntegration()}
            title={
              isLoading ? (
                <ActivityIndicator size={'large'} color={Color.white} />
              ) : (
                'Verify Otp'
              )
            }
          />
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default Otp;
const style = StyleSheet.create({
  codeFieldRoot: {
    marginVertical: responsiveHeight(1.8),
    gap: 0,
    padding: 0,
  },
  cell: {
    width: responsiveWidth(13.3),
    height: 67,
    padding: 5,
    fontSize: 34,
    borderWidth: 2.5,
    borderColor: '#000',
    textAlign: 'center',
    borderRadius: responsiveHeight(1),
    paddingVertical: 10,
    color: '#041E5E',
  },
  focusCell: {
    borderColor: Color.buttonBg,
  },
});
