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
} from 'react-native';
import React, {useState, useEffect} from 'react';

import GlobalStyles from '../GlobalStyles/styles';
import GlobalImages from '../GlobalImages/GlobalImages';
import GlobalColors from '../GlobalStyles/colors';
import Fontconfig from '../GlobalStyles/Fontconfig';
import ShowcaseIconCard from '../components/AppComponents/ShowcaseIconCard';
import ShowcaseHeaderTop from '../components/AppComponents/ShowcaseHeaderTop';
import PlaceCard from '../components/AppComponents/PlaceCard';

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
    name: 'ALL',
  },
  {
    id: '2',
    name: 'Flights',
  },
  {
    id: '3',
    name: 'Hotels',
  },
  {
    id: '4',
    name: 'Transportations',
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

const HomeScreen = () => {
  const [selectedNav, setSelectedNav] = useState('ALL');

  return (
    <View style={[GlobalStyles.screen]}>
      <View style={[styles.showcaseContainer]}>
        <ImageBackground
          source={GlobalImages.homeScreenWallpaper}
          style={[styles.backgroundImage]}>
          <ShowcaseHeaderTop
            profileUri={`https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8&w=1000&q=80`}
            onPressQR={() => {}}
            onPressBell={() => {}}
            onPressprofile={() => {}}
          />
          <View style={[styles.showcasebottom]}>
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
      <View style={[styles.mainContainer]}>
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
                onPress={() => setSelectedNav(item.name)}
                style={containerstyle}>
                <Text style={textstyle}>{item.name}</Text>
              </Pressable>
            );
          })}
        </ScrollView>
        <View style={[styles.container]}>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={DATA}
            keyExtractor={item => item.id}
            renderItem={({item}) => {
              return (
               <PlaceCard  item={item} onPress={()=>{}} />
              );
            }}
          />
        </View>
      </View>
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
    marginHorizontal: 20,
  },
  showcaseTitle: {
    fontSize: 28,
    color: GlobalColors.lightColor1,
    fontWeight: 'bold',
    width: '70%',
    marginBottom: 20,
  },
  mainContainer: {
    marginVertical: 22,
    marginHorizontal: 20,
  },
  homeTitle: {
    fontSize: 20,
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
