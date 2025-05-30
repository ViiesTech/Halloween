/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {ActivityIndicator, ScrollView, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {useIsFocused} from '@react-navigation/native';
// import CountDown from 'react-native-countdown-component';
import CountDown from 'react-native-countdown-fixed';
import Header from '../../Components/Header';
import Listings from '../../Components/Listings';
import Hr from '../../Components/Hr';

import {Color} from '../../assets/Utils/Colors';
import {
  responsiveFontSize,
  responsiveHeight,
} from '../../assets/Responsive_Dimensions';

import {getAllCandyPost} from '../../GlobalFunctions/Apis';
import {clearToken} from '../../redux/Slices';

const HouseListing = ({navigation}) => {
  const dispatch = useDispatch();
  const {token} = useSelector(state => state.user);
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);

  const isFocused = useIsFocused();

  // useEffect(() => {

  // dispatch(clearToken())

  // },[])

  const getSecondsUntilHalloween = () => {
    const now = new Date();
    const currentYear = now.getFullYear();
    let halloween = new Date(`${currentYear}-10-31T00:00:00`);

    if (now > halloween) {
      halloween = new Date(`${currentYear + 1}-10-31T00:00:00`);
    }

    return Math.floor((halloween.getTime() - now.getTime()) / 1000);
  };

  const getCandyData = async () => {
    try {
      setIsLoading(true);
      const response = await getAllCandyPost(token);
      setData(response.data?.data || []);
    } catch (error) {
      console.log('Error fetching candy data:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getCandyData();
  }, [isFocused]);

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      removeClippedSubviews={false}
      contentContainerStyle={{
        flexGrow: 1,
        backgroundColor: Color.white,
        paddingBottom: responsiveHeight(2),
      }}>
      <Header showAddress />
      <Hr />

      <Text
        style={{
          margin: responsiveHeight(2),
          marginTop: responsiveHeight(0.1),
          fontSize: responsiveFontSize(2.2),
          fontWeight: '600',
          textAlign: 'center',
        }}>
        Time Left Until Halloween
      </Text>
      <CountDown
        until={getSecondsUntilHalloween()}
        size={20}
        onFinish={() => alert('🎃 Happy Halloween!')}
        digitStyle={{backgroundColor: '#000'}}
        digitTxtStyle={{color: 'white'}}
        timeLabelStyle={{color: '#000', fontWeight: 'bold'}}
        timeToShow={['D', 'H', 'M', 'S']}
        timeLabels={{d: 'Days', h: 'Hrs', m: 'Min', s: 'Sec'}}
        showSeparator
      />
      {isLoading ? (
        <View style={{flex: 1, justifyContent: 'center'}}>
          <ActivityIndicator size="large" color={Color.black} />
        </View>
      ) : (
        data.map(area => (
          <Listings
            key={area.id || area._id} // Ensure you use a unique key
            buttonPressHandler={() =>
              navigation.navigate('ViewDetails', {data: area})
            }
            data={area}
          />
        ))
      )}
    </ScrollView>
  );
};

export default HouseListing;
