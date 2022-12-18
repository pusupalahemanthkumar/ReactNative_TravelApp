import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import GuideScreen from '../screens/GuideScreen';
import HomeScreen from '../screens/HomeScreen';
import SearchScreen from '../screens/SearchScreen';
import TripPlanScreen from '../screens/TripPlanScreen';
import PlaceDetailScreen from '../screens/PlaceDetailScreen';
import GlobalImages from '../GlobalImages/GlobalImages';
import {Image} from 'react-native';
import ArticleDetailsScreen from '../screens/ArticleDetailsScreen';
import PlaceOrderScreen from '../screens/PlaceOrderScreen';

const Tab = createBottomTabNavigator();

const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animation: 'slide_from_bottom',
      }}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="PlaceDetail" component={PlaceDetailScreen} />
    </Stack.Navigator>
  );
};

const SearchStack =() =>{
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animation: 'slide_from_bottom',
      }}>
      <Stack.Screen name="SearchScreen" component={SearchScreen} />
      <Stack.Screen name="PlaceDetail" component={PlaceDetailScreen} />
    </Stack.Navigator>
  );

}

const TripPlanStack = () =>{
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animation: 'slide_from_bottom',
      }}>
      <Stack.Screen name="TripPlanScreen" component={TripPlanScreen} />
      <Stack.Screen name="PlaceDetail" component={PlaceDetailScreen} />
    </Stack.Navigator>
  );

}

const GuideStack = () =>{
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        animation: 'slide_from_bottom',
      }}>
      <Stack.Screen name="GuideScreen" component={GuideScreen} />
      <Stack.Screen name="ArticleDetail" component={ArticleDetailsScreen} />
    </Stack.Navigator>
  );

}

const TravelRoutes = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          position: 'absolute',
          bottom: 25,
          left: 20,
          right: 20,
          elevation: 0,
          borderRadius: 15,
          height: 65,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={{
          tabBarIcon: ({focused, color, size}) => {
            let uri = GlobalImages.homeIcon;
            if (focused) {
              uri = GlobalImages.homeActiveIcon;
            }
            return <Image source={uri} />;
          },
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchStack}
        options={{
          tabBarIcon: ({focused, color, size}) => {
            let uri = GlobalImages.searchIcon;
            if (focused) {
              uri = GlobalImages.searchActiveIcon;
            }
            return <Image source={uri} />;
          },
        }}
      />
      <Tab.Screen
        name="TripPlan"
        component={TripPlanStack}
        options={{
          tabBarIcon: ({focused, color, size}) => {
            let uri = GlobalImages.planIcon;
            if (focused) {
              uri = GlobalImages.planActiveIcon;
            }
            return <Image source={uri} />;
          },
        }}
      />
      <Tab.Screen
        name="Guide"
        component={GuideStack}
        options={{
          tabBarIcon: ({focused, color, size}) => {
            let uri = GlobalImages.guideIcon;
            if (focused) {
              uri = GlobalImages.guideActiveIcon;
            }
            return <Image source={uri} />;
          },
        }}
      />
    </Tab.Navigator>
  );
};

const MainTravelRoutes = () =>{
  return (
    <Stack.Navigator
    screenOptions={{
      headerShown: false,
      animation: 'slide_from_bottom',
    }}>
    <Stack.Screen name="Travel" component={TravelRoutes} />
    <Stack.Screen name="PlaceOrder" component={PlaceOrderScreen} />
  </Stack.Navigator>
  )
}

export default MainTravelRoutes;
