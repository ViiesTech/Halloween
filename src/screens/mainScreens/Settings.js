/* eslint-disable eslint-comments/no-unused-disable */
/* eslint-disable react-native/no-inline-styles */
import {View, Text, FlatList, TouchableOpacity, Alert} from 'react-native';
import React, {useEffect} from 'react';
import {Color} from '../../assets/Utils/Colors';
import Header from '../../Components/Header';
import Header2 from '../../Components/Header2';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from '../../assets/Responsive_Dimensions';
import {useDispatch, useSelector} from 'react-redux';
import SvgIcons from '../../Components/SvgIcons';
import {arrowForward} from '../../assets/icons';
import {clearToken} from '../../redux/Slices';

const Settings = ({navigation}) => {
  const {userData} = useSelector(state => state.user);
  const dispatch = useDispatch();
  const data = [
    {
      id: 1,
      title: 'Edit Profile',
    },
    {
      id: 2,
      title: 'Log Out',
    },
  ];
  console.log('userdata', userData);

  // useEffect(() => {

  //   handleLogout()

  // },[])

  const handleLogout = () => {
    Alert.alert(
      'Logout',
      'Are you sure you want to logout?',
      [
        {
          text: 'No',
          onPress: () => console.log('Logout cancelled'),
          style: 'cancel',
        },
        {
          text: 'Yes',
          onPress: () => {
            //  dispatch(clearToken(''))
            console.log('User logged out');
            dispatch(clearToken(''));
          },
        },
      ],
      {cancelable: false},
    );
  };

  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() =>
          item.title === 'Log Out'
            ? handleLogout()
            : navigation.navigate('EditProfile')
        }
        style={{paddingVertical: responsiveHeight(0.5)}}>
        <View style={{marginTop: 10}}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <View style={{gap: 5}}>
              <Text
                style={{
                  color: '#000',
                  fontSize: responsiveFontSize(2.1),
                  fontWeight: '500',
                }}>
                {item.title}
              </Text>
            </View>
            <SvgIcons xml={arrowForward} height={15} width={15} />
          </View>
          <View
            style={{
              height: 2,
              // width: responsiveWidth(100),
              backgroundColor: '#ECEDF1',
              marginTop: 13,
            }}
          />
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <View style={{flex: 1, backgroundColor: Color.white}}>
      <Header2 title="Settings" />
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <FlatList
          data={data}
          removeClippedSubviews={false}
          contentContainerStyle={{
            marginTop: responsiveHeight(2),
            paddingHorizontal: responsiveHeight(2.5),
          }}
          renderItem={renderItem}
          keyExtractor={item => item.id.toString()}
        />
      </View>
    </View>
  );
};

export default Settings;

/* eslint-disable react-native/no-inline-styles */
