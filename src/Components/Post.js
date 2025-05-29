/* eslint-disable react-native/no-inline-styles */
import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Color} from '../assets/Utils/Colors';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from '../assets/Responsive_Dimensions';
import {styles} from '../Styles';
import {BaseUrl} from '../BaseUrl/Index';
import axios from 'axios'
import { useSelector } from 'react-redux';
import moment from 'moment'
import Ionicons from 'react-native-vector-icons/Ionicons'
const Post = ({data,  onLikePress,onCommentPress}) => {
console.log('data',data);
  
  const userData = data.user_id
  
  const timeAgo = moment(data.createdAt).fromNow()



  return (
    <View style={styles.postContainer}>
      <View style={{flexDirection: 'row', alignItems: 'center', gap: 15}}>
        <View>
          <Ionicons
          name={"person"}
          size={responsiveFontSize(4)}
          color={Color.black}
          />
      
        </View>
        <View>
          <View style={{flexDirection: 'row', alignItems: 'center', gap: 10}}>
            <Text
              style={{
                color: Color.black,
                fontSize: responsiveFontSize(2),
                fontWeight: '500',
              }}>
              {userData?.name}
            </Text>
         
          </View>
          <Text style={{color: Color.black, fontWeight: '450'}}>
            {timeAgo}
          </Text>
        </View>
      </View>

      <View style={styles.captionPostCotainer}>
        <Text style={styles.captionText}>{data.description}</Text>
        <Image
          source={{
            uri: `https://appsdemo.pro/Halloween/${data.image[0]}`,
          }}
          style={styles.postImage}
        />
      </View>
      <View style={styles.actionsContainer}>
        <View style={{flexDirection: 'row', gap: 15}}>
          <TouchableOpacity
          onPress={onLikePress}
            style={{flexDirection: 'row', gap: 5, alignItems: 'center'}}>
            <AntDesign name="like2" size={20} color={Color.black} />
            <Text>{data?.like?.length}</Text>
          </TouchableOpacity>
          <TouchableOpacity
          onPress={onCommentPress}
            style={{flexDirection: 'row', gap: 5, alignItems: 'center'}}>
            <MaterialCommunityIcons
              name="comment-outline"
              size={20}
              color={Color.black}
            />
            <Text>{data?.comment?.length}</Text>
          </TouchableOpacity>
          {/* <TouchableOpacity
            style={{flexDirection: 'row', gap: 5, alignItems: 'center'}}>
            <MaterialCommunityIcons
              name="share-outline"
              size={20}
              color={Color.black}
            />
            <Text>{data?.share?.length}</Text>
          </TouchableOpacity> */}
        </View>
        <TouchableOpacity >
          <Entypo name="dots-three-vertical" size={20} color={Color.black} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Post;
