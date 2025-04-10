/* eslint-disable react-native/no-inline-styles */
import {
  View,
  Text,
  ImageBackground,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import React, {useState} from 'react';
import {images} from '../../assets/images';
import {styles} from '../../Styles';
import {Color} from '../../assets/Utils/Colors';
import {responsiveHeight} from '../../assets/Responsive_Dimensions';
import Input from '../../Components/Input';
import Button from '../../Components/Button';
import {ShowToast} from '../../GlobalFunctions/ShowToast';
import {resetPassword} from '../../GlobalFunctions/Apis';

const ResetPassword = ({navigation, route}) => {
  const [showPassword, setShowPassword] = useState(true);
  const [showConfirmPass, setShowConfirmPass] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const {userId} = route?.params;
  const [form, setForm] = useState({
    password: '',
    confirmPassword: '',
  });
  const handleInputChange = (field, value) => {
    setForm(prev => ({...prev, [field]: value}));
  };

  const resetPassIntegration = async () => {
    const {password, confirmPassword} = form;
    if (!password && confirmPassword) {
      ShowToast('error', 'Please Fill The Required Fields');
      setIsLoading(false);
      return;
    }
    if (password !== confirmPassword) {
      ShowToast('error', 'Passwords must be the same');
      setIsLoading(false);
      return;
    }
    try {
      setIsLoading(true);
      const response = await resetPassword(password, confirmPassword, userId);
      console.log('response', response);
      if (response.success) {
        ShowToast('success', 'Password Changed Successfully');
        navigation.navigate('Login');
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
          <Text style={styles.welcomeTextStyle}>Reset Your Password!</Text>
        </View>
        <View style={{marginTop: responsiveHeight(6)}}>
          <View style={{gap: 20}}>
            <Input
              onChangeText={text => handleInputChange('password', text)}
              showPassword={showPassword}
              handlePress={() => setShowPassword(!showPassword)}
              isPassword
              label={'Password'}
              placeholder={'Enter your new password'}
            />
            <Input
              onChangeText={text => handleInputChange('confirmPassword', text)}
              showPassword={showConfirmPass}
              handlePress={() => setShowConfirmPass(!showConfirmPass)}
              isPassword
              label={'Confirm Password'}
              placeholder={'Re-enter your password'}
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
            handlePress={() => resetPassIntegration()}
            title={
              isLoading ? (
                <ActivityIndicator size={'large'} color={Color.white} />
              ) : (
                'Reset'
              )
            }
          />
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default ResetPassword;
