import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
  Image,
} from 'react-native';
import React, {useState, useCallback} from 'react';
import DocumentPicker, {types} from 'react-native-document-picker';
import DatePicker from 'react-native-date-picker';

import GlobalImages from '../../GlobalImages/GlobalImages';
import GlobalStyles from '../../GlobalStyles/styles';
import GlobalColors from '../../GlobalStyles/colors';

/*

@ props 

- placeholder 
- secureTextEntry
- onChangeText
- value
- onDocumentSelect(response) and docTypes  for document
- heightForMultiLineText 
- onDateChange(date)
- all Other TextInput attributes


*/

const GenericInput = props => {
  const [showPassword, setShowPassword] = useState(false);
  const [fileResponse, setFileResponse] = useState();
  const [date, setDate] = useState(new Date());
  const [openDateModal, setOpenDateModal] = useState(false);

  const handleDocumentSelection = useCallback(async () => {
    try {
      const response = await DocumentPicker.pick({
        presentationStyle: 'fullScreen',
        type: props.docTypes,
      });
      setFileResponse(response);
      console.log(response);
      props.onDocumentSelect(response);
    } catch (err) {
      console.warn(err);
    }
  }, []);

  const getInputField = type => {
    if (type === 'TEXT') {
      return (
        <View style={GlobalStyles.inputContainer}>
          <TextInput
            style={[GlobalStyles.input]}
            placeholder="Enter Text"
            secureTextEntry={false}
            {...props}
          />
        </View>
      );
    } else if (type === 'NUMBER') {
      return (
        <View style={GlobalStyles.inputContainer}>
          <TextInput
            style={[GlobalStyles.input]}
            placeholder="Enter Number"
            secureTextEntry={false}
            keyboardType={`number-pad`}
            {...props}
          />
        </View>
      );
    } else if (type === 'DOUBLE') {
      return (
        <View style={GlobalStyles.inputContainer}>
          <TextInput
            style={[GlobalStyles.input]}
            placeholder="Enter Number"
            secureTextEntry={false}
            keyboardType={`decimal-pad`}
            {...props}
          />
        </View>
      );
    } else if (type === 'PHONE_NUMBER') {
      return (
        <View style={GlobalStyles.inputContainer}>
          <TextInput
            style={[GlobalStyles.input]}
            placeholder="Enter Phone Number"
            secureTextEntry={false}
            keyboardType={`number-pad`}
            maxLength={10}
            {...props}
          />
        </View>
      );
    } else if (type === 'PASSWORD') {
      return (
        <View style={[GlobalStyles.inputContainer]}>
          <TextInput
            style={[GlobalStyles.input]}
            placeholder="Enter Password"
            secureTextEntry={!showPassword}
            {...props}
          />
          <Pressable
            onPress={() => {
              setShowPassword(prev => !prev);
            }}>
            <Image source={GlobalImages.eyeIcon} style={{marginRight: 10}} />
          </Pressable>
        </View>
      );
    } else if (type === 'MULTI_LINE_TEXT') {
      let height = 100;
      if (props.heightForMultiLineText) {
        height = props.heightForMultiLineText;
      }
      return (
        <View style={GlobalStyles.inputContainer}>
          <TextInput
            style={[GlobalStyles.input]}
            placeholder="Enter Multi Line Text"
            secureTextEntry={false}
            {...props}
          />
        </View>
      );
    } else if (type === 'DOCUMENT') {
      return (
        <View style={[GlobalStyles.inputContainer]}>
          <TextInput
            style={[GlobalStyles.input]}
            placeholder="Select Document"
            editable={false}
            value={fileResponse && fileResponse[0].name}
            {...props}
          />
          <Pressable
            onPress={() => {
              handleDocumentSelection();
            }}>
            <Image
              source={{
                uri: `https://img.icons8.com/ios-filled/50/EBEBEB/send-letter--v1.png`,
              }}
              style={{
                marginRight: 10,
                width: 20,
                height: 22,
                resizeMode: 'cover',
                tintColor: '#9E9E9E',
              }}
            />
          </Pressable>
        </View>
      );
    } else if (type === 'DATE') {
      return (
        <>
          <Pressable
            style={GlobalStyles.inputContainer}
            onPress={() => {
              setOpenDateModal(true);
            }}>
            <TextInput
              style={[GlobalStyles.input]}
              placeholder="Enter Date"
              value={date.toISOString()}
              editable={false}
              secureTextEntry={false}
              {...props}
            />
          </Pressable>
          <DatePicker
            modal
            open={openDateModal}
            date={date}
            onConfirm={date => {
              setOpenDateModal(false);
              setDate(date);
              console.log(date);
              props.onDateChange(date);
            }}
            onCancel={() => {
              setOpenDateModal(false);
            }}
          />
        </>
      );
    }
  };
  let Input = getInputField(props.type);
  return <>{Input}</>;
};

export default GenericInput;

const styles = StyleSheet.create({});
