import axios from 'axios';
import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  error: null,
  user: null,
};

export const loginAsync = (email, password) => {
  return async (dispatch, getState) => {
    try {
      dispatch( onLoading(true));

      let res = await axios.get(
        'https://jsonplaceholder.typicode.com/todos/1',
      );
      // res = await axios.get(
      //   'http://10.0.2.2:3000/api',
      // );
      console.log(res);
      dispatch(login({name: 'Hemanth Kumar', token: `12334566`}));
      
    } catch (e) {
      console.log("Error - e",e);
      dispatch(onError('Invalid Data'));
    }
  };
};

export const registerAync = (username,email,password,profileImage)=>{
  return async (dispatch, getState) =>{
    try {
      dispatch( onLoading(true));

      let res = await axios.get(
        'https://jsonplaceholder.typicode.com/todos1/1',
      );
      // res = await axios.get(
      //   'http://10.0.2.2:3000/api',
      // );
      console.log(res);
      dispatch(register({name: 'Hemanth Kumar', token: `12334566`}));
      
    } catch (e) {
      console.log("Error - e",e);
      dispatch(onError('Invalid Data'));
    }
    
  }
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action) => {
      console.log(action)
      state.user = action.payload;
      state.loading = false;
      state.error = null;
    },
    register: (state, action) => {
      state.user = action.payload;
      state.loading = false;
      state.error = null;
    },
    onError: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    onLoading: (state, action) => {
      state.loading = true;
      state.error = null;
    },
  },
});

export const {login, register, onError, onLoading} = userSlice.actions;

export default userSlice.reducer;
