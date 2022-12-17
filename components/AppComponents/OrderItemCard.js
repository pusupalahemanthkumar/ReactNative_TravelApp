import {StyleSheet, Text, View, Image, Dimensions} from 'react-native';
import React from 'react';

import GlobalImages from '../../GlobalImages/GlobalImages';
import GlobalStyles from '../../GlobalStyles/styles';
import GlobalColors from '../../GlobalStyles/colors';

const {width, height} = Dimensions.get('screen');

const OrderItemCard = ({item}) => {
  return (
    <View style={[styles.orderContainer]}>
      <View style={[styles.row]}>
        <Text style={[styles.heading]}>Order Id :</Text>
        <Text style={[styles.text]}>123246</Text>
      </View>
      <View style={[styles.row]}>
        <Text style={[styles.heading]}>Place:</Text>
        <Text style={[styles.text]}>Hyderabad</Text>
      </View>
      <View style={[styles.row]}>
        <Text style={[styles.heading]}>Date :</Text>
        <Text style={[styles.text]}> 1-01-2023</Text>
      </View>
      <View style={[styles.row]}>
        <Text style={[styles.heading]}>Price:</Text>
        <Text style={[styles.text]}>12000 Rs</Text>
      </View>
      <View style={[styles.row]}>
        <Text style={[styles.heading]}>Travel Agent Contact:</Text>
        <Text style={[styles.text]}>1234567891</Text>
      </View>
      <View style={[styles.row]}>
        <Text style={[styles.heading]}>Payment Status :</Text>
        <Text style={[styles.text]}>Pending</Text>
      </View>
    </View>
  );
};

export default OrderItemCard;

const styles = StyleSheet.create({
  orderContainer: {
    marginBottom: 15,
    width: width - 40,
    backgroundColor: GlobalColors.lightColor2,
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 10,
    elevation: 8,
  },
  row :{
    flexDirection : "row",
    justifyContent : 'space-between',
    paddingVertical : 10,
    paddingHorizontal : 10,
    borderColor : GlobalColors.greyShade2,
    borderBottomWidth : 1,
  },
  heading :{
    fontWeight :'bold',
    fontSize : 15,
  },
  text : {
    fontSize : 15,
  }
});
