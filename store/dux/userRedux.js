import axios from 'axios';
import {createSlice} from '@reduxjs/toolkit';

import Api from '../../Services/api';
import { getPlaces }  from "./placeRedux";

const initialState = {
  loading: false,
  error: null,
  user: null,
  bookmarks: [],
  bookmarksLoading: false,
  bookmarksError: null,
};

export const loginAsync = (email, password) => {
  return async (dispatch, getState) => {
    try {
      dispatch(onLoading(true));
      const api = new Api();
      const data = await api.postMethod(`/users/login`, {email, password});
      dispatch(login(data));
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch(onError(message));
    }
  };
};

export const registerAync = (
  username,
  email,
  phoneNumber,
  profileImage,
  password,
) => {
  return async (dispatch, getState) => {
    try {
      dispatch(onLoading(true));
      const api = new Api();
      const data = await api.postMethod(`/users/register`, {
        username,
        email,
        phoneNumber,
        profileImage,
        password,
      });
      dispatch(register(data));
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch(onError(message));
    }
  };
};

export const getBookmarksAsync = () => {
  return async (dispatch, getState) => {
    const token = getState().user.user.token;
    try {
      dispatch(onLoadingBookmarks(true));
      const api = new Api(token);
      const data = await api._getMethod(`/users/get-bookmarks`);
      dispatch(getBookmarks(data));
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch(onErrorBookmarks(message));
    }
  };
};

export const toogleBookmarkAsync = (id) =>{
  return async (dispatch, getState) =>{
    const token = getState().user.user.token;
    try {
      const api = new Api(token);
      const data = await api._getMethod(`/users/add-bookmarks/${id}`);
      dispatch(updateBookmarksIds(data));
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
    }
  }
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action) => {
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
    getBookmarks: (state, action) => {
      state.bookmarks = action.payload;
      state.bookmarksLoading = false;
      state.bookmarksError = null;
    },
    onLoadingBookmarks: (state, action) => {
      state.bookmarksLoading = true;
      state.error = null;
    },
    onErrorBookmarks: (state, action) => {
      state.bookmarksError = action.payload;
      state.loading = false;
    },
    updateBookmarksIds : (state,action) =>{
      state.user.bookmarks = action.payload;
    }
  },
});

export const {
  login,
  register,
  onError,
  onLoading,
  onLoadingBookmarks,
  getBookmarks,
  onErrorBookmarks,
  updateBookmarksIds
} = userSlice.actions;

export default userSlice.reducer;
