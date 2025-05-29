/* eslint-disable react-native/no-inline-styles */
import {View, Text, TouchableOpacity, Image, ScrollView} from 'react-native';
import React, {useState} from 'react';
import {PickImage} from '../GlobalFunctions/ImagePicker'; // Make sure this supports multiple images
import {Color} from '../assets/Utils/Colors';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from '../assets/Responsive_Dimensions';
import {upload} from '../assets/icons';
import SvgIcons from './SvgIcons';
import Entypo from 'react-native-vector-icons/Entypo';
const ChooseImage = ({onImagesSelected}) => {
  const [images, setImages] = useState();
  const handleImage = async () => {
    const selectedImages = await PickImage(false); // single image picker
    if (selectedImages && selectedImages.length > 0) {
      const newImage = selectedImages[0];
      setImages(newImage); // replace with single image
      if (onImagesSelected) {
        onImagesSelected(newImage);
      }
    }
  };

  return (
    <View>
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
        <SvgIcons xml={upload} height={60} width={60} />
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
          (345x255 or larger recommended, up to 1 MB)
        </Text>
      </TouchableOpacity>

      {images ? (
        <View
          style={{
            marginTop: 10,
            width: responsiveHeight(20),
            alignSelf: 'center',
          }}>
          <TouchableOpacity
            onPress={() => setImages()}
            style={{
              position: 'absolute',
              zIndex: 10,
              right: 2,
              margin: 5,
              backgroundColor: Color.black,
              padding: 2,
              borderRadius: responsiveHeight(2),
            }}>
            <Entypo size={20} name="cross" color={Color.white} />
          </TouchableOpacity>
          <Image
            style={{
              height: responsiveHeight(20),
              width: responsiveHeight(20),
              marginRight: 10,
              borderRadius: 10,
            }}
            resizeMode="cover"
            source={{uri: images.path}}
          />
        </View>
      ) : null}
    </View>
  );
};

export default ChooseImage;
