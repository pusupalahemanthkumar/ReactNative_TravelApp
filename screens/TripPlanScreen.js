import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ScrollView,
  Pressable,
  FlatList,
  Image,
  ActivityIndicator,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {useIsFocused} from '@react-navigation/native';

import GlobalStyles from '../GlobalStyles/styles';
import GlobalImages from '../GlobalImages/GlobalImages';
import GlobalColors from '../GlobalStyles/colors';
import Fontconfig from '../GlobalStyles/Fontconfig';
import PlaceCard from '../components/AppComponents/PlaceCard';
import OrderItemCard from '../components/AppComponents/OrderItemCard';
import {getBookmarksAsync} from '../store/dux/userRedux';
import {getOrdersAsync} from '../store/dux/OrderRedux';

const {width, height} = Dimensions.get('screen');

const NAV_DATA = [
  {
    id: '1',
    name: 'Trips',
  },
  {
    id: '2',
    name: 'Bookmarks',
  },
];

const TripPlanScreen = () => {
  const isFocused = useIsFocused();
  const [selectedNav, setSelectedNav] = useState('Trips');
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {bookmarks, bookmarksLoading, bookmarksError} = useSelector(
    state => state.user,
  );

  const {orders, ordersLoading, ordersError} = useSelector(
    state => state.order,
  );

  useEffect(() => {
    if (isFocused) {
      dispatch(getBookmarksAsync());
      dispatch(getOrdersAsync());
    }
  }, [isFocused]);

  return (
    <View style={[GlobalStyles.screen]}>
      <ScrollView>
        <Text style={GlobalStyles.screenTitleText2}>Trip Plan</Text>
        <ScrollView horizontal contentContainerStyle={GlobalStyles.container}>
          {NAV_DATA.map(item => {
            let containerstyle = [styles.navLink];
            let textstyle = [styles.navText];
            if (item.name === selectedNav) {
              containerstyle.push(styles.activeNav);
              textstyle.push(styles.activeText);
            }
            return (
              <Pressable
                key={item.id}
                onPress={() => setSelectedNav(item.name)}
                style={containerstyle}>
                <Text style={textstyle}>{item.name}</Text>
              </Pressable>
            );
          })}
        </ScrollView>
        <View style={[styles.container]}>
          {selectedNav !== 'Trips' ? (
            <FlatList
              showsHorizontalScrollIndicator={false}
              data={bookmarks}
              keyExtractor={item => item.id}
              renderItem={({item}) => {
                return (
                  <PlaceCard
                    item={item}
                    onPress={() => {
                      navigation.navigate('TripPlan', {
                        screen: 'PlaceDetail',
                        params: {place: item},
                      });
                    }}
                    placeCardStyle={{
                      marginBottom: 20,
                      width: width - 50,
                      alignSelf: 'center',
                      marginRight: 0,
                    }}
                  />
                );
              }}
            />
          ) : (
            <FlatList
              showsHorizontalScrollIndicator={false}
              data={orders}
              keyExtractor={item => item.id}
              renderItem={({item}) => {
                return <OrderItemCard item={item} />;
              }}
            />
          )}
        </View>
      </ScrollView>
    </View>
  );
};

export default TripPlanScreen;

const styles = StyleSheet.create({
  navLink: {
    marginRight: 10,
    padding: 10,
  },
  navText: {
    fontSize: 16,
    color: GlobalColors.greyShade1,
  },
  activeNav: {
    borderColor: GlobalColors.primaryColor,
    borderBottomWidth: 2,
  },
  activeText: {
    color: GlobalColors.primaryColor,
    fontWeight: 'bold',
  },
  container: {
    marginTop: 30,
    marginVertical: 20,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 70,
  },
});
