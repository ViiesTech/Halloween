/* eslint-disable react-native/no-inline-styles */
import {
  View,
  Text,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import React, {useState} from 'react';
import {images} from '../../assets/images';
import {styles} from '../../Styles';
import {Color} from '../../assets/Utils/Colors';
import {
  responsiveFontSize,
  responsiveHeight,
} from '../../assets/Responsive_Dimensions';
import Input from '../../Components/Input';
import Button from '../../Components/Button';
import {ShowToast} from '../../GlobalFunctions/ShowToast';
import {forgetPassword} from '../../GlobalFunctions/Apis';

const ForgetPassword = ({navigation}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState();
  const handleForgotPass = async () => {
    if (!email) {
      ShowToast('error', 'Please enter your email');
      setIsLoading(false);
      return;
    }
    try {
      setIsLoading(true);
      const response = await forgetPassword(email);
      if (response.success) {
        ShowToast('success', 'Otp Sent Successfully');
        console.log('response', response);
        navigation.navigate('Otp', {
          userId: response.User_ID,
        });
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
          <Text style={styles.welcomeTextStyle}>Forgot Password?</Text>
        </View>
        <View style={{marginTop: responsiveHeight(6)}}>
          <View style={{gap: 20}}>
            <Input
              onChangeText={text => setEmail(text)}
              label="Email Address"
              placeholder="Enter your email"
              keyboardType="email-address"
            />
          </View>

          {/* <Text style={styles.orText}>Or</Text>
          <View style={{gap: responsiveHeight(2.5)}}>
            <SocialButtons title={'CONTINUE WITH GOOGLE'} iconName={'google'} />
            <SocialButtons
              title={'CONTINUE WITH FACEBOOK'}
              iconName={'facebook'}
            />
          </View> */}
        </View>

        <View style={{gap: responsiveHeight(1.5)}}>
          <Button
            bgColor={Color.loginBtnColor}
            handlePress={() => handleForgotPass()}
            title={
              isLoading ? (
                <ActivityIndicator size={'large'} color={Color.white} />
              ) : (
                'Verify Email'
              )
            }
          />
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default ForgetPassword;
