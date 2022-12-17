import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React, {useState} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';

import GlobalStyles from '../GlobalStyles/styles';
import GlobalImages from '../GlobalImages/GlobalImages';
import GlobalColors from '../GlobalStyles/colors';
import Fontconfig from '../GlobalStyles/Fontconfig';
import GoBackBtn from '../components/UI/GoBackBtn';
import FullWidthBtn from '../components/UI/FullWidthBtn';
import GenericInput from '../components/UI/GenericInput';

const PlaceOrderScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const place = route.params.place;
  const {user} = useSelector(state => state.user);

  const [name, setName] = useState(user.userName);
  const [email, setEmail] = useState(user.email);
  const [phoneNumber, setPhoneNumber] = useState(user.phoneNumber);
  const [placeName, setPlaceName] = useState(place.placeName);
  const [date,setDate] = useState();
  return (
    <View style={[GlobalStyles.screen]}>
      <ScrollView>
        <GoBackBtn customPressHandler= {()=>{
          navigation.navigate("TripPlan",{
            screen : 'TripPlanScreen',
          })
        }}/>
        <Text style={[GlobalStyles.screenTitleText, GlobalStyles.container]}>
          Hello ! Please fill the below details
        </Text>
        <View style={[styles.formContainer, GlobalStyles.container]}>
          <GenericInput
            type="TEXT"
            placeholder="Enter Name"
            value={name}
            onChangeText={val => { setName(val)}}
          />
          <GenericInput
            type="TEXT"
            placeholder="Enter Email"
            value={email}
            onChangeText={val => { setEmail(val)}}
          />
          <GenericInput
            type="PHONE_NUMBER"
            placeholder="Enter Phone Number"
            value={phoneNumber}
            onChangeText={val => { setPhoneNumber(val)}}
          />
          <GenericInput
            type="TEXT"
            placeholder="Place"
            editable={false}
            value={placeName}
            onChangeText={val => { setPlaceName(val)}}
          />
           <GenericInput
            type="TEXT"
            placeholder="Enter Journey Date : DD/MM/YYYY"
            value={date}
            onChangeText={val => { setDate(val)}}
          />
          <FullWidthBtn
            onPress={() => {}}
            rippleColor={GlobalColors.lightColor2}
            label="confirm"
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

export default PlaceOrderScreen;

const styles = StyleSheet.create({
  formContainer: {
    marginTop: 30,
  },
});
