import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  TextInput,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

import GlobalStyles from '../GlobalStyles/styles';
import GlobalImages from '../GlobalImages/GlobalImages';
import GlobalColors from '../GlobalStyles/colors';
import Fontconfig from '../GlobalStyles/Fontconfig';
import GoBackBtn from '../components/UI/GoBackBtn';
import FullWidthBtn from '../components/UI/FullWidthBtn';
import AuthBottomActions from '../components/AppComponents/AuthBottomActions';

const RegisterScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={[GlobalStyles.screen]}>
      <GoBackBtn />
      <Text style={[styles.title]}>Hello ! Register to get started </Text>
      <View style={[styles.formContainer]}>
        <View style={styles.inputContainer}>

        <TextInput
          style={[styles.input]}
          placeholder="Username"
          secureTextEntry={false}
        />
        </View>
        <View style={[styles.inputContainer]}>
        <TextInput
          style={[styles.input]}
          placeholder="Email"
          secureTextEntry={false}
        />

        </View>
       
        <View style={styles.inputContainer}>
          <TextInput
            style={[styles.input]}
            placeholder="Password"
            secureTextEntry={true}
          />
          <Pressable>
            <Image source={GlobalImages.eyeIcon} style={{marginRight : 10}} />
          </Pressable>
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={[styles.input]}
            placeholder="Confirm Password"
            secureTextEntry={true}
          />
          <Pressable>
            <Image source={GlobalImages.eyeIcon} style={{marginRight : 10}} />
          </Pressable>
        </View>

       
        <FullWidthBtn
          onPress={() => {}}
          rippleColor={GlobalColors.lightColor2}
          label="Login"
          containerStyle={{
            backgroundColor: GlobalColors.primaryColor,
            opacity: 0.7,
            marginTop: 30,
            width: '100%',
          }}
          labelStyle={{color: GlobalColors.lightColor1}}
        />
      </View>
      <AuthBottomActions
        orTitle={`Or Login With`}
        footerText={`Already have an account ? `}
        onPressFooterLink={() => {
          navigation.navigate('Login');
        }}
        footerLinkText={` Login`}
      />
    </View>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  title: {
    marginHorizontal: 20,
    marginVertical: 20,
    width: '80%',
    fontSize: 30,
    fontWeight: 'bold',
    color: GlobalColors.darkColor2,
  },
  formContainer: {
    marginHorizontal: 20,
    marginTop: 30,
  },
  inputContainer: {
    width: '100%',
    backgroundColor: GlobalColors.greyShade2,
    flexDirection :'row',
    alignItems :'center',
    justifyContent :'space-between',
    borderWidth: 1,
    borderColor: GlobalColors.greyShade2,
    marginBottom: 20,
  },
  input: {
    backgroundColor: GlobalColors.greyShade2,
    fontSize: 15,
    paddingHorizontal: 10,
    paddingVertical: 15,
  },
 
});
