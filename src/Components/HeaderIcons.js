import {TouchableOpacity} from 'react-native';
import React from 'react';
import {Color} from '../assets/Utils/Colors';
import {styles} from '../Styles';

const HeaderIcons = ({iconName, Icon, handlePress}) => {
  return (
    <TouchableOpacity onPress={handlePress} style={styles.headerIconStyle}>
      <Icon name={iconName} size={20} color={Color.themeColor} />
    </TouchableOpacity>
  );
};

export default HeaderIcons;
