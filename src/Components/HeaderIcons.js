import { TouchableOpacity } from 'react-native'
import React from 'react'
import { Color } from '../assets/Utils/Colors'
import { responsiveHeight, responsiveWidth } from '../assets/Responsive_Dimensions'
import { styles } from '../Styles'

const HeaderIcons = ({iconName,Icon}) => {
  return (
    <TouchableOpacity style={styles.headerIconStyle}>
    <Icon name={iconName} size={20} color={Color.themeColor}/>
    </TouchableOpacity>
  )
}

export default HeaderIcons