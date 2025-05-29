/* eslint-disable react-native/no-inline-styles */
import {
  View,
  Text,
  TouchableOpacity,
  PermissionsAndroid,
  Linking,
  ActivityIndicator,
} from 'react-native';
import React, {useState} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from '../assets/Responsive_Dimensions';
import HeaderIcons from './HeaderIcons';
import {Color} from '../assets/Utils/Colors';
import SvgIcons from './SvgIcons';
import {notification} from '../assets/icons';
import {useSelector} from 'react-redux';
import Button from './Button';
import Geolocation from '@react-native-community/geolocation';
import axios from 'axios';
import {useNavigation} from '@react-navigation/native';
const Header = ({
  notificationIcon,
  handleBackPress,
  showBackIcon,
  showAddress,
}) => {
  const {name, Parent_Number} = useSelector(state => state.user.userData);
  const [locationLoading, setLocationLoading] = useState(false);
  const navigation = useNavigation();

  const getCurrentLocation = async () => {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      {
        title: 'Location Permission',
        message: 'App needs access to your location',
        buttonNeutral: 'Ask Me Later',
        buttonNegative: 'Cancel',
        buttonPositive: 'OK',
      },
    );

    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      setLocationLoading(true);

      Geolocation.getCurrentPosition(
        async position => {
          const {latitude, longitude} = position.coords;

          try {
            const response = await axios.get(
              `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`,
            );

            const address = response.data.display_name;
            const message = `Hi! The current location is: ${address} and here's the Link: https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`;
            const smsUrl = `sms:${Parent_Number}?body=${message}`;

            Linking.openURL(smsUrl)
              .then(() => {
                console.log('SMS app opened');
                setLocationLoading(false);
              })
              .catch(err => {
                setLocationLoading(false);

                console.error('Failed to open SMS app:', err);
              });
          } catch (err) {
            setLocationLoading(false);

            console.error('Error fetching address:', err);
          }
        },
        error => {
          setLocationLoading(false);

          console.error('Location error:', error);
        },
        {
          enableHighAccuracy: false,
          timeout: 30000,
          maximumAge: 10000,
        },
      );
    } else {
      console.log('Location permission denied');
    }
  };
  return (
    <View
      style={{
        justifyContent: 'space-between',
        paddingHorizontal: responsiveWidth(5.7),
        paddingTop: responsiveHeight(4.5),
        paddingBottom: responsiveHeight(2),
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: Color.white,
      }}>
      <View style={{flexDirection: 'row', alignItems: 'center', gap: 10}}>
        {showBackIcon ? (
          <TouchableOpacity onPress={handleBackPress}>
            <MaterialIcons
              name="arrow-back-ios"
              color={Color.themeColor}
              size={23}
            />
          </TouchableOpacity>
        ) : null}

        <Text
          style={{color: Color.themeColor, fontSize: responsiveFontSize(2.5)}}>
          Hey {name},
        </Text>
      </View>
      {notificationIcon ? (
        <TouchableOpacity>
          <SvgIcons xml={notification} height={'33'} width={'33'} />
        </TouchableOpacity>
      ) : (
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            gap: responsiveHeight(1),
          }}>
          {showAddress ? (
            <Button
              handlePress={getCurrentLocation}
              title={
                locationLoading ? (
                  <ActivityIndicator size={'small'} color={Color.white} />
                ) : (
                  'Share Location'
                )
              }
              width={responsiveWidth(30)}
              height={responsiveHeight(6)}
            />
          ) : null}

          <HeaderIcons
            handlePress={() => navigation.navigate('Settings')}
            Icon={Ionicons}
            iconName={'settings'}
          />
          <HeaderIcons
            handlePress={() => navigation.navigate('Home')}
            Icon={FontAwesome}
            iconName={'map-marker'}
          />
        </View>
      )}
    </View>
  );
};

export default Header;
