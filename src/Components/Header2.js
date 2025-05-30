/* eslint-disable react-native/no-inline-styles */
import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Color} from '../assets/Utils/Colors';
import {
  responsiveFontSize,
  responsiveWidth,
} from '../assets/Responsive_Dimensions';
import {useNavigation} from '@react-navigation/native';

const Header2 = ({title}) => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        flexDirection: 'row',
        width: responsiveWidth(100),
        paddingHorizontal: responsiveWidth(5.7),
        paddingVertical: 20,
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Ionicons name="chevron-back" size={23} color={Color.black} />
      </TouchableOpacity>
      <Text
        style={{
          color: Color.themeColor,
          fontSize: responsiveFontSize(2.5),
          fontWeight: '500',
        }}>
        {title}
      </Text>
      <Text style={{color: Color.white}}>A</Text>
    </View>
  );
};

export default Header2;
