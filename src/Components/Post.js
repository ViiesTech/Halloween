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
import {images} from '../assets/images';

const Post = ({data}) => {
  return (
    <View
      style={{
        paddingHorizontal: responsiveWidth(5.7),
        paddingVertical: responsiveHeight(2.5),
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        backgroundColor: Color.white,
        elevation: 5,
        marginBottom: responsiveHeight(3),
      }}>
      <View style={{flexDirection: 'row', alignItems: 'center', gap: 15}}>
        <View>
          <Image
            source={data.profilePic}
            style={{
              height: responsiveHeight(6),
              width: responsiveWidth(13),
              borderRadius: 10,
            }}
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
              {data.name}
            </Text>
            <Text style={{color: Color.black, fontWeight: '300'}}>
              added a new photo
            </Text>
          </View>
          <Text style={{color: Color.black, fontWeight: '450'}}>
            {data.timeAgo}
          </Text>
        </View>
      </View>

      <View
        style={{
          borderWidth: 1,
          borderColor: Color.themeColor,
          borderBottomWidth: null,
          borderTopLeftRadius: 3,
          borderTopRightRadius: 5,
          borderTopLeftRadius: 7,
          borderTopRightRadius: 7,
          borderBottomLeftRadius: 10,
          borderBottomRightRadius: 10,
          marginTop: responsiveHeight(2),
        }}>
        <Text
          style={{
            padding: 15,
            paddingBottom: 20,
            color: Color.black,
            fontSize: responsiveFontSize(1.7),
          }}>
          {data.caption}
        </Text>
        <Image
          source={data.post}
          style={{
            height: responsiveHeight(25),
            width: '100%',
            borderTopLeftRadius: 5,
            borderTopRightRadius: 5,
            borderBottomLeftRadius: 10,
            borderBottomRightRadius: 10,
          }}
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginTop: responsiveHeight(2),
        }}>
        <View style={{flexDirection: 'row', gap: 15}}>
          <TouchableOpacity
            style={{flexDirection: 'row', gap: 5, alignItems: 'center'}}>
            <AntDesign name="like2" size={20} color={Color.black} />
            <Text>{data.totalLikes}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{flexDirection: 'row', gap: 5, alignItems: 'center'}}>
            <MaterialCommunityIcons
              name="comment-outline"
              size={20}
              color={Color.black}
            />
            <Text>{data.totalComments}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{flexDirection: 'row', gap: 5, alignItems: 'center'}}>
            <MaterialCommunityIcons
              name="share-outline"
              size={20}
              color={Color.black}
            />

            <Text>{data.totalShares}</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity>
          <Entypo name="dots-three-vertical" size={20} color={Color.bl} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Post;
