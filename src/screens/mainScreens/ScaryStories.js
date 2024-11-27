import {View, Text, Image, TouchableOpacity, ScrollView} from 'react-native';
import React from 'react';
import {styles} from '../../Styles';
import Header from '../../Components/Header';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {images} from '../../assets/images';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from '../../assets/Responsive_Dimensions';
import {Color} from '../../assets/Utils/Colors';
import Post from '../../Components/Post';

const ScaryStories = () => {
  const data = [
    {
      id: 1,
      profilePic: images.profile3,
      name: 'Charles James',
      timeAgo: '7h',
      caption:
        'Lorem ipsum dolor sit amet, consetetur sadipscing elitr,  sed diam nonumy',
      post: images.post1,
      totalLikes: 196,
      totalComments: 20,
      totalShares: 5,
    },
    {
      id: 2,
      profilePic: images.profile4,
      name: 'Dave Miller',
      timeAgo: '7h',
      caption:
        'Lorem ipsum dolor sit amet, consetetur sadipscing elitr,  sed diam nonumy',
      post: images.post2,
      totalLikes: 196,
      totalComments: 20,
      totalShares: 5,
    },
  ];
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.parentScrollContainer}>
      <Header notificationIcon={true} />
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
      {data.map(area => {
        return <Post data={area} />;
      })}
    </ScrollView>
  );
};

export default ScaryStories;
