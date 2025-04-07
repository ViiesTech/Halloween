/* eslint-disable react-native/no-inline-styles */
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import React from 'react';
import {Color} from '../assets/Utils/Colors';
import {
  responsiveHeight,
  responsiveWidth,
} from '../assets/Responsive_Dimensions';
import {styles} from '../Styles';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
const Input2 = ({placeholder, keyboardType, label, multiline, icon}) => {
  return (
    <View style={{gap: 5, marginTop: responsiveHeight(2)}}>
      <Text style={styles.placeHolderStyle2}>{label}</Text>
      <View
        style={{
          backgroundColor: Color.white,
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 2,
          },
          borderWidth: 1,
          borderColor: Color.postBorderColor,
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          borderRadius: responsiveHeight(3.3),
          borderTopRightRadius: responsiveHeight(3.5),
          borderBottomRightRadius: 0,
          elevation: 5,
        }}>
        <TextInput
          multiline={multiline}
          keyboardType={keyboardType ? keyboardType : 'default'}
          placeholder={placeholder}
          textAlignVertical="top"
          placeholderTextColor={Color.placeHolderTxt1}
          style={{
            borderColor: Color.white,
            alignItems: 'center',
            borderWidth: 2,
            borderRadius: responsiveHeight(3.5),
            color: Color.black,
            width: responsiveWidth(85),
            padding: responsiveHeight(2),
            height: multiline ? responsiveHeight(15) : responsiveHeight(6.5),
          }}
        />
        {icon ? (
          <TouchableOpacity
            style={{
              position: 'absolute',
              right: 10,
              justifyContent: 'center',
              height: '100%',
            }}>
            <FontAwesome6
              name="location-crosshairs"
              color={Color.themeColor}
              size={25}
            />
          </TouchableOpacity>
        ) : null}
      </View>
    </View>
  );
};

export default Input2;
