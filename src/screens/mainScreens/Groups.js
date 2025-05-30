/* eslint-disable react-native/no-inline-styles */
import {
  View,
  ScrollView,
  TouchableOpacity,
  Text,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';
import React, {useState} from 'react';
import {styles} from '../../Styles';
import Header2 from '../../Components/Header2';
import {
  responsiveFontSize,
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
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import {ApiKey} from '../../BaseUrl/Index';
import {addHalloweenPost} from '../../GlobalFunctions/Apis';
import {ShowToast} from '../../GlobalFunctions/ShowToast';
import {useSelector} from 'react-redux';
import DropDownPicker from 'react-native-dropdown-picker';
import DropDown from '../../Components/DropDown';

const Groups = ({navigation}) => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [selectedField, setSelectedField] = useState(null);
  const [startTime, setStartTime] = useState();
  const [endTime, setEndTime] = useState();
  const {token} = useSelector(state => state.user);
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [value, setValue] = useState(null);
  const [decorationValue, setDecorationValue] = useState(null);
  const [attraction, setAttraction] = useState();
  const [isAttraction, setIsAttraction] = useState(false);
  const [items, setItems] = useState([
    {label: 'KING SIZE', value: 'King Size'},
    {label: 'REGULAR SIZE', value: 'Regular Size'},
    {label: 'FUN SIZE', value: 'Fun Size'},
    {label: 'Package Treats', value: 'Package Treats'},
    {label: 'Candy Apples', value: 'Candy Apples'},
    {label: 'Other', value: 'Other'},
  ]);
  const [decorationItems, setDecorationItems] = useState([
    {label: 'Scare Factor', value: 'Scare Factor'},
    {label: 'Candy selection', value: 'Candy selection'},
    {label: 'Over All', value: 'Over All'},
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedImages, setSelectedImages] = useState([]);
  const [address, setAddress] = useState();
  const [latLng, setLatLng] = useState();
  const [fetchLoading, setFetchLoading] = useState();
  console.log('value', value);
  const [form, setForm] = useState({
    // candyName: '',
    candyDetails: '',
    fees: '',
  });
  console.log('value', value);
  const showDatePicker = field => {
    setSelectedField(field);
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
    setSelectedField(null);
  };

  const handleImagesFromChild = images => {
    setSelectedImages(images); // You'll use this when sending to API
  };

  const handleInputChange = (field, value) => {
    setForm(prev => ({...prev, [field]: value}));
  };
  Geocoder.init(ApiKey);
  const fetchLocation = () => {
    Geolocation.getCurrentPosition(
      position => {
        const {latitude, longitude} = position.coords;
        setLatLng({
          latitude: latitude,
          longitude: longitude,
        });
        console.log('Lat:', latitude, 'Lng:', longitude); // ADD THIS
        setAddress('');
        setFetchLoading(true);
        Geocoder.from(latitude, longitude)
          .then(json => {
            const formattedAddress = json.results[0].formatted_address;
            setAddress(formattedAddress);
            setFetchLoading(false);
          })
          .catch(error => {
            console.warn('Geocoder error:', error);
            setFetchLoading(false);
          });
      },
      error => {
        console.warn('Geolocation error:', error); // ADD THIS
      },
      {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
    );
  };
  const handleUpload = async () => {
    const {candyDetails, fees} = form;
    console.log('fees', fees);
    console.log('attraction', attraction);
    console.log('selected images', selectedImages);
    if (attraction === 'Paid' && !fees) {
      ShowToast('error', 'Plz Enter Amount To Proceed');
      console.log('error');
      return;
    }
    try {
      setIsLoading(true);
      const response = await addHalloweenPost(
        token,
        value,
        decorationValue,
        candyDetails,
        startTime,
        endTime,
        selectedImages,
        isAttraction,
        attraction,
        fees,
      );
      if (response.status) {
        ShowToast('success', 'Data Uploaded');
      } else {
        ShowToast('error', response.message);
      }
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      ShowToast('error', error.response.data.message);
      console.log('error', error);
      console.log('error.response,data.message', error.response.data.message);
    }
  };
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={[
        styles.parentScrollContainer,
        {paddingBottom: 20},
      ]}>
      <Header2  title={' Add Candy'} />
      <View style={{paddingHorizontal: responsiveWidth(5.7)}}>
        <ChooseImage onImagesSelected={handleImagesFromChild} />
        {/* <Input2 */}
        {/* onChangeText={text => handleInputChange('candyName', text)}
          label={'Candy Name'}
          placeholder={'Skittles'}
        /> */}
        <Text style={style.labelTxt}>Candy Type</Text>
        <View>
          <DropDownPicker
            open={open}
            maxHeight={responsiveHeight(35)}
            value={value}
            dropDownContainerStyle={{
              borderColor: Color.placeHolderTxt2,
              borderWidth: 1,
            }}
            items={items}
            setOpen={setOpen}
            setValue={setValue}
            setItems={setItems}
            style={{
              zIndex: 1000,
              backgroundColor: Color.white,
              paddingHorizontal: responsiveHeight(2),
              borderRadius: responsiveHeight(3.3),
              borderTopRightRadius: responsiveHeight(3.5),
              borderBottomRightRadius: 0,
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 2,
              },
              borderWidth: 1,
              borderColor: Color.postBorderColor,
              shadowOpacity: 0.25,
              shadowRadius: 3.84,
              elevation: 5,
            }}
          />
          {/* <DropDown/> */}
        </View>

        <Text style={style.labelTxt}>Decoration Creativity</Text>
        <View>
          <DropDownPicker
            open={open2}
            maxHeight={responsiveHeight(35)}
            value={decorationValue}
            dropDownContainerStyle={{
              borderColor: Color.placeHolderTxt2,
              borderWidth: 1,
            }}
            items={decorationItems}
            setOpen={setOpen2}
            setValue={setDecorationValue}
            setItems={setDecorationItems}
            style={{
              zIndex: 1000,
              backgroundColor: Color.white,
              paddingHorizontal: responsiveHeight(2),
              borderRadius: responsiveHeight(3.3),
              borderTopRightRadius: responsiveHeight(3.5),
              borderBottomRightRadius: 0,
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 2,
              },
              borderWidth: 1,
              borderColor: Color.postBorderColor,
              shadowOpacity: 0.25,
              shadowRadius: 3.84,
              elevation: 5,
            }}
          />
          {/* <DropDown/> */}
        </View>
        <Input2
          onChangeText={text => handleInputChange('candyDetails', text)}
          multiline={true}
          label={'Candy Details'}
          placeholder={'Write about you candy'}
        />
        <View>
          <Text style={style.labelTxt}>Attraction (Haunted House)</Text>
          <View
            style={{
              flexDirection: 'row',
              gap: responsiveHeight(2),
              marginTop: responsiveHeight(1),
            }}>
            <Button
              handlePress={() => setIsAttraction(true)}
              title="Yes"
              bgColor={isAttraction ? Color.black : Color.white}
              txtStyle={{color: isAttraction ? Color.white : Color.black}}
              borderWidth={1}
              width={responsiveWidth(25)}
              height={responsiveHeight(5)}
            />
            <Button
              handlePress={() => {
                setIsAttraction(false);
                setAttraction('Free');
              }}
              title="No"
              borderWidth={1}
              txtStyle={{color: isAttraction ? Color.black : Color.white}}
              bgColor={isAttraction ? Color.white : Color.black}
              width={responsiveWidth(25)}
              height={responsiveHeight(5)}
            />
          </View>
          {isAttraction ? (
            <View
              style={{
                marginTop: responsiveHeight(2),
                gap: responsiveHeight(2),
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  gap: responsiveHeight(1.5),
                }}>
                <TouchableOpacity
                  onPress={() => setAttraction('Free')}
                  style={{
                    borderWidth: 2,
                    padding: responsiveHeight(0.3),
                    borderRadius: responsiveHeight(1.5),
                  }}>
                  <View
                    style={{
                      backgroundColor:
                        attraction === 'Free' ? Color.black : null,
                      height: responsiveHeight(1.7),
                      width: responsiveWidth(3.3),
                      borderRadius: responsiveHeight(3),
                    }}
                  />
                </TouchableOpacity>
                <Text>Free</Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  gap: responsiveHeight(1.5),
                }}>
                <TouchableOpacity
                  onPress={() => setAttraction('Paid')}
                  style={{
                    borderWidth: 2,
                    padding: responsiveHeight(0.3),
                    borderRadius: responsiveHeight(1.5),
                  }}>
                  <View
                    style={{
                      backgroundColor:
                        attraction === 'Paid' ? Color.black : null,
                      height: responsiveHeight(1.7),
                      width: responsiveWidth(3.3),
                      borderRadius: responsiveHeight(3),
                    }}
                  />
                </TouchableOpacity>
                <Text>Paid</Text>
              </View>
            </View>
          ) : null}
          {attraction === 'Paid' && isAttraction ? (
            <Input2
              value={form.fees}
              onChangeText={text => handleInputChange('fees', text)}
              keyboardType="numeric"
              placeholder={'Enter fee amount (e.g., $10)'}
            />
          ) : null}
        </View>
        <View>
          <Text
            style={{
              color: Color.black,
              fontSize: responsiveFontSize(1.8),
              fontWeight: '500',
              marginTop: responsiveHeight(2),
            }}>
            Choose Location
          </Text>
          <TouchableOpacity
            // onPress={() => navigation.navigate('ChooseLocation')}
            style={{
              backgroundColor: Color.white,
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 2,
              },
              justifyContent: 'center',
              paddingHorizontal: responsiveHeight(1.5),
              height: responsiveHeight(7),
              marginTop: responsiveHeight(1),
              borderWidth: 1,
              borderColor: Color.postBorderColor,
              shadowOpacity: 0.25,
              shadowRadius: 3.84,
              borderRadius: responsiveHeight(3.5),
              borderTopRightRadius: responsiveHeight(3.5),
              borderBottomRightRadius: 0,
              elevation: 5,
            }}>
            <Text style={{width: responsiveWidth(80)}}>
              {address ? address : 'Times Square, Manhattan, NY 10036, USA'}
            </Text>
            {fetchLoading ? (
              <View
                style={{
                  position: 'absolute',
                  right: 10,
                  justifyContent: 'center',
                  height: '100%',
                }}>
                <ActivityIndicator size={'small'} color={Color.black} />
              </View>
            ) : (
              <TouchableOpacity
                // onPress={() => fetchLocation()}
                style={{
                  position: 'absolute',
                  right: 10,
                  justifyContent: 'center',
                  height: '100%',
                }}>
                <FontAwesome6
                  name="location-crosshairs"
                  color={Color.themeColor}
                  size={25}
                />
              </TouchableOpacity>
            )}
          </TouchableOpacity>
        </View>
        <Text
          style={{
            color: Color.black,
            fontSize: responsiveFontSize(1.8),
            fontWeight: '500',
            marginTop: responsiveHeight(2),
          }}>
          Select Availability
        </Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-evenly',
            marginTop: responsiveHeight(1.5),
            gap: responsiveHeight(1),
          }}>
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
          handlePress={handleUpload}
          title={
            isLoading ? (
              <ActivityIndicator size={'large'} color={Color.white} />
            ) : (
              'Upload'
            )
          }
          height={responsiveHeight(5.5)}
          width={'100%'}
        />
      </View>
    </ScrollView>
  );
};

export default Groups;
const style = StyleSheet.create({
  labelTxt: {
    color: Color.black,
    fontSize: responsiveFontSize(1.8),
    fontWeight: '500',
    marginTop: responsiveHeight(2),
    marginBottom: responsiveHeight(1),
  },
});
