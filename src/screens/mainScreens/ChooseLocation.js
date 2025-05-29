/* eslint-disable react-native/no-inline-styles */
import {View} from 'react-native';
import React, {useRef, useState} from 'react';
import MapView, {Marker} from 'react-native-maps';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import {ApiKey} from '../../BaseUrl/Index';
import {getAddress} from '../../GlobalFunctions';
import {responsiveHeight} from '../../assets/Responsive_Dimensions';
import Button from '../../Components/Button';

const ChooseLocation = ({navigation}) => {
  const [selectedLocation, setSelectedLocation] = useState(null);
  const mapRef = useRef(null);
  const handleMapPress = async event => {
    const {latitude, longitude} = event.nativeEvent.coordinate;
    const response = await getAddress(latitude, longitude);
    console.log('response', response);
    setSelectedLocation({latitude, longitude});
  };
  console.log('selected location', selectedLocation);
  return (
    <View style={{flex: 1}}>
      <MapView
        style={{flex: 1}}
        mapType="terrain"
        ref={mapRef}
        onPress={handleMapPress}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}>
        {selectedLocation && <Marker coordinate={selectedLocation} />}
      </MapView>
      <View
        style={{
          position: 'absolute',
          top: 20,
          width: '90%',
          alignSelf: 'center',
        }}>
        <GooglePlacesAutocomplete
          placeholder="Search"
          onPress={(data, details = null) => {
            if (details) {
              const chosenRegion = {
                longitude: details.geometry.location.lng,
                latitude: details.geometry.location.lat,
                latitudeDelta: 0.02,
                longitudeDelta: 0.02,
              };
              setSelectedLocation({
                latitude: details.geometry.location.lat,
                longitude: details.geometry.location.lng,
                location: data.description,
              }); // Update the latLng state
              mapRef.current.animateToRegion(chosenRegion, 1000);
            } else {
              console.warn('No details available for the selected place.');
            }
          }}
          query={{
            key: ApiKey,
            language: 'en',
          }}
          fetchDetails
        />
      </View>
      <View
        style={{
          position: 'absolute',
          bottom: 10,
          width: '90%',
          alignSelf: 'center',
        }}>
        <Button
          mrgnTop={responsiveHeight(3)}
          title={'Upload'}
          height={responsiveHeight(5.5)}
          width={'100%'}
          handlePress={() =>
            navigation.navigate('BottomTabs', {
              screen: 'GROUPS',
              params: {latLng: selectedLocation},
            })
          }
        />
      </View>
    </View>
  );
};

export default ChooseLocation;
