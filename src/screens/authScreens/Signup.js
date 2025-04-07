/* eslint-disable react-native/no-inline-styles */
import {
  View,
  Text,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
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

const Signup = ({navigation}) => {
  const [showPassword, setShowPassword] = useState(true);
  const [showConfirmPass, setShowConfirmPass] = useState(true);

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
            <Input label="Username" placeholder="Enter your username" />

            <Input
              label="Email Address"
              placeholder="Enter your email"
              keyboardType="email-address"
            />
            <Input
              label={"Parent's Phone Number"}
              placeholder={'e.g. (123) 456-7890'}
            />
            <Input
              showPassword={showPassword}
              handlePress={() => setShowPassword(!showPassword)}
              isPassword
              label={'Password'}
              placeholder={'Enter your password'}
            />
            <Input
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
            handlePress={() => navigation.navigate('MainStack')}
            title={'Signup'}
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
