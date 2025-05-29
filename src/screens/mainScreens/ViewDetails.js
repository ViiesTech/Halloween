/* eslint-disable react-native/no-inline-styles */
import {View, Text, Image, TouchableOpacity, ScrollView} from 'react-native';
import React from 'react';
import {Color} from '../../assets/Utils/Colors';
import Header from '../../Components/Header';
import Hr from '../../Components/Hr';
import {images} from '../../assets/images';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from '../../assets/Responsive_Dimensions';
import {styles} from '../../Styles';
import IconContainer from '../../Components/IconContainer';
import MapView, {Marker} from 'react-native-maps';
import {BaseUrl} from '../../BaseUrl/Index';

const ViewDetails = ({navigation, route}) => {
  const {
    candayName,
    candyDetails,
    startime,
    endtime,
    Latitude,
    longtitude,
    candyImage,
    decorationCreativity,
    attraction,
    price,
    candyType,
  } = route?.params?.data;
  const {name} = route?.params?.data?.userId;
  console.log('route.params====h', decorationCreativity);
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={[
        styles.parentScrollContainer,
        {paddingBottom: 20},
      ]}>
      <Header showBackIcon={true} handleBackPress={() => navigation.goBack()} />
      <Hr />
      <View style={{paddingHorizontal: responsiveWidth(5.7)}}>
        <View style={{flexDirection: 'row', alignItems: 'center', gap: 5}}>
          <Image
            source={images.profile}
            style={{height: responsiveHeight(7), width: responsiveWidth(17)}}
            resizeMode="contain"
          />
          <Text style={{fontSize: responsiveFontSize(2.4), color: Color.black}}>
            {name}
          </Text>
        </View>

        {/* <View style={{gap: 5, marginTop: responsiveHeight(3)}}>
          <Text style={styles.detailsHeading}>Category</Text>
          <Text style={styles.detailsText}>{candayName}</Text>
        </View> */}
        <View style={{gap: 5, marginTop: 15}}>
          <Text style={styles.detailsHeading}>Candy Type</Text>
          <Text style={styles.detailsText}>{candyType}</Text>
        </View>
        {decorationCreativity ? (
          <View style={{gap: 5, marginTop: 15}}>
            <Text style={styles.detailsHeading}>Decoration Creativity</Text>
            <Text style={styles.detailsText}>{decorationCreativity}</Text>
          </View>
        ) : null}
        <View style={{gap: 5, marginTop: 15}}>
          <Text style={styles.detailsHeading}>Candy Details</Text>
          <Text style={styles.detailsText}>{candyDetails}</Text>
        </View>
        {attraction ? (
          <View style={{gap: 5, marginTop: 15}}>
            <Text style={styles.detailsHeading}>Attraction</Text>
            <Text style={styles.detailsText}>{attraction}</Text>
          </View>
        ) : null}
        {price ? (
          <View style={{gap: 5, marginTop: 15}}>
            <Text style={styles.detailsHeading}>Fees</Text>
            <Text style={styles.detailsText}>${price}</Text>
          </View>
        ) : null}

        <View
          style={{
            flexDirection: 'row',
            gap: responsiveHeight(1),
            marginTop: responsiveHeight(3),
          }}>
          <IconContainer
            styleName={'timeContainer2'}
            source={'clock'}
            height={3}
            width={5}
          />
          <View>
            <Text style={styles.listingSemiHeading}>Availability Time:</Text>
            <Text style={styles.listingText}>
              {startime} - {endtime}
            </Text>
          </View>
        </View>
        <View>
          <Text
            style={[styles.detailsHeading, {marginTop: responsiveHeight(3)}]}>
            Location
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <Image
              source={images.map}
              resizeMode="contain"
              style={{height: responsiveHeight(20), width: '100%'}}
            />
          </TouchableOpacity>
          {/* <View
            style={{
              borderRadius: responsiveHeight(2),
              overflow: 'hidden',
              height: responsiveHeight(20),
              width: '100%',
              marginTop: responsiveHeight(2),
              backgroundColor: 'red', // optional, for wrapper bg
            }}>
            <MapView
              initialRegion={{
                latitude: Latitude,
                longitude: longtitude,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
              }}
              style={{
                height: '100%',
                width: '100%',
              }}>
              {candyImage.map((item, index) => (
                <Marker
                  title={`Candy${index + 1}`}
                  key={index}
                  coordinate={{
                    latitude: Latitude,
                    longitude: longtitude,
                  }}>
                  <View
                    style={{
                      width: responsiveWidth(8),
                      height: responsiveWidth(10),
                      borderRadius: responsiveWidth(5),
                      overflow: 'hidden',
                    }}>
                    <Image
                      source={{uri: `https://appsdemo.pro/Halloween/${item}`}}
                      style={{width: '100%', height: '100%'}}
                      resizeMode="contain"
                    />
                  </View>
                </Marker>
              ))}
            </MapView>
          </View> */}
        </View>
      </View>
    </ScrollView>
  );
};

export default ViewDetails;
