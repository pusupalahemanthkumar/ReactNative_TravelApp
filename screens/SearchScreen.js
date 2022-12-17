import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ScrollView,
  Pressable,
  FlatList,
  TextInput,
  Image,
  ActivityIndicator,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import { useIsFocused } from '@react-navigation/native';


import GlobalStyles from '../GlobalStyles/styles';
import GlobalImages from '../GlobalImages/GlobalImages';
import GlobalColors from '../GlobalStyles/colors';
import Fontconfig from '../GlobalStyles/Fontconfig';
import PlaceCard from '../components/AppComponents/PlaceCard';
import PlaceCardH from '../components/AppComponents/PlaceCardH';
import {getPlacesAsync, getTopPlacesAsync} from '../store/dux/placeRedux';

const {width, height} = Dimensions.get('screen');

const SearchScreen = () => {
  const isFocused = useIsFocused();
  const navigation = useNavigation();
  const dispatch = useDispatch();
  
  const {
    topPlaces,
    topPlacesLoading,
    topPlacesError,
    places,
    placesLoading,
    placesError,
  } = useSelector(state => state.place);

  useEffect(() => {
    if(isFocused){
      dispatch(getPlacesAsync());
      dispatch(getTopPlacesAsync());
    }
  }, [isFocused]);

  return (
    <View style={[GlobalStyles.screen]}>
      <ScrollView>
        <Text style={GlobalStyles.screenTitleText2}>Trip Plan</Text>
        <View style={[styles.searchBarContainer]}>
          <TextInput
            style={[styles.searchInput]}
            placeholder={`Where next ?`}
          />
          <Image source={GlobalImages.searchIcon1} />
        </View>
        <Text style={GlobalStyles.TextM}>TOP DESTINATIONS</Text>
        <View style={[GlobalStyles.container]}>
          {topPlacesLoading ? (
            <ActivityIndicator size={'large'} />
          ) : (
            <FlatList
              showsHorizontalScrollIndicator={false}
              horizontal
              data={topPlaces}
              keyExtractor={item => item.id}
              renderItem={({item}) => {
                return (
                  <PlaceCardH
                    item={item}
                    onPress={() => {
                      navigation.navigate('Search', {
                        screen: 'PlaceDetail',
                        params: {place: item},
                      });
                    }}
                    placeCardStyle={{}}
                  />
                );
              }}
            />
          )}
        </View>
        <Text style={GlobalStyles.TextM}>NEARBY ATTRACTIONS</Text>
        <View style={[styles.container, GlobalStyles.container]}>
          {placesLoading ? (
            <ActivityIndicator size={'large'} />
          ) : (
            <FlatList
              showsHorizontalScrollIndicator={false}
              data={places}
              keyExtractor={item => item.id}
              renderItem={({item}) => {
                return (
                  <PlaceCard
                    item={item}
                    onPress={() => {
                      navigation.navigate('Search', {
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
          )}
        </View>
      </ScrollView>
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  TextM: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 22,
    marginHorizontal: 20,
    color: GlobalColors.darkColor2,
  },
  searchBarContainer: {
    marginHorizontal: 20,
    flexDirection: 'row',
    borderColor: GlobalColors.greyShade2,
    borderWidth: 3,
    borderRadius: 10,
    alignItems: 'center',
  },
  searchInput: {
    width: '90%',
    color: GlobalColors.greyShade1,
    fontSize: 16,
  },
  container: {
    paddingBottom: 80,
  },
});
