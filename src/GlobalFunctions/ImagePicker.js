import ImagePicker from 'react-native-image-crop-picker';

export const PickImage = async (multiple = false) => {
  try {
    if (multiple) {
      const images = await ImagePicker.openPicker({
        multiple: multiple,
        mediaType: 'photo',
      });
      return images; // returns an array
    } else {
      const image = await ImagePicker.openPicker({
        width: 300,
        height: 400,
        cropping: true,
      });
      return [image]; // wrapped in an array for consistency
    }
  } catch (error) {
    console.log('Image pick error:', error);
    return [];
  }
};
