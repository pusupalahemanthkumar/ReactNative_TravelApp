import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
} from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

import GlobalStyles from '../GlobalStyles/styles';
import GlobalImages from '../GlobalImages/GlobalImages';
import GlobalColors from '../GlobalStyles/colors';
import Fontconfig from '../GlobalStyles/Fontconfig';
import FullWidthBtn from '../components/UI/FullWidthBtn';

const {width, height} = Dimensions.get('screen');

const WelcomeScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={[GlobalStyles.screen, styles.screenContainer]}>
      <View style={StyleSheet.absoluteFillObject}>
        <Image
          style={[styles.backgroundImage]}
          source={{
            uri: GlobalImages.welcomeScreenWallpaper,
          }}
        />
      </View>

      <View style={[styles.container]}>
        <Text style={[styles.title]}>
          Explore the world never easy like now.
        </Text>
        <FullWidthBtn
          onPress={() => {navigation.navigate('Login')}}
          rippleColor={GlobalColors.lightColor2}
          label="Login"
          containerStyle={{
            backgroundColor: GlobalColors.primaryColor,
            opacity: 0.7,
          }}
          labelStyle={{color: GlobalColors.lightColor1}}
        />
        <FullWidthBtn
          onPress={() => {navigation.navigate('Register')}}
          rippleColor={GlobalColors.lightColor1}
          label="Register"
          containerStyle={{
            backgroundColor: GlobalColors.lightColor1,
            opacity: 0.7,
          }}
          labelStyle={{color: GlobalColors.primaryColor}}
        />
      </View>
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  screenContainer: {
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  backgroundImage: {
    width: width,
    height: height,
    resizeMode: 'cover',
    opacity: 0.9,
  },
  container: {
    marginBottom: 70,
  },
  title: {
    color: GlobalColors.lightColor1,
    fontSize: Fontconfig.L1_SIZE,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingHorizontal: 50,
    marginBottom: 40,
  },
});
