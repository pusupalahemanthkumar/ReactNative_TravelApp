import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  TextInput,
  ActivityIndicator,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {types} from 'react-native-document-picker';
import RNFS from 'react-native-fs';

import GlobalStyles from '../GlobalStyles/styles';
import GlobalImages from '../GlobalImages/GlobalImages';
import GlobalColors from '../GlobalStyles/colors';
import Fontconfig from '../GlobalStyles/Fontconfig';
import GoBackBtn from '../components/UI/GoBackBtn';
import FullWidthBtn from '../components/UI/FullWidthBtn';
import AuthBottomActions from '../components/AppComponents/AuthBottomActions';
import GenericInput from '../components/UI/GenericInput';
import {registerAync} from '../store/dux/userRedux';

const RegisterScreen = () => {
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  const [profileImage, setProfileImage] = useState();

  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {loading, error, user} = useSelector(state => state.user);

  const registerHandler = () => {
    console.log('Register');
    const payload = {
      userName : username,
      email : email,
      phoneNumber : phoneNumber,
      password : password,
      image: profileImage,
    }
    dispatch(registerAync(payload));
  };

  const imagePickerHandler = res => {
    console.log(res);
    RNFS.readFile(res[0].uri, 'base64').then(base64 => {
      console.log(`data:${res[0].type};base64,${base64}`);
      setProfileImage(`data:${res[0].type};base64,${base64}`);
    });
  };

  return (
    <View style={[GlobalStyles.screen]}>
      <ScrollView>
        <GoBackBtn />
        <Text style={[GlobalStyles.screenTitleText, GlobalStyles.container]}>
          Hello ! Register to get started{' '}
        </Text>
        <View style={[styles.formContainer, GlobalStyles.container]}>
          {error && <Text style={GlobalStyles.errorText}>Invalid Data !!</Text>}
          <GenericInput
            type="TEXT"
            placeholder="Username"
            value={username}
            onChangeText={val => {
              setUsername(val);
            }}
          />
          <GenericInput
            type="TEXT"
            placeholder="Email"
            value={email}
            onChangeText={val => {
              setEmail(val);
            }}
          />
          <GenericInput
            type="PHONE_NUMBER"
            placeholder="Phone Number"
            value={phoneNumber}
            onChangeText={val => {
              setPhoneNumber(val);
            }}
          />
          <GenericInput
            type="DOCUMENT"
            placeholder="Upload Photo"
            docTypes={[types.images]}
            onDocumentSelect={imagePickerHandler}
          />
          <GenericInput
            type="PASSWORD"
            placeholder="Password"
            value={password}
            onChangeText={val => {
              setPassword(val);
            }}
          />
          <GenericInput
            type="PASSWORD"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChangeText={val => {
              setConfirmPassword(val);
            }}
          />
          {!loading ? (
            <FullWidthBtn
              onPress={() => {
                registerHandler();
              }}
              rippleColor={GlobalColors.lightColor2}
              label="Sign Up"
              containerStyle={{
                backgroundColor: GlobalColors.primaryColor,
                opacity: 0.7,
                marginTop: 30,
                width: '100%',
              }}
              labelStyle={{color: GlobalColors.lightColor1}}
            />
          ) : (
            <ActivityIndicator size={'large'} />
          )}
        </View>
        <AuthBottomActions
          orTitle={`Or Login With`}
          footerText={`Already have an account ? `}
          onPressFooterLink={() => {
            navigation.navigate('Login');
          }}
          footerLinkText={` Login`}
        />
      </ScrollView>
    </View>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  formContainer: {
    marginTop: 30,
  },
});
