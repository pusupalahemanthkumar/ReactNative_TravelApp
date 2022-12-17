import {StyleSheet, Text, View, ImageBackground, Pressable, Dimensions, Image} from 'react-native';
import React from 'react';

import GlobalImages from '../../GlobalImages/GlobalImages';
import GlobalStyles from '../../GlobalStyles/styles';
import GlobalColors from '../../GlobalStyles/colors';

const {width, height} = Dimensions.get('screen');

/*
@ props

- item
- onPress
*/

const ArticleCard = ({item, onPress}) => {
  return (
    <Pressable style={[styles.articleCard]} onPress={onPress}>
      <View style={[styles.articleImageContainer]}>
        <Image
          source={{uri: item.image}}
          style={[
            GlobalStyles.imageFull,
            {borderRadius: 20, overflow: 'hidden'},
          ]}
        />
      </View>
      <Text style={[styles.articleCardTag]}>{item.category[0]}</Text>
      <Text style={[styles.articleHeadLine]}>{item.title}</Text>
    </Pressable>
  );
};

export default ArticleCard;

const styles = StyleSheet.create({
  articleCard: {
    marginRight: 20,
    width: width - 50,
  },
  articleImageContainer: {
    width: '100%',
    height: 200,
    marginBottom: 10,
  },
  articleCardTag: {
    width: '80%',
    color: '#0048F0',
    fontWeight: 'bold',
    marginBottom: 5,
  },
  articleHeadLine: {
    width: '80%',
    color: GlobalColors.darkColor2,
    fontSize: 15,
  },
});
