import {BaseUrl} from '../BaseUrl/Index';
import axios from 'axios';
import {setUserData, UserLogin} from '../redux/Slices';
import {ShowToast} from './ShowToast';

export const Registeration = async (name, email, password, parentNumber) => {
  let data = JSON.stringify({
    name: name,
    email: email,
    password: password,
    Parent_Number: parentNumber,
  });

  let config = {
    method: 'post',
    maxBodyLength: Infinity,
    url: `https://appsdemo.pro/Halloween/api/Register`,
    headers: {
      'Content-Type': 'application/json',
    },
    data: data,
  };
  try {
    const response = await axios.request(config);
    console.log('response.data', response.data);
    return response.data;
  } catch (error) {
    throw error;
  }
};
export const LoginIntegration = async (email, password, dispatch) => {
  let data = JSON.stringify({
    email: email,
    password: password,
    FCM_Tokens: '',
  });

  let config = {
    method: 'post',
    maxBodyLength: Infinity,
    url: `${BaseUrl}Login`,
    headers: {
      'Content-Type': 'application/json',
    },
    data: data,
  };
  dispatch(UserLogin(config));
};

export const forgetPassword = async email => {
  let data = JSON.stringify({
    email: email,
  });
  let config = {
    method: 'post',
    maxBodyLength: Infinity,
    url: `${BaseUrl}sendUserPasswordEmail`,
    headers: {
      'Content-Type': 'application/json',
    },
    data: data,
  };
  try {
    const response = await axios.request(config);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const verifyOtp = async (otp, id) => {
  let data = JSON.stringify({
    otp: otp,
    id: id,
  });

  let config = {
    method: 'post',
    maxBodyLength: Infinity,
    url: `${BaseUrl}VerifyOtp`,
    headers: {
      'Content-Type': 'application/json',
    },
    data: data,
  };
  try {
    const response = await axios.request(config);
    return response.data;
  } catch (error) {
    throw error.response.data.message;
  }
};

export const resetPassword = async (password, confirmPassword, id) => {
  let data = JSON.stringify({
    password: password,
    password_confirmation: confirmPassword,
    id: id,
  });

  let config = {
    method: 'post',
    maxBodyLength: Infinity,
    url: `${BaseUrl}resetForgetPassword`,
    headers: {
      'Content-Type': 'application/json',
    },
    data: data,
  };
  try {
    const response = await axios.request(config);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const addHalloweenPost = async (
  token,
  // candyName,
  candyType,
  decorationValue,
  candyDetails,
  startTime,
  endTime,
  image,
  isAttraction,
  attraction,
  fees,
) => {
  let data = new FormData();
  // data.append('candayName', candyName);
  data.append('candyType', candyType);
  data.append('decorationCreativity', decorationValue);
  data.append('candyDetails', candyDetails);
  data.append('address', 'Times Square, Manhattan, NY 10036, USA');
  data.append('Latitude', 40.758896);
  data.append('longtitude', -73.98513);
  data.append('startime', startTime);
  data.append('endtime', endTime);
  data.append('candyImage', {
    uri: image.path,
    name: 'image.jpg',
    type: image.mime || 'image/jpeg',
  });
  if (isAttraction) {
    data.append('attraction', attraction); // will be 'Free' or 'Paid'
  }
  if (isAttraction && attraction === 'Paid') {
    data.append('price', Number(fees)); // price only if Paid
  }
  const config = {
    method: 'post',
    maxBodyLength: Infinity,
    url: `${BaseUrl}createHolloweenPost`,
    headers: {
      'Content-Type': 'multipart/form-data',
      Authorization: `Bearer ${token}`,
    },
    data: data,
  };

  try {
    const response = await axios.request(config);
    console.log('Post Response:', response.data);
    return response.data;
  } catch (error) {
    console.error(
      'Error creating post:',
      error?.response?.data || error.message,
    );
    throw error;
  }
};
export const editProfile = async (
  name,
  parentNumber,
  token,
  dispatch,
  navigation,
) => {
  let data = JSON.stringify({
    name: name,
    Parent_Number: parentNumber,
  });

  let config = {
    method: 'post',
    maxBodyLength: Infinity,
    url: `${BaseUrl}editProfile`,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    data: data,
  };
  try {
    const response = await axios.request(config);
    if (response.data.success) {
      ShowToast('success', 'Profile Updated');
      dispatch(setUserData(response.data.data));
      navigation.navigate('BottomTabs');
    } else {
      ShowToast('error', response.data.message);
    }
    console.log('response.data', response.data);
    return response.data;
  } catch (error) {
    console.log('error', error.response.data.message);
    ShowToast('error', error.response.data.message);
    throw error;
  }
};
export const getAllCandyPost = async token => {
  let data = '';
  let config = {
    method: 'get',
    maxBodyLength: Infinity,
    url: `${BaseUrl}getAllCandyPost`,
    headers: {
      Authorization: `Bearer ${token}`,
    },
    data: data,
  };
  try {
    const response = await axios.request(config);
    console.log('res', response.data);
    return response;
  } catch (error) {
    throw error;
  }
};

export const getAllPosts = async () => {
  let config = {
    method: 'get',
    maxBodyLength: Infinity,
    url: `${BaseUrl}getAllPosts`,
    headers: {},
  };
  try {
    const response = await axios.request(config);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const addPost = async (image, caption, userId, token) => {
  let data = new FormData();
  data.append('user_id', userId);
  data.append('description', caption);
  data.append('image', {
    uri: image.path,
    name: 'image.jpg',
    type: image.mime || 'image/jpeg',
  });

  const config = {
    method: 'post',
    maxBodyLength: Infinity,
    url: `${BaseUrl}createPost`,
    headers: {
      'Content-Type': 'multipart/form-data',
      Authorization: `Bearer ${token}`,
    },
    data: data,
  };

  try {
    const response = await axios.request(config);
    console.log('Post Response:', response.data);
    return response.data;
  } catch (error) {
    console.error(
      'Error creating post:',
      error?.response?.data.message || error.message,
    );
    throw error;
  }
};
