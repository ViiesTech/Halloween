import {View, Text, Image} from 'react-native';
import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Button from './Button';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from '../assets/Responsive_Dimensions';
import { Color } from '../assets/Utils/Colors';
import { images } from '../assets/images';
import { styles } from '../Styles';

const Listings = ({data,buttonPressHandler}) => {
  return (
    <View  style={{paddingHorizontal: responsiveWidth(5.7),marginBottom:responsiveHeight(2)}}>
    <View
      style={styles.listingCard}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <View style={{width: '50%'}}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              gap: responsiveHeight(1.5),
            }}>
            <Text
              style={{
                fontSize: responsiveFontSize(2),
                color: Color.black,
                fontWeight: '450',
              }}>
              {data.name}
            </Text>
            <Text
              style={{
                fontSize: responsiveFontSize(1),
                color: Color.justNowTxt,
              }}>
              {data.timeAgo}
            </Text>
          </View>

          <View
            style={{
              flexDirection: 'row',
              gap: responsiveHeight(1.5),
              marginTop: responsiveHeight(2.5),
            }}>
            <View
              style={styles.locationContainer}>
              <View style={{flex: 1, justifyContent: 'center'}}>
                <FontAwesome
                  name="map-marker"
                  size={20}
                  color={Color.white}
                />
              </View>
            </View>
            <View>
              <Text
                style={styles.listingSemiHeading}>
                Location
              </Text>
              <Text
                style={styles.listingText}>
               {data.location}
              </Text>
            </View>
          </View>
        </View>

        <View style={{width: '50%'}}>
          <View style={{}}>
            <Text
              style={{
                color: Color.themeColor,
                fontSize: responsiveFontSize(2),
                fontWeight: '450',
              }}>
             {data.itemType}
            </Text>
          </View>

          <View
            style={{
              flexDirection: 'row',
              gap: responsiveHeight(1),
              marginTop: responsiveHeight(2),
            }}>
            <View
              style={styles.timeContainer}>
              <View style={{flex: 1, justifyContent: 'center'}}>
                <Image
                  resizeMode="contain"
                  source={images.clock}
                  style={{
                    height: responsiveHeight(3),
                    width: responsiveWidth(5),
                  }}
                />
              </View>
            </View>
            <View>
              <Text
                style={styles.listingSemiHeading}>
                Time:
              </Text>
              <Text
                style={styles.listingText}>
                {data.time}
              </Text>
            </View>
          </View>
        </View>
      </View>

      <Button
        mrgnTop={responsiveHeight(2)}
        height={responsiveHeight(4.7)}
        width={'100%'}
        handlePress={buttonPressHandler}
        title={'View Details'}
      />
    </View>
  </View>
  )
}

export default Listings