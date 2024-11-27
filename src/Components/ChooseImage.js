import {View, Text, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';
import {PickImage} from '../GlobalFunctions/ImagePicker';
import {Color} from '../assets/Utils/Colors';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from '../assets/Responsive_Dimensions';
import {upload} from '../assets/icons';
import SvgIcons from './SvgIcons';

const ChooseImage = () => {
  const [profileImage, setProfileImage] = useState();

  const handleImage = async () => {
    const image = await PickImage();
    setProfileImage(image);
    console.log('profileimage', profileImage);
  };
  return (
    <View>
      {profileImage ? (
        <TouchableOpacity onPress={handleImage}>
          <Image
            style={{
              height: responsiveHeight(20),
              width: responsiveHeight(40),
              marginTop: 10,
            }}
            resizeMode="contain"
            source={{uri: profileImage.path}}
          />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          onPress={handleImage}
          style={{
            borderWidth: 2,
            borderColor: Color.themeColor,
            borderStyle: 'dashed',
            borderRadius: 5,
            alignItems: 'center',
            paddingVertical: responsiveHeight(4.2),
            marginTop: 10,
          }}>
          <View style={{}}>
            <SvgIcons xml={upload} height={60} width={60} />
          </View>
          <Text
            style={{
              color: Color.uploadImageText,
              fontSize: responsiveFontSize(2.4),
              fontWeight: 'bold',
            }}>
            Upload Image
          </Text>
          <Text
            style={{
              width: responsiveWidth(70),
              marginTop: 5,
              fontSize: responsiveFontSize(1.8),
              textAlign: 'center',
              color: Color.placeHolderTxt2,
            }}>
            (345x255 or larger recommended, up to 1 MB each)
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default ChooseImage;
