/* eslint-disable react-native/no-inline-styles */
import {
  ActivityIndicator,
  Alert,
  FlatList,
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {styles} from '../../Styles';
import Post from '../../Components/Post';
import ProfileHeader from '../../Components/ProfileHeader';
import Modal from 'react-native-modal';
import {Color} from '../../assets/Utils/Colors';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from '../../assets/Responsive_Dimensions';
import SvgIcons from '../../Components/SvgIcons';
import {upload} from '../../assets/icons';
import {ShowToast} from '../../GlobalFunctions/ShowToast';
import ImageCropPicker from 'react-native-image-crop-picker';
import Button from '../../Components/Button';
import {useSelector} from 'react-redux';
import {addPost, getAllPosts} from '../../GlobalFunctions/Apis';
import axios from 'axios';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
const ScaryStories = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [caption, setCaption] = useState();
  const [selectedImage, setSelectedImage] = useState();
  const [postLoading, setPostLoading] = useState(false);
  const [commentModal, setCommentModal] = useState(false);
  const [postId, setPostId] = useState();
  const [commentmsg, setCommentMsg] = useState('');
  const [allComments, setAllComments] = useState([]);
  const [commentLoading, setCommentLoading] = useState(false);
  const [postUpdate, setPostUpdate] = useState(false);
  const userDetails = useSelector(state => state.user.userData);
  const token = useSelector(state => state.user.token);
  const handleImage = async () => {
    try {
      const image = await ImageCropPicker.openPicker({
        mediaType: 'photo',
        multiple: false,
      });
      setSelectedImage(image);
    } catch (error) {
      ShowToast('error', error.message || 'Something went wrong');
    }
  };
  const [data, setData] = useState([]);
  const postHandler = async () => {
    try {
      setPostLoading(true);
      const response = await addPost(
        selectedImage,
        caption,
        userDetails._id,
        token,
      );

      if (response.status) {
        setModalVisible(false);
        ShowToast('success', 'Post Created Successfully');
      } else {
        setModalVisible(false);
        ShowToast('error', response.message);
      }
      setPostLoading(false);
      setPostUpdate(!postUpdate);
    } catch (error) {
      setPostLoading(false);
      console.log('error', error);
    }
  };

  const getAllPostHandler = async () => {
    try {
      const response = await getAllPosts();
      setData(response.data);

      console.log('response', response);
    } catch (error) {
      ShowToast('error', error.response.data.message);

      console.log('error', error);
    }
  };

  const likepost = id => {
    let data = JSON.stringify({
      postId: id,
      userId: userDetails._id,
    });
    console.log('datadatadata', data);

    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: 'https://appsdemo.pro/Halloween/api/likePost',
      headers: {
        'Content-Type': 'application/json',
      },
      data: data,
    };

    axios
      .request(config)
      .then(response => {
        console.log(JSON.stringify(response.data));

        getAllPostHandler();
      })
      .catch(error => {
        console.log(error);
      });
  };

  const commentThePost = (id, comments) => {
    console.log('comments');
    setCommentModal(true);
    setPostId(id);
    setAllComments(comments.comment);
  };

  const sendComment = () => {
    if (commentmsg == '') {
      return Alert.alert('Please enter the comment');
    }
    setCommentLoading(true);
    let data = JSON.stringify({
      postId: postId,
      userId: userDetails?._id,
      text: commentmsg,
    });

    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: 'https://appsdemo.pro/Halloween/api/commentPost',
      headers: {
        'Content-Type': 'application/json',
      },
      data: data,
    };

    axios
      .request(config)
      .then(response => {
        console.log(JSON.stringify(response.data));
        setCommentModal(false);
        setCommentLoading(false);

        getAllPostHandler();
      })
      .catch(error => {
        setCommentLoading(false);

        console.log(error);
      });
  };

  useEffect(() => {
    getAllPostHandler();
  }, [postUpdate]);
  return (
    <View style={{flex: 1, backgroundColor: Color.white}}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.parentScrollContainer}>
        <ProfileHeader handlePress={() => setModalVisible(true)} />
        {data?.map(area => {
          return (
            <Post
              data={area}
              onLikePress={() => likepost(area?._id)}
              onCommentPress={() => commentThePost(area?._id, area)}
            />
          );
        })}
      </ScrollView>
      <Modal
        onBackdropPress={() => setModalVisible(!modalVisible)}
        backdropOpacity={0}
        isVisible={modalVisible}
        style={{flex: 1, margin: responsiveHeight(3)}}>
        <View
          style={{
            position: 'absolute',
            // top: responsiveHeight(2),
            padding: responsiveHeight(2.2),
            borderRadius: responsiveHeight(2),
            alignSelf: 'center',
            backgroundColor: Color.white,
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,

            elevation: 5,
          }}>
          {/* <Input
            color={Color.black}
            onChangeText={text => setCaption(text)}
            // onChangeText={text => handleInputChange('email', text)}
            placeholder={'Whats on your mind'}
          /> */}
          <TouchableOpacity
            onPress={() => setModalVisible(false)}
            style={{
              position: 'absolute',
              right: responsiveHeight(1),
              margin: responsiveHeight(1),
            }}>
            <Entypo name="circle-with-cross" size={responsiveFontSize(3)} />
          </TouchableOpacity>
          <TextInput
            onChangeText={text => setCaption(text)}
            style={{
              color: Color.black,
              borderColor: Color.placeHolderTxt1,
              marginVertical: responsiveHeight(1.5),
              fontSize: responsiveFontSize(2),
            }}
            placeholder="Whats on your mind?"
            placeholderTextColor={Color.placeHolderTxt1}
          />
          {selectedImage ? (
            <Image
              source={{uri: selectedImage.path}}
              style={{
                width: 150,
                height: 150,
                borderRadius: responsiveHeight(1),
                marginTop: 10,
                alignSelf: 'center',
              }}
            />
          ) : (
            <TouchableOpacity
              onPress={handleImage}
              style={{
                borderWidth: 2,
                borderColor: Color.themeColor,
                borderStyle: 'dashed',
                borderRadius: 5,
                alignItems: 'center',
                paddingVertical: responsiveHeight(4.2),
                marginTop: 10,
              }}>
              <SvgIcons xml={upload} height={60} width={60} />
              <Text
                style={{
                  color: Color.uploadImageText,
                  fontSize: responsiveFontSize(2.4),
                  fontWeight: 'bold',
                }}>
                Upload Images
              </Text>
              <Text
                style={{
                  width: responsiveWidth(70),
                  marginTop: 5,
                  fontSize: responsiveFontSize(1.8),
                  textAlign: 'center',
                  color: Color.placeHolderTxt2,
                }}>
                (345x255 or larger recommended, up to 1 MB each)
              </Text>
            </TouchableOpacity>
          )}

          <Button
            bgColor={Color.loginBtnColor}
            handlePress={postHandler}
            mrgnTop={responsiveHeight(2)}
            title={
              postLoading ? (
                <ActivityIndicator size={'large'} color={Color.white} />
              ) : (
                'Create Post'
              )
            }
          />
        </View>
      </Modal>

      <Modal
        isVisible={commentModal}
        style={{margin: 0, justifyContent: 'flex-end'}}
        onBackdropPress={() => setCommentModal(false)}>
        <View
          style={{
            height: responsiveHeight(70),
            backgroundColor: Color.white,
            width: responsiveWidth(100),
            borderTopRightRadius: 20,
            borderTopLeftRadius: 20,
            padding: 20,
            justifyContent: 'space-between',
          }}>
          <View>
            <TouchableOpacity
              style={{padding: 10, height: 40, width: 40}}
              onPress={() => setCommentModal(false)}>
              <Text style={{fontSize: responsiveFontSize(2)}}>X</Text>
            </TouchableOpacity>
            <Text
              style={{
                alignSelf: 'center',
                fontSize: responsiveFontSize(2.5),
                fontWeight: 'bold',
                marginBottom: responsiveHeight(1),
              }}>
              Comment
            </Text>
          </View>
          {commentLoading ? (
            <ActivityIndicator size={'large'} color={Color.black} />
          ) : (
            <FlatList
              data={allComments}
              contentContainerStyle={{gap: responsiveHeight(1)}}
              renderItem={({item}) => {
                console.log('item..................', item);

                return (
                  <View>
                    <View
                      style={{
                        flexDirection: 'row',
                        width: responsiveWidth(50),
                        gap: responsiveHeight(2),
                        alignItems: 'center',
                      }}>
                      <Ionicons
                        name={'person'}
                        size={responsiveFontSize(4)}
                        color={Color.black}
                      />
                      <View>
                        <Text
                          style={{
                            color: Color.black,
                            fontSize: responsiveFontSize(1.8),
                            fontWeight: 'bold',
                          }}>
                          {item.userId.name}
                        </Text>
                        <Text style={{fontSize: responsiveFontSize(2)}}>
                          {item?.text}
                        </Text>
                      </View>
                    </View>
                  </View>
                );
              }}
            />
          )}

          <View
            style={{
              borderWidth: 1,
              borderColor: 'black',
              borderRadius: 10,
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <TextInput
              placeholder="Type here"
              style={{width: responsiveWidth(80)}}
              onChangeText={txt => {
                setCommentMsg(txt);
              }}
              value={commentmsg}
            />

            <TouchableOpacity onPress={() => sendComment()}>
              <FontAwesome
                name={'send'}
                size={responsiveFontSize(2)}
                color={Color.black}
              />
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default ScaryStories;
