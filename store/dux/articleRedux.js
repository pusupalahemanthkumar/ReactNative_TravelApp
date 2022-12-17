import axios from 'axios';
import {createSlice} from '@reduxjs/toolkit';

import Api from '../../Services/api';


const initialState = {
  tips: [],
  tipsLoading: false,
  tipsError: null,
  articles: [],
  articlesLoading: false,
  articlesError: null,
};

export const getTipsAsync = () => {
  return async (dispatch, getState) => {
    const token = getState().user.user.token;
    try {
      dispatch(onLoadingTips());
      const api = new Api(token);
      const data = await api._PostMethod(`/articles/query`, {category: 'Tips'});
      dispatch(getTips(data));
    } catch (error) {
      console.log('Error - e', error);
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch(onErrorTips(message));
    }
  };
};

export const getArticlesAsync = () => {
  return async (dispatch, getState) => {
    const token = getState().user.user.token;
    try {
      dispatch(onLoadingArticles());
      const api = new Api(token);
      const data = await api._PostMethod(`/articles/query`, {category: 'Experience'});
      dispatch(getArticles(data));
    } catch (error) {
      console.log('Error - e', error);
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch(onErrorArticles(message));
    }
  };
};

export const articleSlice = createSlice({
  name: 'article',
  initialState,
  reducers: {
    getTips: (state, action) => {
      state.tips = action.payload;
      state.tipsLoading = false;
      state.tipsError = null;
    },
    onLoadingTips: (state, action) => {
      state.tipsLoading = true;
      state.tipsError = null;
    },
    onErrorTips: (state, action) => {
      state.tipsLoading = false;
      state.tipsError = action.payload;
    },
    getArticles: (state, action) => {
      state.articles = action.payload;
      state.articlesLoading = false;
      state.articlesError = null;
    },
    onLoadingArticles: (state, action) => {
      state.articlesLoading = true;
      state.articlesError = null;
    },
    onErrorArticles: (state, action) => {
      state.articlesLoading = false;
      state.articlesError = action.payload;
    },
  },
});

export const {
  getArticles,
  getTips,
  onLoadingTips,
  onErrorTips,
  onLoadingArticles,
  onErrorArticles,
} = articleSlice.actions;

export default articleSlice.reducer;
