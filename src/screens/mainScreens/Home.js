/* eslint-disable react-native/no-inline-styles */
import {Image, View} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import Header from '../../Components/Header';
import SearchInput from '../../Components/SearchInput';
import SearchButton from '../../Components/SearchButton';
import {styles} from '../../Styles';
import MapView, {Marker} from 'react-native-maps';
import {getAllCandyPost} from '../../GlobalFunctions/Apis';
import {useSelector} from 'react-redux';
import {responsiveWidth} from '../../assets/Responsive_Dimensions';
import {images} from '../../assets/images';
const Home = ({navigation}) => {
  const {token} = useSelector(state => state.user);
  const [data, setData] = useState([]);
  const mapRef = useRef(null);
  const [latLng, setLatLng] = useState({
    latitude: 37.7749,
    longitude: 122.4194,
    latitudeDelta: 0.05,
    longitudeDelta: 0.05,
  });
  console.log('latLng', latLng);

  const getCandyData = async () => {
    try {
      const response = await getAllCandyPost(token);
      console.log('response', response.data.data);
      setData(response.data.data);
    } catch (error) {
      setIsLoading(false);
      console.log('error', error);
    }
  };

  useEffect(() => {
    if (data.length > 0) {
      const lat = data[0].Latitude;
      const lng = data[0].longtitude;
      setLatLng({
        latitude: lat,
        longitude: lng,
        latitudeDelta: 0.05,
        longitudeDelta: 0.05,
      });
    }
  }, [data]);
  useEffect(() => {
    if (latLng && mapRef.current) {
      mapRef.current.animateToRegion(latLng, 1000); // 1000ms duration for the transition
    }
  }, [latLng]);
  useEffect(() => {
    getCandyData();
  }, []);

  return (
    <View style={{flex: 1}}>
      <Header showBackIcon={true} handleBackPress={() => navigation.goBack()} />
      <View style={{flex: 1}}>
        {/* <MapView
          style={{flex: 1}}
          ref={mapRef} // Set the ref for the MapView
          region={latLng}
          >
          {data.map((location, locIndex) =>
            location.candyImage.map((img, imgIndex) => (
              <Marker
                key={`${locIndex}-${imgIndex}`}
                title={`Candy ${imgIndex + 1}`}
                coordinate={{
                  latitude: latLng?.latitude,
                  longitude: latLng?.longitude,
                }}>
                <View
                  style={{
                    width: responsiveWidth(8),
                    height: responsiveWidth(10),
                    borderRadius: responsiveWidth(5),
                    overflow: 'hidden',
                  }}>
                  <Image
                    source={{uri: `https://appsdemo.pro/Halloween/${img}`}}
                    style={{width: '100%', height: '100%'}}
                    resizeMode="contain"
                  />
                </View>
              </Marker>
            )),
          )}
        </MapView> */}
        <Image source={images.mapHome} />
        <View style={styles.searchInputContainer}>
          <SearchInput />
          <SearchButton />
        </View>
      </View>
    </View>
  );
};

export default Home;
