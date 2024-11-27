import {Image, View} from 'react-native';
import React from 'react';
import Header from '../../Components/Header';
import MapView, {Marker} from 'react-native-maps';
import {images} from '../../assets/images';
import SearchInput from '../../Components/SearchInput';
import SearchButton from '../../Components/SearchButton';
import {styles} from '../../Styles';
const Home = ({navigation}) => {
  const nearbyPlaces = [
    {
      id: 1,
      latitude: 37.78945,
      longitude: -122.4421,
      title: 'Place 1',
      image: images.halloween,
    },
    {
      id: 2,
      latitude: 37.78999,
      longitude: -122.4631,
      title: 'Place 2',
      image: images.halloweenSmall,
    },
    {
      id: 3,
      latitude: 37.797983,
      longitude: -122.4591,
      title: 'Place 3',
      image: images.halloweenSmall,
    },
    {
      id: 4,
      latitude: 37.75985,
      longitude: -122.4241,
      title: 'Place 3',
      image: images.halloween,
    },
    {
      id: 5,
      latitude: 37.73585,
      longitude: -122.4541,
      title: 'Place 3',
      image: images.halloween,
    },
  ];
  return (
    <View style={{flex: 1}}>
      <Header showBackIcon={true} handleBackPress={()=>navigation.goBack()}/>
      <View style={{flex: 1}}>
        <View>
          <Image style={{height:'100%',width:'100%'}}   source={images.mapHome}/>
        </View>
        <View style={styles.searchInputContainer}>
          <SearchInput />
          <SearchButton />
        </View>
        {/* <MapView
          style={{flex: 1}}
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}>
          {nearbyPlaces.map(place => (
            <Marker
              key={place.id}
              coordinate={{
                latitude: place.latitude,
                longitude: place.longitude,
              }}
              title={place.title}
              image={place.image}
            />
          ))}{' '}
        </MapView> */}
      </View>
    </View>
  );
};

export default Home;
