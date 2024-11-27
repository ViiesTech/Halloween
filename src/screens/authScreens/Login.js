import {
  View,
  Text,
  ImageBackground,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {images} from '../../assets/images';
import {styles} from '../../Styles';
import {Color} from '../../assets/Utils/Colors';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from '../../assets/Responsive_Dimensions';
import Input from '../../Components/Input';
import SocialButtons from '../../Components/SocialButtons';
import Button from '../../Components/Button';

const Login = ({navigation}) => {
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
              label={'Enter Your email'}
              placeholder={'Email'}
              keyboardType={'email-address'}
            />
            <Input label={'Enter Your password'} placeholder={'Password'} />
          </View>
          <Text style={styles.orText}>Or</Text>
          <View style={{gap: responsiveHeight(2.5)}}>
            <SocialButtons title={'CONTINUE WITH GOOGLE'} iconName={'google'} />
            <SocialButtons
              title={'CONTINUE WITH FACEBOOK'}
              iconName={'facebook'}
            />
          </View>
        </View>

        <View style={{gap: responsiveHeight(1.5)}}>
          <Button
            handlePress={() => navigation.navigate('MainStack')}
            title={'LOGIN'}
          />
          <TouchableOpacity>
            <Text
              style={{
                color: Color.white,
                alignSelf: 'center',
                fontSize: responsiveFontSize(1.8),
              }}>
              Don't have an account?{' '}
              <Text style={{color: Color.themeOrange}}>Sign Up</Text>
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default Login;
