import { View, Text, TextInput } from 'react-native'
import React from 'react'
import { styles } from '../Styles'
import { Color } from '../assets/Utils/Colors'

const Input = ({placeholder,keyboardType,label}) => {
  return (
    <View style={{gap:10}}>
    <Text style={styles.placeHolderStyle1}>{label}</Text>
    <TextInput keyboardType={keyboardType ? keyboardType : 'default'} placeholder={placeholder} placeholderTextColor={Color.placeHolderTxt1} style={styles.inputStyle}/>
  </View>
  )
}

export default Input