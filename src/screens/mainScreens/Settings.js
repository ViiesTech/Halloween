/* eslint-disable eslint-comments/no-unused-disable */
/* eslint-disable react-native/no-inline-styles */
import {View, Text, FlatList} from 'react-native';
import React from 'react';
import {Color} from '../../assets/Utils/Colors';
import Header from '../../Components/Header';
import Header2 from '../../Components/Header2';
import {
  responsiveFontSize,
  responsiveHeight,
} from '../../assets/Responsive_Dimensions';
import {useSelector} from 'react-redux';

const Settings = () => {
  const {userData} = useSelector(state => state.user);
  const data = [
    {
      id: 1,
      title: 'Categories',
      subTitle: 'Category 1, Category 2, Category 3',
    },
    {
      id: 2,
      title: 'Location',
      subTitle: 'New York',
    },
    {
      id: 3,
      title: 'Hotel Type',
      subTitle: 'Hotel 1',
    },
    {
      id: 4,
      title: 'Language',
      subTitle: 'English',
    },
  ];
  console.log('userdata', userData);
  const renderItem = ({item}) => {
    return (
      <TouchableOpacity style={{}}>
        <View style={{marginTop: 10}}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <View style={{gap: 5}}>
              <NormalText color="#282A37" title={item.title} />
              <NormalText color="#515A77" title={item.subTitle} />
            </View>
            <SvgIcons xml={arrowForward} height={15} width={15} />
          </View>
          <View
            style={{
              height: 2,
              width: responsiveWidth(100),
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
          contentContainerStyle={{marginTop: responsiveHeight(2)}}
          renderItem={renderItem}
          keyExtractor={item => item.id.toString()}
        />
      </View>
    </View>
  );
};

export default Settings;

/* eslint-disable react-native/no-inline-styles */
