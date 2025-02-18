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

const ViewDetails = ({navigation}) => {
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
            John Doe
          </Text>
        </View>

        <View style={{gap: 5, marginTop: responsiveHeight(3)}}>
          <Text style={styles.detailsHeading}>Category</Text>
          <Text style={styles.detailsText}>King Size Candy</Text>
        </View>
        <View style={{gap: 5, marginTop: 15}}>
          <Text style={styles.detailsHeading}>Candy Details</Text>
          <Text style={styles.detailsText}>
            Lorem ipsum simply dummy text is for using pricing and printing and
            the very lorem ipsum dolor sit. amet is for dummy text is for using
            printing or pricing.
          </Text>
        </View>

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
            <Text style={styles.listingText}>10:00 AM - 06:00 PM</Text>
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
        </View>
      </View>
    </ScrollView>
  );
};

export default ViewDetails;
