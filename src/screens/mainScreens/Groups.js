import {View, ScrollView} from 'react-native';
import React from 'react';
import {styles} from '../../Styles';
import Header2 from '../../Components/Header2';
import {
  responsiveHeight,
  responsiveWidth,
} from '../../assets/Responsive_Dimensions';
import Input2 from '../../Components/Input2';
import Button from '../../Components/Button';
import ChooseImage from '../../Components/ChooseImage';

const Groups = ({navigation}) => {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={[
        styles.parentScrollContainer,
        {paddingBottom: 20},
      ]}>
      <Header2 handlePress={() => navigation.goBack()} title={' Add Candy'} />
      <View style={{paddingHorizontal: responsiveWidth(5.7)}}>
        <ChooseImage />
        <Input2 label={'Candy Name'} placeholder={'Cheese Pockets'} />
        <Input2
          multiline={true}
          label={'Candy Details'}
          placeholder={'Write about you candy'}
        />
        <Input2
          icon={true}
          label={'Add Location'}
          placeholder={'Choose your Location'}
        />
        <Input2 label={'Availability'} placeholder={'10:00 AM - 06:00 PM'} />

        <Button
          mrgnTop={responsiveHeight(3)}
          title={'Upload'}
          height={responsiveHeight(5.5)}
          width={'100%'}
        />
      </View>
    </ScrollView>
  );
};

export default Groups;
