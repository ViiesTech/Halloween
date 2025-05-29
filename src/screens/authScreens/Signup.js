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
import {Registeration} from '../../GlobalFunctions/Apis';
import {setToken, setUserData} from '../../redux/Slices';
import {useDispatch} from 'react-redux';

const Signup = ({navigation}) => {
  const [showPassword, setShowPassword] = useState(true);
  const [showConfirmPass, setShowConfirmPass] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    userName: '',
    email: '',
    password: '',
    confirmPassword: '',
    parentNumber: '',
  });
  const {userName, email, password, confirmPassword, parentNumber} = form;
  const handleInputChange = (field, value) => {
    setForm(prev => ({...prev, [field]: value}));
  };
  const handleRegisteration = async () => {
    if (!userName || !email || !password || !confirmPassword || !parentNumber) {
      ShowToast('error', 'Please fill all required fields');
      return;
    }
    if (password !== confirmPassword) {
      ShowToast('error', 'Passwords must be the same');
      return;
    }
    try {
      setIsLoading(true);
      const response = await Registeration(
        userName,
        email,
        password,
        parentNumber,
      );
      if (response.success) {
        ShowToast('success', 'Registeration Successful');
        dispatch(setUserData(response.data));
        dispatch(setToken(response.token));
      } else {
        ShowToast('error', response.message);
      }
      console.log('response', response);
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
          <Text style={styles.welcomeTextStyle}>Welcome Back!</Text>
        </View>
        <View style={{marginTop: responsiveHeight(6)}}>
          <View style={{gap: 20}}>
            <Input
              onChangeText={text => handleInputChange('userName', text)}
              label="Username"
              placeholder="Enter your username"
            />

            <Input
              onChangeText={text => handleInputChange('email', text)}
              label="Email Address"
              placeholder="Enter your email"
              keyboardType="email-address"
            />
            <Input
              onChangeText={text => handleInputChange('parentNumber', text)}
              label={"Parent's Phone Number"}
              placeholder={'e.g. (123) 456-7890'}
            />
            <Input
              onChangeText={text => handleInputChange('password', text)}
              showPassword={showPassword}
              handlePress={() => setShowPassword(!showPassword)}
              isPassword
              label={'Password'}
              placeholder={'Enter your password'}
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
            handlePress={handleRegisteration}
            title={
              isLoading ? (
                <ActivityIndicator size={'large'} color={Color.white} />
              ) : (
                'Signup'
              )
            }
          />
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text
              style={{
                color: Color.white,
                alignSelf: 'center',
                fontSize: responsiveFontSize(1.8),
              }}>
              Already have an account?{' '}
              <Text style={{color: Color.loginBtnColor}}>Sign In</Text>
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default Signup;
