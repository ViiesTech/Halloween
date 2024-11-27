import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
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
const Header = ({notificationIcon, handleBackPress, showBackIcon}) => {
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
          Hey Alex,
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
          <HeaderIcons Icon={Ionicons} iconName={'settings'} />
          <HeaderIcons Icon={FontAwesome} iconName={'map-marker'} />
        </View>
      )}
    </View>
  );
};

export default Header;
