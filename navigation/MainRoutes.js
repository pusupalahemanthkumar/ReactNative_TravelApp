import { NavigationContainer } from '@react-navigation/native';

import AuthRoutes from './AuthRoutes';

const MainRoutes = ()=>{
    return (
        <NavigationContainer>
            <AuthRoutes />
        </NavigationContainer>
    )
}

export default MainRoutes;