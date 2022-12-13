import {NavigationContainer} from '@react-navigation/native';
import {useSelector} from 'react-redux';

import AuthRoutes from './AuthRoutes';
import TravelRoutes from './TravelRoutes';

const MainRoutes = () => {
  const user = useSelector(state => state.user.user);
  return (
    <NavigationContainer>
      {user && user.token ? <TravelRoutes /> : <AuthRoutes />}
      {/* <AuthRoutes /> */}
      {/* <TravelRoutes /> */}
    </NavigationContainer>
  );
};

export default MainRoutes;
