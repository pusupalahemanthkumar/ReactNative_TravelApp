import {StyleSheet, View ,Text, Pressable, Dimensions} from 'react-native';
import React from 'react';

import Fontconfig from '../../GlobalStyles/Fontconfig';
import GlobalColors from '../../GlobalStyles/colors.js';

/*

@ props
- onPress
- rippleColor
- containerStyle,
- labelStyle
- label

*/

const FullWidthBtn = props => {
  return (
    <View style={[styles.btnOuter, props.containerStyle]}>
      <Pressable
        onPress={props.onPress}
        android_ripple={{color: props.rippleColor}}
        style={({pressed}) =>
          pressed
            ? [styles.btn, styles.pressed, ]
            : [styles.btn]
        }>
        <Text style={[styles.label, props.labelStyle]}>{props.label}</Text>
      </Pressable>
    </View>
  );
};

export default FullWidthBtn;

const styles = StyleSheet.create({
  btnOuter:{
    width: Dimensions.get('window').width - 60,
    backgroundColor: GlobalColors.darkColor2,
    alignSelf: 'center',
    overflow :'hidden',
    borderRadius: 15,
    marginBottom: 20,
    elevation: 5,
  },
  btn: {
    paddingHorizontal: 15,
    paddingVertical: 15,
  },
  label: {
    fontSize: Fontconfig.L2_SIZE,
    color: GlobalColors.lightColor1,
    textAlign: 'center',
  },
  pressed: {
    opacity: 0.5,
  },
});
