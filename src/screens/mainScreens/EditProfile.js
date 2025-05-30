/* eslint-disable react-native/no-inline-styles */
import {View, Text, ActivityIndicator} from 'react-native';
import React, {useState} from 'react';
import {Color} from '../../assets/Utils/Colors';
import Header2 from '../../Components/Header2';
import Input2 from '../../Components/Input2';
import {responsiveHeight} from '../../assets/Responsive_Dimensions';
import {editProfile} from '../../GlobalFunctions/Apis';
import Button from '../../Components/Button';
import {useDispatch, useSelector} from 'react-redux';

const EditProfile = ({navigation}) => {
  const [form, setForm] = useState({
    userName: '',
    phoneNumber: '',
  });
  const {userName, phoneNumber} = form;
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const {token, userData} = useSelector(state => state.user);
  const handleInputChange = (field, value) => {
    setForm(prev => ({...prev, [field]: value}));
  };

  const handleEditProfile = async () => {
    try {
      setIsLoading(true);
      const response = await editProfile(
        userName,
        phoneNumber,
        token,
        dispatch,
        navigation,
      );
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
    }
  };
  return (
    <View style={{flex: 1, backgroundColor: Color.white}}>
      <Header2 title="Edit Profile" />
      <View style={{paddingHorizontal: responsiveHeight(2)}}>
        <Input2
          onChangeText={text => handleInputChange('userName', text)}
          label={'User Name'}
          placeholder={'John Doe'}
        />
        <Input2
          onChangeText={text => handleInputChange('phoneNumber', text)}
          label={'Parents Phone Number'}
          placeholder={'+1 (555) 123-4567'}
        />
        <View style={{flex: 1}}>
          <Button
            mrgnTop={responsiveHeight(5)}
            handlePress={handleEditProfile}
            title={
              isLoading ? (
                <ActivityIndicator size={'large'} color={Color.white} />
              ) : (
                'Edit'
              )
            }
            // height={responsiveHeight(5.5)}
            width={'100%'}
          />
        </View>
      </View>
    </View>
  );
};

export default EditProfile;
