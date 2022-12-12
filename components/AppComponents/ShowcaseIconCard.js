import {StyleSheet, Text, View, Pressable, Image} from 'react-native';
import React from 'react';

import GlobalImages from '../../GlobalImages/GlobalImages';
import GlobalStyles from '../../GlobalStyles/styles';
import GlobalColors from '../../GlobalStyles/colors';

/*
@ props
- icon,
- name
- onPress
*/

const ShowcaseIconCard = props => {
  return (
    <Pressable style={styles.card}>
      <View style={styles.cardIconContainer}>
        <Image source={props.icon} />
      </View>
      <Text style={[styles.cardTitle]}>{props.name}</Text>
    </Pressable>
  );
};

export default ShowcaseIconCard;

const styles = StyleSheet.create({
  card: {
    marginRight: 25,
  },
  cardIconContainer: {
    width: 64,
    height: 64,
    backgroundColor: GlobalColors.lightColor1,
    opacity: 0.3,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  cardIcon: {},
  cardTitle: {
    textAlign: 'center',
    marginVertical: 10,
    color: GlobalColors.lightColor1,
    fontWeight: 'bold',
  },
});
