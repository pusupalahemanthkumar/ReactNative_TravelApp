import {StyleSheet, Text, View, Image, Pressable} from 'react-native';
import React from 'react';

import GlobalImages from '../../GlobalImages/GlobalImages';
import GlobalStyles from '../../GlobalStyles/styles';
import GlobalColors from "../../GlobalStyles/colors";

/*
@ props
- orTitle
- footerText
- onPressFooterLink
- footerLinkText
*/

const AuthBottomActions = (props) => {
  return (
    <>
      <View style={[styles.orHeader, GlobalStyles.container]}>
        <View style={[styles.line]}></View>
        <Text style={[styles.orText]}>{props.orTitle}</Text>
        <View style={[styles.line]}></View>
      </View>
      <View style={[styles.optionsContainer, GlobalStyles.container]}>
        <Image
          source={GlobalImages.facebookbtn}
          style={[GlobalStyles.imageFull, styles.btn]}
        />
        <Image
          source={GlobalImages.googlebtn}
          style={[GlobalStyles.imageFull, styles.btn]}
        />
        <Image
          source={GlobalImages.applebtn}
          style={[GlobalStyles.imageFull, styles.btn]}
        />
      </View>
      <View style={[styles.footerContainer, GlobalStyles.container]}>
        <Text style={[styles.footerText]}>{props.footerText}</Text>
        <Pressable onPress={ props.onPressFooterLink}>
          <Text style={[styles.footerLinkText]}>{props.footerLinkText}</Text>
        </Pressable>
      </View>
    </>
  );
};

export default AuthBottomActions;

const styles = StyleSheet.create({
  orHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  line: {
    flex: 4,
    backgroundColor: GlobalColors.greyShade2,
    height: 2,
    marginHorizontal: 5,
  },
  orText: {
    flex: 3,
    fontSize: 14,
    color: GlobalColors.greyShade1,
    marginHorizontal: 5,
  },
  optionsContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 30,
  },
  btn: {
    width: 105,
    height: 56,
  },
  footerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 40,
  },
  footerText: {
    color: GlobalColors.darkColor2,
    fontSize: 15,
  },
  footerLinkText: {
    color: GlobalColors.primaryColor,
    fontSize: 15,
    marginBottom: 10,
  },
});
