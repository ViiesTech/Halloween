import {Text, TouchableOpacity} from 'react-native';
import React from 'react';
import FastImage from 'react-native-fast-image';
import {images} from '../assets/images';

import {styles} from '../Styles';

const SocialButtons = ({title, iconName}) => {
  return (
    <TouchableOpacity style={styles.socialButtonStyle}>
      <FastImage style={{height: 30, width: 30}} source={images[iconName]} />
      <Text style={styles.socialBtnText}>{title}</Text>
    </TouchableOpacity>
  );
};

export default SocialButtons;
