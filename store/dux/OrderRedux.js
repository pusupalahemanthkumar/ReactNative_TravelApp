import axios from 'axios';
import {createSlice} from '@reduxjs/toolkit';

import Api from '../../Services/api';

const initialState = {
  placeOrderloading: false,
  placeOrderError: null,
  orders: [],
  ordersLoading: false,
  ordersError: null,
};

export const getOrdersAsync = () => {
  return async (dispatch, getState) => {
    const token = getState().user.user.token;
    const id = getState().user.user._id;
    try {
      dispatch(onLoadingOrders());
      const api = new Api(token);
      const data = await api._getMethod(`/orders/${id}`);
      dispatch(getOrders(data));
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch(onErrorOrders(message));
    }
  };
};

export const placeOrderAsync = payload => {
  return async (dispatch, getState) => {
    const token = getState().user.user.token;
    try {
      const api = new Api(token);
      const data = await api._PostMethod(`/orders/`, payload);
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch(onErrorOrders(message));
    }
  };
};

export const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    getOrders: (state, action) => {
      state.orders = action.payload;
      state.ordersLoading = false;
      state.ordersError = null;
    },
    onLoadingOrders: (state, action) => {
      state.ordersLoading = true;
      state.ordersError = null;
    },
    onErrorOrders: (state, action) => {
      state.ordersError = action.payload;
      state.ordersLoading = false;
    },
  },
});

export const {getOrders, onLoadingOrders, onErrorOrders} = orderSlice.actions;

export default orderSlice.reducer;
