import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from '../assets/Responsive_Dimensions';
import HeaderIcons from './HeaderIcons';
import {Color} from '../assets/Utils/Colors';
import SvgIcons from './SvgIcons';
import { notification } from '../assets/icons';
const Header = ({notificationIcon}) => {
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
      <Text
        style={{color: Color.themeColor, fontSize: responsiveFontSize(2.5)}}>
        Hey Alex,
      </Text>
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
          <HeaderIcons Icon={Ionicons} iconName={'settings'} />
          <HeaderIcons Icon={FontAwesome} iconName={'map-marker'} />
        </View>
      )}
    </View>
  );
};

export default Header;
