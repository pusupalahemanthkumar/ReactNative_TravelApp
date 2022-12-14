import {StyleSheet, Text, View, Image, Dimensions} from 'react-native';
import React from 'react';

import GlobalImages from '../../GlobalImages/GlobalImages';
import GlobalStyles from '../../GlobalStyles/styles';
import GlobalColors from "../../GlobalStyles/colors";

const {width, height} = Dimensions.get('screen');

const OrderItemCard = ({item}) => {
  return (
    <View style={[styles.orderContainer]}>
    <View style={[styles.orderPlaceImage]}>
      <Image  source={{uri : item.images[1]}} style={[GlobalStyles.imageFull, {  borderRadius : 10,}]}/>
    </View>
    <View style={[styles.OrderDetailsContainer]}>
      <Text style={[styles.orderTitle]}><Text style={[styles.Heading]}>Place :</Text> {item.placeName}</Text>
      <Text style={[styles.orderTitle]}><Text style={[styles.Heading]}>Start Date :</Text> {item.startDate}</Text>
      <Text style={[styles.orderTitle]}><Text style={[styles.Heading]}>End Date :</Text> {item.endDate}</Text>
      <Text style={[styles.orderTitle]}><Text style={[styles.Heading]}>Payment :</Text>{item.payment}</Text>
    </View>
  </View>
  );
};

export default OrderItemCard;

const styles = StyleSheet.create({
  orderContainer: {
    marginBottom: 15,
    width: width - 40,
    flexDirection: 'row',
    alignItems: 'flex-start',
    backgroundColor: GlobalColors.lightColor2,
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 10,
    elevation: 8,
  },
  orderPlaceImage: {
    width: width / 3,
    height: 100,
    borderRadius: 10,
  },
  OrderDetailsContainer: {
    marginLeft: 10,
  },
  orderTitle: {
    fontSize: 14,
    marginBottom: 4,
  },
  Heading: {
    fontWeight: 'bold',
    // color : GlobalColors.darkColor2
  },
});
