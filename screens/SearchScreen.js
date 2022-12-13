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
} from 'react-native';
import React, {useState, useEffect} from 'react';

import GlobalStyles from '../GlobalStyles/styles';
import GlobalImages from '../GlobalImages/GlobalImages';
import GlobalColors from '../GlobalStyles/colors';
import Fontconfig from '../GlobalStyles/Fontconfig';
import PlaceCard from '../components/AppComponents/PlaceCard';
import PlaceCardH from '../components/AppComponents/PlaceCardH';

const {width, height} = Dimensions.get('screen');

const DATA = [
  {
    id: '1',
    placeName: 'Leh Ladakh',
    images: [
      `https://www.holidify.com/images/bgImages/LADAKH.jpg`,
      `https://www.holidify.com/images/cmsuploads/compressed/zanskar-river-3859214_1920_20190304123111.jpg`,
      `https://www.holidify.com/images/cmsuploads/compressed/Karakoram-West_Tibetan_Plateau_alpine_steppe_20190402182622.jpg`,
      `https://www.holidify.com/images/cmsuploads/compressed/22612041358_4a9fec35d2_b_20190403172758.jpg`,
    ],
    location: ' Jammu & Kashmir',
    rating: '4.5',
    price: '15000',
  },
  {
    id: '2',
    placeName: 'Sri Lanka',
    images: [
      `https://www.holidify.com/images/bgImages/SRI-LANKA.jpg`,
      `https://www.holidify.com/images/cmsuploads/compressed/shutterstock_1327703336_20200114182848.png`,
      `https://www.holidify.com/images/cmsuploads/compressed/Weligama_Sri_Lanka_Unsplash_20200124160240.jpg`,
      `https://www.holidify.com/images/cmsuploads/compressed/shutterstock_327193856_20200214151728.jpg`,
    ],
    location: 'Sri Lanka',
    rating: '4.8',
    price: '20000',
  },
  {
    id: '3',
    placeName: 'Andaman',
    images: [
      `https://www.holidify.com/images/cmsuploads/compressed/5557573747_d382a3b218_z_20190315143145.jpg`,
      `https://www.holidify.com/images/bgImages/ANDAMAN-NICOBAR-ISLANDS.jpg`,
      `https://www.holidify.com/images/cmsuploads/compressed/15200591704_491338852a_z_20190315163300.jpg`,
      `https://www.holidify.com/images/compressed/3617.jpg?v=1.1`,
    ],
    location: 'India',
    rating: '5',
    price: '10000',
  },
];

const SearchScreen = () => {
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
          <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal
            data={DATA}
            keyExtractor={item => item.id}
            renderItem={({item}) => {
              return (
                <PlaceCardH
                  item={item}
                  onPress={() => {}}
                  placeCardStyle={{}}
                />
              );
            }}
          />
        </View>
        <Text style={GlobalStyles.TextM}>NEARBY ATTRACTIONS</Text>
        <View style={[styles.container, GlobalStyles.container]}>
          <FlatList
            showsHorizontalScrollIndicator={false}
            data={DATA}
            keyExtractor={item => item.id}
            renderItem={({item}) => {
              return (
                <PlaceCard
                  item={item}
                  onPress={() => {}}
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
  container:{
    paddingBottom : 80,
  }
});
