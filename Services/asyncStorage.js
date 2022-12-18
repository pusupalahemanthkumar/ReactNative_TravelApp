import AsyncStorage from '@react-native-async-storage/async-storage';

const storeData = async (key, value) => {
  try {
    let data = JSON.stringify(value);
    console.log(data);
    await AsyncStorage.setItem(key, data);
  } catch (e) {
    console.log(e);
  }
};

const getData = async key => {
  try {
    const value = await AsyncStorage.getItem(key);
    console.log(value);
    return JSON.parse(value);
  } catch (e) {
    console.log(e);
  }
};

const removeValue = async (key) => {
  try {
    await AsyncStorage.removeItem(key)
  } catch(e) {
    console.log(e);
  }

}

export {storeData , getData, removeValue } ;