import axios from 'axios';
import {createSlice} from '@reduxjs/toolkit';

import Api from '../../Services/api';

const initialState = {
  deals: [],
  dealsLoading: false,
  dealsError: null,
  topPlaces: [],
  topPlacesLoading: false,
  topPlacesError: null,
  places: [],
  placesLoading: false,
  placesError: null,
};

export const getDealsAsync = () => {
  return async (dispatch, getState) => {
    const token = getState().user.user.token;
    try {
      dispatch(onLoadingDeals());
      const api = new Api(token);
      const data = await api._PostMethod(`/places/query`, {
        offer: true,
      });

      dispatch(getDeals(data));
    } catch (error) {
      console.log('Error - e', error);
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch(onErrorDeals(message));
    }
  };
};

export const getTopPlacesAsync = () => {
  return async (dispatch, getState) => {
    const token = getState().user.user.token;
    try {
      dispatch(onLoadingTopPlaces());
      const api = new Api(token);
      const data = await api._PostMethod(`/places/query`, {
        quantity: {$gte: 4.5},
      });
      dispatch(getTopPlaces(data));
    } catch (error) {
      console.log('Error - e', error);
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch(onErrorTopPlaces(message));
    }
  };
};

export const getPlacesAsync = () => {
  return async (dispatch, getState) => {
    const token = getState().user.user.token;
    try {
      dispatch(onLoadingPlaces());
      const api = new Api(token);
      const data = await api._PostMethod(`/places/query`, {});
      dispatch(getPlaces(data));
    } catch (error) {
      console.log('Error - e', error);
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch(onErrorPlaces(message));
    }
  };
};

export const placeSlice = createSlice({
  name: 'place',
  initialState,
  reducers: {
    getDeals: (state, action) => {
      state.deals = action.payload;
      state.dealsLoading = false;
      state.dealsError = null;
    },
    onLoadingDeals: (state, action) => {
      state.dealsLoading = true;
      state.dealsError = null;
    },
    onErrorDeals: (state, action) => {
      state.dealsLoading = false;
      state.dealsError = action.payload;
    },
    getTopPlaces: (state, action) => {
      state.topPlaces = action.payload;
      state.topPlacesLoading = false;
      state.placesError = null;
    },
    onLoadingTopPlaces: (state, action) => {
      state.topPlacesLoading = true;
      state.placesError = null;
    },
    onErrorTopPlaces: (state, action) => {
      state.topPlacesLoading = false;
      state.placesError = action.payload;
    },
    getPlaces: (state, action) => {
      state.places = action.payload;
      state.placesLoading = false;
      state.placesError = null;
    },
    onLoadingPlaces: (state, action) => {
      state.placesLoading = true;
      state.placesError = null;
    },
    onErrorPlaces: (state, action) => {
      state.placesLoading = false;
      state.placesError = action.payload;
    },
  },
});

export const {
  getDeals,
  onLoadingDeals,
  onErrorDeals,
  getTopPlaces,
  onLoadingTopPlaces,
  onErrorTopPlaces,
  getPlaces,
  onLoadingPlaces,
  onErrorPlaces,
} = placeSlice.actions;

export default placeSlice.reducer;
