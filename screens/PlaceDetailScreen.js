import {ScrollView, StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

import { useRoute } from '@react-navigation/native';

import GlobalStyles from '../GlobalStyles/styles';
import GlobalImages from '../GlobalImages/GlobalImages';
import GlobalColors from '../GlobalStyles/colors';
import Fontconfig from '../GlobalStyles/Fontconfig';
import GalleryView from '../components/UI/GalleryView';
import GoBackBtn from '../components/UI/GoBackBtn';
import FullWidthBtn from '../components/UI/FullWidthBtn';

const PlaceDetailScreen = () => {
  const route = useRoute();
  const place = route.params.place
  return (
    <View style={[GlobalStyles.screen]}>
      <GoBackBtn />
      <ScrollView>
        <GalleryView images={place.images}/>
        <View style={[styles.mainContainer, GlobalStyles.container]}>
          <View style={[styles.TitleContainer]}>
            <Text style={[styles.title]}>{place. placeName}</Text>
            <View style={[styles.savePlacebtn]}>
              <Image
                style={[styles.savePlaceIcon]}
                source={GlobalImages.bookmarkIcon}
              />
            </View>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Text style={[styles.textM]}>Rating : </Text>
            <Text style={[styles.textM]}>{place.rating}</Text>
            <Image source={GlobalImages.starIcon} />
          </View>
          <View style={[styles.descriptionContainer]}>
          <Text style={[styles.title1]}>Description</Text>
            <Text style={[styles.descriptionText]}>
             {place.description}
            </Text>
          </View>
          <FullWidthBtn
            onPress={() => {
              console.log("TEST")
            }}
            rippleColor={GlobalColors.lightColor2}
            label="Choose Package"
            containerStyle={{
              backgroundColor: GlobalColors.primaryColor,
              opacity: 0.7,
              marginTop: 30,
              width: '100%',
            }}
            labelStyle={{color: GlobalColors.lightColor1}}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default PlaceDetailScreen;

const styles = StyleSheet.create({
  mainContainer: {
    marginVertical: 10,
    paddingBottom : 80,
  },
  TitleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: GlobalColors.darkColor2,
  },
  title1 :{
    fontSize : 15,
    fontWeight: 'bold',
    color: GlobalColors.darkColor2,
    marginBottom: 5,
  },
  textM: {
    fontSize: 15,
  },
  savePlacebtn: {
    backgroundColor: GlobalColors.greyShade1,
    opacity: 0.5,
    padding: 5,
    borderRadius: 8,
  },
  savePlaceIcon: {
    borderRadius: 8,
    overflow: 'hidden',
  },
  descriptionContainer :{
    marginVertical : 10,
    marginTop : 20,
  },
  descriptionText :{
    fontSize : 15,
    textAlign :'left'
  }
});
