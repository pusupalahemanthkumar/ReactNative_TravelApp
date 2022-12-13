import {StyleSheet, Text, View, TextInput , Pressable, Image} from 'react-native';
import React, {useState} from 'react';

import GlobalImages from '../../GlobalImages/GlobalImages';
import GlobalStyles from '../../GlobalStyles/styles';
import GlobalColors from '../../GlobalStyles/colors';

/*

@ props 

- placeholder 
- secureTextEntry
- onChangeText
- value
- all Other TextInput attributes


*/

const GenericInput = props => {
  const [showPassword, setShowPassword] = useState(false);

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
      return (
        <View style={GlobalStyles.inputContainer}>
          <TextInput
            style={[GlobalStyles.input, {textAlignVertical: 'top'}]}
            placeholder="Enter Multi Line Text"
            secureTextEntry={false}
            multiline
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
    }
  };
  let Input = getInputField(props.type);
  return (
    <>
     {Input}
    </>
  )
};

export default GenericInput;

const styles = StyleSheet.create({});
