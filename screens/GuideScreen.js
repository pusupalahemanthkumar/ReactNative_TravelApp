import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ScrollView,
  Pressable,
  FlatList,
  ImageBackground,
  TextInput,
  Image,
  ActivityIndicator,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {useIsFocused} from '@react-navigation/native';

import GlobalStyles from '../GlobalStyles/styles';
import GlobalImages from '../GlobalImages/GlobalImages';
import GlobalColors from '../GlobalStyles/colors';
import Fontconfig from '../GlobalStyles/Fontconfig';
import TipCard from '../components/AppComponents/TipCard';
import ArticleCard from '../components/AppComponents/ArticleCard';
import {getTipsAsync, getArticlesAsync} from '../store/dux/articleRedux';

const {width, height} = Dimensions.get('screen');

const GuideScreen = () => {
  const isFocused = useIsFocused();
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {
    tips,
    tipsLoading,
    tipsError,
    articles,
    articlesLoading,
    articlesError,
  } = useSelector(state => state.article);

  useEffect(() => {
    if (isFocused) {
      dispatch(getTipsAsync());
      dispatch(getArticlesAsync());
    }
  }, [isFocused]);

  return (
    <View style={[GlobalStyles.screen]}>
      <ScrollView>
        <Text style={GlobalStyles.screenTitleText2}>Guide</Text>
        <View style={[styles.HeaderRow]}>
          <Text style={styles.TextM}>MIGHT NEED THESE</Text>
          <Pressable>
            <Text style={[styles.LinkText]}>See More</Text>
          </Pressable>
        </View>
        <View style={[styles.container, GlobalStyles.container]}>
          {tipsLoading ? (
            <ActivityIndicator size={'large'} />
          ) : (
            <FlatList
              data={tips}
              keyExtractor={item => item.id}
              showsHorizontalScrollIndicator={false}
              horizontal
              renderItem={({item}) => {
                return (
                  <TipCard
                    item={item}
                    onPress={() => {
                      navigation.navigate('Guide', {
                        screen: 'ArticleDetail',
                        params: {article: item},
                      });
                    }}
                  />
                );
              }}
            />
          )}
        </View>
        <View style={[styles.searchBarContainer]}>
          <TextInput
            style={[styles.searchInput]}
            placeholder={`A country, city , place or anything .. `}
          />
          <Image source={GlobalImages.searchIcon1} />
        </View>
        <View style={[styles.HeaderRow]}>
          <Text style={styles.TextM}>TOP PICKED ARTICLES</Text>
          <Pressable>
            <Text style={[styles.LinkText]}>See More</Text>
          </Pressable>
        </View>
        <View style={[styles.container2, GlobalStyles.container]}>
          {articlesLoading ? (
            <ActivityIndicator size={'large'} />
          ) : (
            <FlatList
              data={articles}
              keyExtractor={item => item.id}
              showsHorizontalScrollIndicator={false}
              horizontal
              renderItem={({item}) => {
                return (
                  <ArticleCard
                    item={item}
                    onPress={() => {
                      navigation.navigate('Guide', {
                        screen: 'ArticleDetail',
                        params: {article: item},
                      });
                    }}
                  />
                );
              }}
            />
          )}
        </View>
      </ScrollView>
    </View>
  );
};

export default GuideScreen;

const styles = StyleSheet.create({
  TextM: {
    fontSize: 18,
    fontWeight: 'bold',
    color: GlobalColors.darkColor2,
  },
  HeaderRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginVertical: 22,
  },
  LinkText: {
    color: GlobalColors.primaryColor,
    fontSize: 18,
  },
  container: {
    marginVertical: 22,
  },
  container2: {
    marginVertical: 22,
    paddingBottom: 100,
  },

  searchBarContainer: {
    marginHorizontal: 20,
    flexDirection: 'row',
    borderColor: GlobalColors.greyShade2,
    borderWidth: 3,
    borderRadius: 10,
    alignItems: 'center',
  },
  searchInput: {
    width: '90%',
    color: GlobalColors.greyShade1,
    fontSize: 16,
  },
});
