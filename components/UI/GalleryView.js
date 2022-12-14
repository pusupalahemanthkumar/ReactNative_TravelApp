import {
  StyleSheet,
  Text,
  View,
  Animated,
  Pressable,
  FlatList,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React, {useState, useEffect, useRef} from 'react';

import GlobalImages from '../../GlobalImages/GlobalImages';
import GlobalStyles from '../../GlobalStyles/styles';
import GlobalColors from '../../GlobalStyles/colors';

const {width, height} = Dimensions.get('window');
const IMAGE_SIZE = 50;
const SPACING = 10;

const DATA = [
  {
    id: '1',
    imageUrl:
      'https://images.unsplash.com/photo-1667725050234-f38c2a54725d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
  },
  {
    id: '2',
    imageUrl:
      'https://images.unsplash.com/photo-1656392022643-11e2ad8f6d95?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
  },
  {
    id: '3',
    imageUrl:
      'https://images.unsplash.com/photo-1668420899266-27476b9e8d35?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
  },
  {
    id: '4',
    imageUrl:
      'https://images.unsplash.com/photo-1668894210482-e05017568b11?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
  },
  {
    id: '5',
    imageUrl:
      'https://images.unsplash.com/photo-1669130950037-3d33bd490971?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=327&q=80',
  },
  {
    id: '6',
    imageUrl:
      'https://images.unsplash.com/photo-1664543554703-f429d8bc31de?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=385&q=80',
  },
  {
    id: '7',
    imageUrl:
      'https://images.unsplash.com/photo-1660299868353-1850e0194588?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=389&q=80',
  },
  {
    id: '8',
    imageUrl:
      'https://images.unsplash.com/photo-1664477900445-90785883aaf6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=385&q=80',
  },
  {
    id: '9',
    imageUrl:
      'https://images.unsplash.com/photo-1668957065541-d1af07128bd1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=407&q=80',
  },
  {
    id: '10',
    imageUrl:
      'https://images.unsplash.com/photo-1669140936835-1b2a71f91219?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80',
  },
  {
    id: '11',
    imageUrl:
      'https://images.unsplash.com/photo-1668615561048-7df2e1462ee9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80',
  },
  {
    id: '12',
    imageUrl:
      'https://images.unsplash.com/photo-1668770235702-44e39f4dfdb1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
  },
  {
    id: '13',
    imageUrl:
      'https://images.unsplash.com/photo-1668961197427-c82f80bc63a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
  },
  {
    id: '14',
    imageUrl:
      'https://images.unsplash.com/photo-1669156130305-2104f8c246a6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=415&q=80',
  },
  {
    id: '15',
    imageUrl:
      'https://images.unsplash.com/photo-1669544695426-88d5bac4fc3b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
  },
  {
    id: '16',
    imageUrl:
      'https://images.unsplash.com/photo-1669811241780-218e5ac908ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
  },
  {
    id: '17',
    imageUrl:
      'https://images.unsplash.com/photo-1669651567608-6a5ceb13845b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=327&q=80',
  },
  {
    id: '18',
    imageUrl:
      'https://images.unsplash.com/photo-1669542873056-bea5d94ea6b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
  },
  {
    id: '19',
    imageUrl:
      'https://images.unsplash.com/photo-1669824598488-7b7c43f8ac99?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
  },
  {
    id: '20',
    imageUrl:
      'https://images.unsplash.com/photo-1669839556036-ba8316adba5f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
  },
];

const GalleryView = props => {
  const [images, setImages] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const topRef = useRef();
  const thumbRef = useRef();

  const scrollToActiveIndex = index => {
    setActiveIndex(index);
    topRef?.current?.scrollToOffset({
      offset: index * width,
      animated: true,
    });
    if (index * (IMAGE_SIZE + SPACING) - IMAGE_SIZE / 2 > width / 2) {
      thumbRef?.current?.scrollToOffset({
        offset: index * (IMAGE_SIZE + SPACING) - width / 2 + IMAGE_SIZE / 2,
        animated: true,
      });
    } else {
      thumbRef?.current?.scrollToOffset({
        offset: 0,
        animated: true,
      });
    }
  };
  return (
    <View style={styles.container}>
      <FlatList
        ref={topRef}
        data={props.images}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={ev => {
          console.log(Math.floor(ev.nativeEvent.contentOffset.x / width));
          const slideSize = ev.nativeEvent.layoutMeasurement.width;
          scrollToActiveIndex(
            Math.floor(ev.nativeEvent.contentOffset.x / slideSize),
          );
        }}
        renderItem={({item}) => {
          return (
            <View style={{width, height: 600}}>
              <Image
                source={{uri: item}}
                style={[
                  StyleSheet.absoluteFill,
                  {borderBottomLeftRadius: 20, borderBottomRightRadius: 20},
                ]}
              />
            </View>
          );
        }}
      />
      <FlatList
        ref={thumbRef}
        data={props.images}
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{
          position: 'absolute',
          top: 530,
        }}
        renderItem={({item, index}) => {
          return (
            <TouchableOpacity onPress={() => scrollToActiveIndex(index)}>
              <Image
                source={{uri: item}}
                style={[
                  {
                    width: IMAGE_SIZE,
                    height: IMAGE_SIZE,
                    borderRadius: 12,
                    marginRight: SPACING,
                    borderWidth: 2,
                    borderColor: activeIndex === index ? '#fff' : 'transparent',
                  },
                ]}
              />
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

export default GalleryView;

const styles = StyleSheet.create({
  container: {
    height: 600,
  },
});
