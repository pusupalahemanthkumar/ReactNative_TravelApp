import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  TextInput,
  ActivityIndicator,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';

import GlobalStyles from '../GlobalStyles/styles';
import GlobalImages from '../GlobalImages/GlobalImages';
import GlobalColors from '../GlobalStyles/colors';
import Fontconfig from '../GlobalStyles/Fontconfig';
import GoBackBtn from '../components/UI/GoBackBtn';
import FullWidthBtn from '../components/UI/FullWidthBtn';
import AuthBottomActions from '../components/AppComponents/AuthBottomActions';
import {loginAsync} from '../store/dux/userRedux';
import GenericInput from '../components/UI/GenericInput';

const LoginScreen = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {loading, error, user} = useSelector(state => state.user);

  const loginHandler = () => {
    console.log('Login');
    console.log({
      email,
      password
    })
    dispatch(loginAsync(email, password));
  };

  return (
    <View style={[GlobalStyles.screen]}>
      <GoBackBtn />
      <Text style={[GlobalStyles.screenTitleText, GlobalStyles.container]}>
        Welcome back! Glad to see you. Again!
      </Text>
      <View style={[styles.formContainer, GlobalStyles.container]}>
      {error && (
          <Text style={GlobalStyles.errorText}>
            {error}
          </Text>
        )}
        <GenericInput
          type="TEXT"
          placeholder="Enter your email"
          onChangeText={val => setEmail(val)}
          value={email}
        />
        <GenericInput
          type="PASSWORD"
          placeholder="Enter your password"
          onChangeText={val => setPassword(val)}
          value={password}
        />
        {!loading  ? (
          <FullWidthBtn
            onPress={() => {
              loginHandler();
            }}
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
        ) : (
          <ActivityIndicator size={'large'} />
        )}
      </View>
      <AuthBottomActions
        orTitle={`Or Login With`}
        footerText={`Don't have an account ? `}
        onPressFooterLink={() => {
          navigation.navigate('Register');
        }}
        footerLinkText={` Register`}
      />
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  formContainer: {
    marginTop: 30,
  }
});
