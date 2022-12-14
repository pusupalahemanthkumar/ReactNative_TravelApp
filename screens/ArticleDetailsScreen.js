import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  ScrollView,
} from 'react-native';
import React from 'react';
import {useRoute} from '@react-navigation/native';

import GlobalStyles from '../GlobalStyles/styles';
import GlobalImages from '../GlobalImages/GlobalImages';
import GlobalColors from '../GlobalStyles/colors';
import Fontconfig from '../GlobalStyles/Fontconfig';
import GoBackBtn from '../components/UI/GoBackBtn';

const {width, height} = Dimensions.get('screen');

const ArticleDetailsScreen = () => {
  const route = useRoute();
  const article = route.params.article;
  return (
    <View style={GlobalStyles.screen}>
      <GoBackBtn />
      <ScrollView>
        <View style={[styles.articleImageContainer]}>
          <Image
            source={{
              uri: article.image,
            }}
            style={[GlobalStyles.imageFull]}
          />
        </View>
        <View style={[styles.mainContainer]}>
          <Text style={[GlobalStyles.screenTitleText2]}>{article.title}</Text>
          <View style={[GlobalStyles.container]}>
            <Text style={[styles.descriptionText]}>
              {article.shortDescription}
            </Text>
            {article.content.map((item, index) => {
              return (
                <View style={[styles.descriptionContainer]} key={`${index}`}>
                  <Text style={[styles.title1]}>{item.title}</Text>
                  <Text style={[styles.descriptionText]}>
                    {item.description}
                  </Text>
                </View>
              );
            })}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default ArticleDetailsScreen;

const styles = StyleSheet.create({
  articleImageContainer: {
    width: width,
    height: 300,
  },
  mainContainer: {
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    backgroundColor: '#f4f4f4',
    // position: 'absolute',
    // top: 250,
    zIndex: 100,
    width: width,
    paddingBottom: 100,
    marginTop: -50,
  },
  articleTitle: {},
  title1: {
    fontSize: 15,
    fontWeight: 'bold',
    color: GlobalColors.darkColor2,
    marginBottom: 5,
  },
  descriptionContainer: {
    marginVertical: 10,
    marginTop: 20,
  },
  descriptionText: {
    fontSize: 15,
    textAlign: 'left',
    marginTop: 5,
  },
});
