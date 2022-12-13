import {StyleSheet, Text, View, LogBox} from 'react-native';
import React from 'react';
import {Provider} from 'react-redux';

import MainRoutes from './navigation/MainRoutes';
import store from './store/store';

const App = () => {
  LogBox.ignoreAllLogs();
  return (
    <Provider store={store}>
      <MainRoutes />
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({});
