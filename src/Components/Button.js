import {Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {
  responsiveHeight,
  responsiveWidth,
} from '../assets/Responsive_Dimensions';
import {styles} from '../Styles';
import {Color} from '../assets/Utils/Colors';

const Button = ({title, handlePress, height, width, mrgnTop, bgColor}) => {
  return (
    <TouchableOpacity
      onPress={handlePress}
      style={[
        styles.btnStyle,
        {
          height: height ? height : responsiveHeight(6.5),
          width: width ? width : responsiveWidth(85),
          marginTop: mrgnTop,
          backgroundColor: bgColor ? bgColor : Color.themeColor,
        },
      ]}>
      <Text style={styles.btnTxt}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
