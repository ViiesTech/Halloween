/* eslint-disable react-native/no-inline-styles */
import {View, ScrollView, TouchableOpacity, Text} from 'react-native';
import React, {useState} from 'react';
import {styles} from '../../Styles';
import Header2 from '../../Components/Header2';
import {
  responsiveHeight,
  responsiveWidth,
} from '../../assets/Responsive_Dimensions';
import Input2 from '../../Components/Input2';
import Button from '../../Components/Button';
import ChooseImage from '../../Components/ChooseImage';
import Geolocation from '@react-native-community/geolocation';
import Geocoder from 'react-native-geocoding';
import DateTimePicker from '@react-native-community/datetimepicker';
import {Color} from '../../assets/Utils/Colors';

const Groups = ({navigation}) => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [selectedField, setSelectedField] = useState(null);
  const [startTime, setStartTime] = useState();
  const [endTime, setEndTime] = useState();

  const showDatePicker = field => {
    setSelectedField(field);
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
    setSelectedField(null);
  };

  const handleConfirm = date => {
    console.warn('A date has been picked: ', date);
    const formattedDate = date.toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
    });

    if (selectedField === 'start') {
      setStartTime(formattedDate);
    } else if (selectedField === 'end') {
      setEndTime(formattedDate);
    }

    hideDatePicker();
  };
  // Geocoder.init('YOUR_GOOGLE_API_KEY');

  // Geolocation.getCurrentPosition(position => {
  //   const {latitude, longitude} = position.coords;
  //   Geocoder.from(latitude, longitude)
  //     .then(json => {
  //       const address = json.results[0].formatted_address;
  //       console.log('Address:', address);
  //     })
  //     .catch(error => console.warn('Geocoder error:', error));
  // });
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
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-evenly',
            marginTop: responsiveHeight(2),
            gap: responsiveHeight(1),
          }}>
            <Text>Select Availability</Text>
          <TouchableOpacity
            style={{
              width: '48%',
              backgroundColor: 'white',
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,
              borderWidth: 1,
              borderColor: Color.postBorderColor,
              borderRadius: responsiveHeight(3.5),
              borderBottomRightRadius: responsiveHeight(0.1),
              padding: responsiveHeight(1.9),
              elevation: 5,
            }}
            onPress={() => showDatePicker('start')}>
            <Text style={{textAlign: 'center'}}>
              {startTime || 'Choose Start Time'}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              width: '48%',
              backgroundColor: 'white',
              borderWidth: 1,
              borderColor: Color.postBorderColor,
              padding: responsiveHeight(1.9),
              borderRadius: responsiveHeight(3.5),
              borderBottomRightRadius: responsiveHeight(0.1),
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,

              elevation: 5,
            }}
            onPress={() => showDatePicker('end')}>
            <Text style={{textAlign: 'center'}}>
              {endTime || 'Choose End Time'}
            </Text>
          </TouchableOpacity>
        </View>
        {isDatePickerVisible && (
          <DateTimePicker
            mode="time"
            display="default"
            value={new Date()}
            onChange={(event, selectedDate) => {
              if (event.type === 'dismissed') {
                hideDatePicker();
                return;
              }

              const formattedTime = selectedDate.toLocaleTimeString([], {
                hour: '2-digit',
                minute: '2-digit',
              });

              if (selectedField === 'start') {
                setStartTime(formattedTime);
              } else if (selectedField === 'end') {
                setEndTime(formattedTime);
              }

              hideDatePicker();
            }}
          />
        )}

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
