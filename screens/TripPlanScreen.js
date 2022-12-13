import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ScrollView,
  Pressable,
  FlatList,
} from 'react-native';
import React, {useState, useEffect} from 'react';

import GlobalStyles from '../GlobalStyles/styles';
import GlobalImages from '../GlobalImages/GlobalImages';
import GlobalColors from '../GlobalStyles/colors';
import Fontconfig from '../GlobalStyles/Fontconfig';
import PlaceCard from '../components/AppComponents/PlaceCard';

const {width, height} = Dimensions.get('screen');

const NAV_DATA = [
  {
    id: '1',
    name: 'Trips',
  },
  {
    id: '2',
    name: 'Trending',
  },
  {
    id: '3',
    name: 'Bookmarks',
  },
];

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
    location: 'Jan 1 to Jan 10 (2023)',
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
    location: 'Jan 25 to Jan 31 (2023)',
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
    location: 'Jan 1 to Jan 10 (2023)',
    rating: '5',
    price: '10000',
  },
];

const TripPlanScreen = () => {
  const [selectedNav, setSelectedNav] = useState('Trips');

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
          <FlatList
            showsHorizontalScrollIndicator={false}
            data={DATA}
            keyExtractor={item => item.id}
            renderItem={({item}) => {
              return (
                <PlaceCard
                  item={item}
                  onPress={() => {}}
                  placeCardStyle={{marginBottom: 20, width : width -50, alignSelf : 'center',  marginRight : 0 }}
                />
              );
            }}
          />
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
    paddingBottom : 70,
  },
});
