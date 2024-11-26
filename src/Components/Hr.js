import {View} from 'react-native';
import React from 'react';
import { responsiveHeight, responsiveWidth } from '../assets/Responsive_Dimensions';
import { Color } from '../assets/Utils/Colors';

const Hr = () => {
  return (
    <View
      style={{
        height: 1,
        width: responsiveWidth(100),
        backgroundColor: Color.hrColor,
        marginBottom: responsiveHeight(2.8),
      }}></View>
  );
};

export default Hr;
