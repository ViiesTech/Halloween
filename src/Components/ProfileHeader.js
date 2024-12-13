import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from '../assets/Responsive_Dimensions';
import {images} from '../assets/images';
import {Color} from '../assets/Utils/Colors';
import {styles} from '../Styles';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';

const ProfileHeader = () => {
  return (
    <View style={styles.profileHeaderContainer}>
      <View style={{flexDirection: 'row', alignItems: 'center', gap: 5}}>
        <TouchableOpacity>
          <Image
            source={images.profile2}
            style={{height: responsiveHeight(10), width: responsiveWidth(20)}}
          />
        </TouchableOpacity>
        <View>
          <Text
            style={{
              color: Color.black,
              fontWeight: '500',
              fontSize: responsiveFontSize(2.2),
            }}>
            John Doe
          </Text>
          <Text
            style={{
              color: Color.black,
              fontWeight: '400',
              marginTop: 5,
              width: responsiveWidth(50),
            }}>
            What do you want to talk about?
          </Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              gap: 20,
              marginTop: 5,
            }}>
            <View style={styles.iconTxtContainer}>
              <MaterialIcons name="photo" size={20} color="#000" />
              <Text style={{color: Color.black, fontWeight: '400'}}>
                Photos
              </Text>
            </View>
            <View style={styles.iconTxtContainer}>
              <FontAwesome name="map-marker" size={20} color="#000" />
              <Text style={{color: Color.black, fontWeight: '400'}}>
                Location
              </Text>
            </View>
          </View>
        </View>
      </View>
      <TouchableOpacity style={styles.goContainer}>
        <Ionicons name="chevron-forward" size={25} color={Color.white} />
      </TouchableOpacity>
    </View>
  );
};

export default ProfileHeader;
