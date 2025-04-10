import {BaseUrl} from '../BaseUrl/Index';
import axios from 'axios';
import {UserLogin} from '../redux/Slices';

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
    url: `${BaseUrl}Register`,
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
