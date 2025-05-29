import Geocoder from 'react-native-geocoding';

export const getAddress = async (lng, lat) => {
  try {
    const geoResult = await Geocoder.from(lng, lat);
    const address = geoResult.results[0].formatted_address;
    return address;
  } catch (error) {
    console.warn('Error fetching address from coordinates:', error);
    throw error;
  }
};
