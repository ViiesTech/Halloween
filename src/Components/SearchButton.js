import {TouchableOpacity} from 'react-native';
import React from 'react';
import {Color} from '../assets/Utils/Colors';
import {
  responsiveHeight,
  responsiveWidth,
} from '../assets/Responsive_Dimensions';
import Ionicons from 'react-native-vector-icons/Ionicons';
const SearchButton = ({handlePress}) => {
  return (
    <TouchableOpacity
      onPress={handlePress}
      style={{
        borderRadius: responsiveHeight(1.5),
        borderBottomLeftRadius: 0,
        backgroundColor: Color.themeColor,
        alignItems: 'center',
        justifyContent: 'center',
        height: responsiveHeight(6),
        paddingHorizontal: responsiveWidth(3.5),
      }}>
      <Ionicons name="search" color={Color.white} size={25} />
    </TouchableOpacity>
  );
};

export default SearchButton;
