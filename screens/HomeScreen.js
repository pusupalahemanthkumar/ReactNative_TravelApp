import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  ImageBackground,
  Pressable,
  ScrollView,
  FlatList,
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
import ShowcaseIconCard from '../components/AppComponents/ShowcaseIconCard';
import ShowcaseHeaderTop from '../components/AppComponents/ShowcaseHeaderTop';
import PlaceCard from '../components/AppComponents/PlaceCard';
import {getDealsAsync} from '../store/dux/placeRedux';
import { logoutAsync} from "../store/dux/userRedux"

const {width, height} = Dimensions.get('screen');

const CARD_DATA = [
  {
    id: '1',
    name: 'Flights',
    icon: GlobalImages.flightIcon,
  },
  {
    id: '2',
    name: 'Hotels',
    icon: GlobalImages.hotelIcon,
  },
  {
    id: '3',
    name: 'Cars',
    icon: GlobalImages.carIcon,
  },
  {
    id: '4',
    name: 'Taxi',
    icon: GlobalImages.taxiIcon,
  },
];

const NAV_DATA = [
  {
    id: '1',
    name: 'All',
  },
  {
    id: '2',
    name: 'Tourism',
  },
  {
    id: '3',
    name: 'Hotel',
  },
];
const HomeScreen = () => {
  const isFocused = useIsFocused();
  const [selectedNav, setSelectedNav] = useState('All');
  const [placesList, setPlacesList] = useState([]);
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const {deals, dealsLoading, dealsError} = useSelector(state => state.place);
  const {user } = useSelector(state=>state.user);

  useEffect(() => {
    if (isFocused) {
      dispatch(getDealsAsync());
    }
  }, [isFocused]);

  useEffect(() => {
    setPlacesList(deals);
  }, [deals]);

  const filterChangeHandler = type => {
    setSelectedNav(type);
    if (type === 'All') {
      setPlacesList(deals);
    } else {
      setPlacesList(deals.filter(item => item.category.includes(type)));
    }
  };

  return (
    <View style={[GlobalStyles.screen]}>
      <ScrollView>
        <View style={[styles.showcaseContainer]}>
          <ImageBackground
            source={GlobalImages.homeScreenWallpaper}
            style={[styles.backgroundImage]}>
            <ShowcaseHeaderTop
              profileUri={`${user.image}`}
              onPressLogout={() => { dispatch(logoutAsync()) } }
              onPressBell={() => {}}
              onPressprofile={() => {}}
            />
            <View style={[styles.showcasebottom, GlobalStyles.container]}>
              <Text style={[styles.showcaseTitle]}>
                Where's your next destination ?
              </Text>
              <ScrollView horizontal>
                {CARD_DATA.map(item => {
                  return (
                    <ShowcaseIconCard
                      key={item.id}
                      name={item.name}
                      icon={item.icon}
                    />
                  );
                })}
              </ScrollView>
            </View>
          </ImageBackground>
        </View>
        <View style={[styles.mainContainer, GlobalStyles.container]}>
          <Text style={styles.homeTitle}> Deals</Text>
          <ScrollView horizontal>
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
                  onPress={() => filterChangeHandler(item.name)}
                  style={containerstyle}>
                  <Text style={textstyle}>{item.name}</Text>
                </Pressable>
              );
            })}
          </ScrollView>
          <View style={[styles.container, {paddingBottom: 60}]}>
            {dealsLoading ? (
              <ActivityIndicator size={'large'} />
            ) : (
              <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={placesList}
                keyExtractor={item => item.id}
                renderItem={({item}) => {
                  return (
                    <PlaceCard
                      item={item}
                      onPress={() => {
                        navigation.navigate('Home', {
                          screen: 'PlaceDetail',
                          params: {place: item},
                        });
                      }}
                    />
                  );
                }}
              />
            )}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  showcaseContainer: {
    width: '100%',
    height: 400,
  },
  backgroundImage: {
    width: width,
    height: '100%',
    resizeMode: 'cover',
    justifyContent: 'space-between',
  },
  showcasebottom: {
    marginVertical: 22,
  },
  showcaseTitle: {
    fontSize: Fontconfig.TEXT_SIZE_2,
    color: GlobalColors.lightColor1,
    fontWeight: 'bold',
    width: '70%',
    marginBottom: 20,
  },
  mainContainer: {
    marginVertical: 22,
  },
  homeTitle: {
    fontSize: Fontconfig.TEXT_SIZE_3,
    fontWeight: 'bold',
    color: GlobalColors.darkColor2,
  },
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
  },
});
