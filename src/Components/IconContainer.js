import {View, Image} from 'react-native';
import React from 'react';
import {styles} from '../Styles';
import {images} from '../assets/images';
import {
  responsiveHeight,
  responsiveWidth,
} from '../assets/Responsive_Dimensions';
import {Color} from '../assets/Utils/Colors';

const IconContainer = ({
  styleName,
  source,
  height,
  width,
  Icon,
  iconName,
  iconSize,
}) => {
  return (
    <View style={styles[styleName]}>
      <View style={{flex: 1, justifyContent: 'center'}}>
        {Icon ? (
          <Icon name={iconName} size={iconSize} color={Color.white} />
        ) : (
          <Image
            resizeMode="contain"
            source={images[source]}
            style={{
              height: responsiveHeight(height),
              width: responsiveWidth(width),
            }}
          />
        )}
      </View>
    </View>
  );
};

export default IconContainer;
