import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';
import {ShowToast} from '../GlobalFunctions/ShowToast';

// Initial State
const initialState = {
  user: [],
  userType: '',
  userData: {},
  token: '',
  isLoading: false,
  error: null,
};

// Async Thunk
export const UserLogin = createAsyncThunk(
  'auth/UserLogin',
  async (config, {rejectWithValue}) => {
    try {
      const response = await axios.request(config);
      console.log('response===>>>', JSON.stringify(response.data));
      console.log('response===>>>', response.data);
      if (response.data.success) {
        ShowToast('success', 'Login Successful');
        return response.data;
      } else {
        ShowToast('error', response.data.message);
        return rejectWithValue('Login failed');
      }
    } catch (error) {
      console.log('error', error);
      ShowToast(
        'error',
        error?.response?.data?.message || 'Something went wrong',
      );
      return rejectWithValue('Something went wrong');
    }
  },
);

// Redux Slice
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    clearToken: (state, action) => {
      state.token = '';
      // state.userData = {};
    },
    setToken: (state, action) => {
      state.token = action.payload;
    },
    setUserData: (state, action) => {
      state.userData = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(UserLogin.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(UserLogin.fulfilled, (state, action) => {
        state.isLoading = false;
        state.token = action.payload.token;
        state.userData = action.payload.data;
        console.log('action.payload<<<<=====', action.payload);
      })
      .addCase(UserLogin.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const {clearToken, setUserData, setToken} = authSlice.actions;
export default authSlice.reducer;
