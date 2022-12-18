import {NavigationContainer} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';

import AuthRoutes from './AuthRoutes';
import TravelRoutes from './TravelRoutes';
import {setUserData} from '../store/dux/userRedux';
import {getData} from '../Services/asyncStorage';

const MainRoutes = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user.user);

  const getToken = async () => {
    return getData('user');
  };
  useEffect(() => {
    getData('user').then(res => dispatch(setUserData(res)));
  }, []);

  return (
    <NavigationContainer>
      {user && user.token ? <TravelRoutes /> : <AuthRoutes />}
      {/* <AuthRoutes /> */}
      {/* <TravelRoutes /> */}
    </NavigationContainer>
  );
};

export default MainRoutes;
