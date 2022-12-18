import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
} from 'react-native';
import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';

import {useRoute} from '@react-navigation/native';

import GlobalStyles from '../GlobalStyles/styles';
import GlobalImages from '../GlobalImages/GlobalImages';
import GlobalColors from '../GlobalStyles/colors';
import Fontconfig from '../GlobalStyles/Fontconfig';
import GalleryView from '../components/UI/GalleryView';
import GoBackBtn from '../components/UI/GoBackBtn';
import FullWidthBtn from '../components/UI/FullWidthBtn';
import {toogleBookmarkAsync} from '../store/dux/userRedux';

const PlaceDetailScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const dispatch = useDispatch();
  const place = route.params.place;
  const {bookmarks} = useSelector(state => state.user.user);

  const [isSaved, setIsSaved] = useState(bookmarks.includes(place._id));
  const onCardClickHandler = () => {
    setIsSaved(prev => !prev);
    dispatch(toogleBookmarkAsync(place._id));
  };
  return (
    <View style={[GlobalStyles.screen]}>
      <GoBackBtn />
      <ScrollView>
        <GalleryView images={place.images} />
        <View style={[styles.mainContainer, GlobalStyles.container]}>
          <View style={[styles.TitleContainer]}>
            <Text style={[styles.title]}>{place.placeName}</Text>
            <Pressable
              style={[styles.savePlacebtn]}
              onPress={onCardClickHandler}>
              <Image
                style={[
                  styles.savePlaceIcon,
                  isSaved && {tintColor: '#FFC000'},
                ]}
                source={GlobalImages.bookmarkIcon}
              />
            </Pressable>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Text style={[styles.textM]}>Rating : </Text>
            <Text style={[styles.textM]}>{place.rating}</Text>
            <Image source={GlobalImages.starIcon} />
          </View>
          <View style={[styles.descriptionContainer]}>
            <Text style={[styles.title1]}>Description</Text>
            <Text style={[styles.descriptionText]}>{place.description}</Text>
          </View>
          <FullWidthBtn
            onPress={() => {
              console.log('TEST');
              navigation.navigate('PlaceOrder', {
                place: place,
              });
            }}
            rippleColor={GlobalColors.lightColor2}
            label={`Go For Trip`}
            containerStyle={{
              backgroundColor: GlobalColors.primaryColor,
              opacity: 0.7,
              marginTop: 30,
              width: '100%',
            }}
            labelStyle={{color: GlobalColors.lightColor1}}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default PlaceDetailScreen;

const styles = StyleSheet.create({
  mainContainer: {
    marginVertical: 10,
    paddingBottom: 80,
  },
  TitleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: GlobalColors.darkColor2,
  },
  title1: {
    fontSize: 15,
    fontWeight: 'bold',
    color: GlobalColors.darkColor2,
    marginBottom: 5,
  },
  textM: {
    fontSize: 15,
  },
  savePlacebtn: {
    backgroundColor: GlobalColors.greyShade1,
    opacity: 0.5,
    padding: 5,
    borderRadius: 8,
  },
  savePlaceIcon: {
    borderRadius: 8,
    overflow: 'hidden',
  },
  descriptionContainer: {
    marginVertical: 10,
    marginTop: 20,
  },
  descriptionText: {
    fontSize: 15,
    textAlign: 'left',
  },
});
