/* eslint-disable react-native/no-inline-styles */
import {View, Text, Image} from 'react-native';
import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Button from './Button';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from '../assets/Responsive_Dimensions';
import {Color} from '../assets/Utils/Colors';
import {styles} from '../Styles';
import IconContainer from './IconContainer';

const Listings = ({data, buttonPressHandler}) => {
  return (
    <View
      style={{
        paddingHorizontal: responsiveWidth(5),
        marginVertical: responsiveHeight(2),
      }}>
      <View style={styles.listingCard}>
        <View style={{flexDirection: 'row'}}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              width: '55%',

              gap: responsiveHeight(1.5),
            }}>
            <Text
              style={{
                fontSize: responsiveFontSize(2),
                color: Color.black,
                fontWeight: '450',
              }}>
              {data.userId.name}
            </Text>
            <Text
              style={{
                fontSize: responsiveFontSize(1),
                color: Color.justNowTxt,
              }}>
              Just Now
            </Text>
          </View>
          <Text
            style={{
              color: Color.themeColor,
              fontSize: responsiveFontSize(2),
              fontWeight: '450',
              width: '40%',
            }}>
            {data.candayName}
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <View style={{width: '55%'}}>
            <View
              style={{
                flexDirection: 'row',
                gap: responsiveHeight(1.5),
                alignItems: 'center',
                marginTop: responsiveHeight(2.5),
              }}>
              <IconContainer
                styleName={'locationContainer'}
                Icon={FontAwesome}
                iconName={'map-marker'}
                iconSize={20}
              />
              <View>
                <Text style={styles.listingSemiHeading}>Location</Text>
                <Text style={styles.listingText}>{data.address}</Text>
              </View>
            </View>
          </View>

          <View style={{}}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                gap: responsiveHeight(1),
                marginTop: responsiveHeight(2),
              }}>
              <IconContainer
                styleName={'timeContainer'}
                source={'clock'}
                height={3}
                width={5}
              />
              <View style={{}}>
                <Text style={styles.listingSemiHeading}>Time:</Text>
                <Text style={styles.listingText}>
                  {`${data.startime} - ${data.endtime}`}
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
  );
};

export default Listings;
