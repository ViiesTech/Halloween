/* eslint-disable react-native/no-inline-styles */
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {styles} from '../Styles';
import {Color} from '../assets/Utils/Colors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {responsiveHeight} from '../assets/Responsive_Dimensions';
const Input = ({
  placeholder,
  keyboardType,
  label,
  isPassword,
  showPassword,
  handlePress,
}) => {
  return (
    <View style={{gap: 10}}>
      <Text style={styles.placeHolderStyle1}>{label}</Text>
      <View style={{}}>
        <TextInput
          secureTextEntry={showPassword}
          keyboardType={keyboardType ? keyboardType : 'default'}
          placeholder={placeholder}
          placeholderTextColor={Color.placeHolderTxt1}
          style={styles.inputStyle}
        />
        {isPassword ? (
          <TouchableOpacity
            onPress={handlePress}
            style={{
              position: 'absolute',
              height: '100%',
              justifyContent: 'center',
              right: responsiveHeight(2),
            }}>
            <Ionicons
              name={showPassword ? 'eye-off' : 'eye'}
              size={25}
              color={'#8D8D8D'}
            />
          </TouchableOpacity>
        ) : null}
      </View>
    </View>
  );
};

export default Input;
