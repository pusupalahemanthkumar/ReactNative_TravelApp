import {StyleSheet, Text, View, ImageBackground, Pressable} from 'react-native';
import React from 'react';

import GlobalImages from '../../GlobalImages/GlobalImages';
import GlobalStyles from '../../GlobalStyles/styles';
import GlobalColors from "../../GlobalStyles/colors";

/*
@ props

- item
- onPress
*/

const TipCard = ({item, onPress}) => {
  return (
    <Pressable style={[styles.tipCard]} onPress={onPress}>
      <ImageBackground
        source={{uri: item.image}}
        style={[styles.tipCardImgBackground]}>
        <View style={[styles.tipCardBody]}>
          <Text style={[styles.tipName]}>{item.title}</Text>
        </View>
      </ImageBackground>
    </Pressable>
  );
};

export default TipCard;

const styles = StyleSheet.create({
  tipCard: {
    width: 150,
    height: 150,
    borderRadius: 10,
    marginRight: 20,
  },
  tipCardImgBackground: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    borderRadius: 10,
    overflow: 'hidden',
    justifyContent: 'flex-end',
    // opacity : 0.8,
  },
  tipCardBody: {
    alignItems: 'center',
  },
  tipName: {
    color: GlobalColors.lightColor1,
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 3,
  },
  tipLocation: {
    color: GlobalColors.lightColor1,
    fontSize: 14,
    fontWeight: 'bold',
  },
});
