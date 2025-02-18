import {ScrollView} from 'react-native';
import React from 'react';
import {Color} from '../../assets/Utils/Colors';
import Header from '../../Components/Header';
import Listings from '../../Components/Listings';
import {responsiveHeight} from '../../assets/Responsive_Dimensions';
import Hr from '../../Components/Hr';

const HouseListing = ({navigation}) => {
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
