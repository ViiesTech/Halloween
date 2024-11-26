import {View, TextInput} from 'react-native';
import React from 'react';
import {
  responsiveHeight,
  responsiveWidth,
} from '../assets/Responsive_Dimensions';
import {Color} from '../assets/Utils/Colors';

const SearchInput = () => {
  return (
    <View style={{}}>
      <TextInput
        style={{
          height: responsiveHeight(6),
          width: responsiveWidth(70),
          paddingHorizontal: responsiveHeight(2),
          borderRadius: responsiveHeight(1.3),
          zIndex: 10,
          borderBottomRightRadius: 0,
          backgroundColor: Color.white,
          shadowColor: Color.searchInputElevation,
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          elevation: 4,
        }}
        placeholder="Search Here..."
        placeholderTextColor={Color.searchInputPlaceHolder}
      />
    </View>
  );
};

export default SearchInput;
