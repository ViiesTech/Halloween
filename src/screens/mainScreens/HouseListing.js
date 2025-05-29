/* eslint-disable react-native/no-inline-styles */
import {ActivityIndicator, ScrollView, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Color} from '../../assets/Utils/Colors';
import Header from '../../Components/Header';
import Listings from '../../Components/Listings';
import {
  responsiveFontSize,
  responsiveHeight,
} from '../../assets/Responsive_Dimensions';
import Hr from '../../Components/Hr';
import {useDispatch, useSelector} from 'react-redux';
import {clearToken} from '../../redux/Slices';
import {getAllCandyPost} from '../../GlobalFunctions/Apis';
import {useIsFocused} from '@react-navigation/native';
import CountDown from 'react-native-countdown-component';

const HouseListing = ({navigation}) => {
  const dispatch = useDispatch();
  const {token} = useSelector(state => state.user);
  const [isLoading, setIsLoading] = useState(false);
  // console.log('token', token);
  // useEffect(() => {
  //   dispatch(clearToken());
  // }, []);
  const focus = useIsFocused();
  const [data, setData] = useState();
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
      setIsLoading(false);
      setData(response.data.data);
    } catch (error) {
      setIsLoading(false);
      console.log('error', error);
    }
  };

  useEffect(() => {
    getCandyData();
  }, [focus]);
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{
        flexGrow: 1,
        backgroundColor: Color.white,
        paddingBottom: responsiveHeight(2),
      }}>
      <Header showAddress={true} />
      <Hr />
      <Text
        style={{
          margin: responsiveHeight(2),
          marginTop: responsiveHeight(0.1),
          fontSize: responsiveFontSize(2.2),
          fontWeight: '600',
          textAlign:'center',
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
          <ActivityIndicator size={'large'} color={Color.black} />
        </View>
      ) : (
        data?.map(area => {
          return (
            <Listings
              buttonPressHandler={() =>
                navigation.navigate('ViewDetails', {data: area})
              }
              data={area}
            />
          );
        })
      )}
    </ScrollView>
  );
};

export default HouseListing;
