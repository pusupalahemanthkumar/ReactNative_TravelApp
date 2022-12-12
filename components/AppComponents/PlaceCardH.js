import {
  StyleSheet,
  Text,
  View,
  Pressable,
  ImageBackground,
  Image,
  Dimensions
} from 'react-native';
import React from 'react';

import GlobalImages from '../../GlobalImages/GlobalImages';
import GlobalStyles from '../../GlobalStyles/styles';
import GlobalColors from '../../GlobalStyles/colors';

/*

@ props
- item
- onPress
- placeCardStyle

*/
const {width, height} = Dimensions.get('screen');

const PlaceCardH = ({item, onPress, placeCardStyle}) => {
  return (
    <Pressable style={[styles.placeCard, placeCardStyle]} onPress={onPress}>
      <ImageBackground
        source={{uri: item.images[1]}}
        style={[styles.placeCardImgBackground]}>
        <View style={[styles.placeCardBody]}>
          <Text style={[styles.placeName]}>{item.placeName}</Text>
          <Text style={[styles.placeLocation]}>{item.location}</Text>
        </View>
      </ImageBackground>
    </Pressable>
  );
};

export default PlaceCardH;

const styles = StyleSheet.create({
  placeCard: {
    width: (width / 2)- 35,
    height: 200,
    borderRadius: 10,
    marginRight: 20,
  },
  placeCardImgBackground: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    borderRadius: 10,
    overflow: 'hidden',
    justifyContent: 'center',
    // opacity : 0.8,
  },
  placeCardBody: {
    alignItems: 'center',
  },
  placeName: {
    color: GlobalColors.lightColor1,
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 3,
  },
  placeLocation: {
    color: GlobalColors.lightColor1,
    fontSize: 14,
    fontWeight: 'bold',
  },
});
