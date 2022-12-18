import {StyleSheet, Text, View, Pressable, Image} from 'react-native';
import React from 'react';

import GlobalImages from '../../GlobalImages/GlobalImages';
import GlobalStyles from '../../GlobalStyles/styles';
import GlobalColors from '../../GlobalStyles/colors';

/*
@ props
- profileUri,
- onPressProfile
- onPressQR
- onPressBell

*/

const ShowcaseHeaderTop = (props) => {
  return (
    <View style={[styles.showcaseTop]}>
      <Pressable style={[styles.avatorContainer]} onPress ={props.onPressProfile}>
        <Image
          source={{
            uri: props.profileUri,
          }}
          style={[styles.avator]}
        />
      </Pressable>
      <View style={[styles.showcaseActions]}>
        <Pressable style={[styles.iconCotainer]} onPress ={props.onPressbell}>
          <Image source={GlobalImages.bellIcon} />
        </Pressable>
        <Pressable style={[styles.iconCotainer]} onPress ={props.onPressLogout} >
          <Image source={GlobalImages.logoutIcon} />
        </Pressable>
      </View>
    </View>
  );
};

export default ShowcaseHeaderTop;

const styles = StyleSheet.create({
  showcaseTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 30,
    marginHorizontal: 20,
  },
  avatorContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  avator: {
    width: '100%',
    height: '100%',
    borderRadius: 20,
    borderColor: GlobalColors.lightColor1,
    borderWidth: 2,
  },
  showcaseActions: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  iconCotainer: {
    marginRight: 15,
  },
});
