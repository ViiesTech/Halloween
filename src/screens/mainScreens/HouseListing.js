/* eslint-disable react-native/no-inline-styles */
import {ScrollView} from 'react-native';
import React, {useEffect} from 'react';
import {Color} from '../../assets/Utils/Colors';
import Header from '../../Components/Header';
import Listings from '../../Components/Listings';
import {responsiveHeight} from '../../assets/Responsive_Dimensions';
import Hr from '../../Components/Hr';
import {useDispatch, useSelector} from 'react-redux';
import {clearToken} from '../../redux/Slices';

const HouseListing = ({navigation}) => {
  // const dispatch = useDispatch();
  // const {token} = useSelector(state => state.user);
  // console.log('token', token);
  // useEffect(() => {
  //   dispatch(clearToken());
  // }, []);
  const data = [
    {
      id: 1,
      name: 'John Doe',
      timeAgo: 'Just Now',
      itemType: 'King Size Candy',
      location: 'Los Angeles..',
      time: '10:00 AM - 06:00 PM',
    },
    {
      id: 2,
      name: 'John Doe',
      timeAgo: 'Just Now',
      itemType: 'King Size Candy',
      location: 'Los Angeles..',
      time: '10:00 AM - 06:00 PM',
    },
    {
      id: 3,
      name: 'John Doe',
      timeAgo: 'Just Now',
      itemType: 'King Size Candy',
      location: 'Los Angeles..',
      time: '10:00 AM - 06:00 PM',
    },
    {
      id: 4,
      name: 'John Doe',
      timeAgo: 'Just Now',
      itemType: 'King Size Candy',
      location: 'Los Angeles..',
      time: '10:00 AM - 06:00 PM',
    },
  ];
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{
        flexGrow: 1,
        backgroundColor: Color.white,
        paddingBottom: responsiveHeight(2),
      }}>
      <Header />
      <Hr />
      {data?.map(area => {
        return (
          <Listings
            buttonPressHandler={() => navigation.navigate('ViewDetails')}
            data={area}
          />
        );
      })}
    </ScrollView>
  );
};

export default HouseListing;
