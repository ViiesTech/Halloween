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
import SocialButtons from '../../Components/SocialButtons';
import Button from '../../Components/Button';
import {LoginIntegration} from '../../GlobalFunctions/Apis';
import {useDispatch, useSelector} from 'react-redux';
import ShowToast from '../../GlobalFunctions/ShowToast';

const Login = ({navigation}) => {
  const [showPassword, setShowPassword] = useState(true);
  const [form, setForm] = useState({
    email: '',
    password: '',
  });
  const {isLoading} = useSelector(state => state.user);
  const dispatch = useDispatch();
  const handleInputChange = (field, value) => {
    setForm(prev => ({...prev, [field]: value}));
  };
  const loginHandler = async () => {
    const {email, password} = form;
    if (!email || !password) {
      ShowToast('error', 'Please fill all required fields');
      return;
    }
    try {
      const response = await LoginIntegration(email, password, dispatch);
    } catch (error) {
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
              onChangeText={text => handleInputChange('email', text)}
              label={'Enter Your email'}
              placeholder={'Email'}
              keyboardType={'email-address'}
            />
            <Input
              onChangeText={text => handleInputChange('password', text)}
              showPassword={showPassword}
              handlePress={() => setShowPassword(!showPassword)}
              isPassword
              label={'Enter Your password'}
              placeholder={'Password'}
            />
            <TouchableOpacity
              onPress={() => navigation.navigate('ForgetPassword')}
              style={{alignItems: 'flex-end'}}>
              <Text style={{color: Color.white}}>Forgot Password?</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.orText}>Or</Text>
          <View style={{gap: responsiveHeight(2.5)}}>
            <SocialButtons title={'CONTINUE WITH GOOGLE'} iconName={'google'} />
            {/* <SocialButtons
              title={'CONTINUE WITH FACEBOOK'}
              iconName={'facebook'}
            /> */}
          </View>
        </View>

        <View style={{gap: responsiveHeight(1.5)}}>
          <Button
            bgColor={Color.loginBtnColor}
            handlePress={loginHandler}
            title={
              isLoading ? (
                <ActivityIndicator size={'large'} color={Color.white} />
              ) : (
                'LOGIN'
              )
            }
          />
          <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
            <Text
              style={{
                color: Color.white,
                alignSelf: 'center',
                fontSize: responsiveFontSize(1.8),
              }}>
              Don't have an account?{' '}
              <Text style={{color: Color.loginBtnColor}}>Sign Up</Text>
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default Login;
