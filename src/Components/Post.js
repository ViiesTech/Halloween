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

const Post = ({data}) => {
  return (
    <View style={styles.postContainer}>
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

      <View style={styles.captionPostCotainer}>
        <Text style={styles.captionText}>{data.caption}</Text>
        <Image source={data.post} style={styles.postImage} />
      </View>
      <View style={styles.actionsContainer}>
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
