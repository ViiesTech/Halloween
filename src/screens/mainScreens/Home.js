/* eslint-disable react-native/no-inline-styles */
import {Image, View} from 'react-native';
import React, { useEffect } from 'react';
import Header from '../../Components/Header';
import {images} from '../../assets/images';
import SearchInput from '../../Components/SearchInput';
import SearchButton from '../../Components/SearchButton';
import {styles} from '../../Styles';
const Home = ({navigation}) => {
 
  return (
    <View style={{flex: 1}}>
      <Header showBackIcon={true} handleBackPress={() => navigation.goBack()} />
      <View style={{flex: 1}}>
        <View>
          <Image
            style={{height: '100%', width: '100%'}}
            source={images.mapHome}
          />
        </View>
        <View style={styles.searchInputContainer}>
          <SearchInput />
          <SearchButton />
        </View>
      </View>
    </View>
  );
};

export default Home;
