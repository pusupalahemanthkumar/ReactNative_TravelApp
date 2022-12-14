// @ GLOBAL STYLES

import {StyleSheet} from 'react-native';
import GlobalColors from './colors';
import Fontconfig from './Fontconfig';

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  screenTitleText: {
    marginVertical: 20,
    marginTop : 80,
    width: '80%',
    fontSize: Fontconfig.TEXT_SIZE_1,
    fontWeight: 'bold',
    color: GlobalColors.darkColor2,
  },
  screenTitleText2: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 22,
    marginHorizontal: 20,
    color: GlobalColors.darkColor2,
  },
  imageFull: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  TextM: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 22,
    marginHorizontal: 20,
    color: GlobalColors.darkColor2,
  },
  container: {
    marginHorizontal: 20,
  },
  inputContainer: {
    width: '100%',
    backgroundColor: GlobalColors.greyShade2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
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
  errorText: {
    width: '90%',
    alignSelf :"center",
    fontSize: 15,
    marginBottom: 15,
    color: 'red',
    textAlign: 'center',
  },
});

export default styles;
