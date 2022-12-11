import { NavigationContainer } from '@react-navigation/native';

import AuthRoutes from './AuthRoutes';
import TravelRoutes from './TravelRoutes';

const MainRoutes = ()=>{
    return (
        <NavigationContainer>
            {/* <AuthRoutes /> */}
            <TravelRoutes />
        </NavigationContainer>
    )
}

export default MainRoutes;