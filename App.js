import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';
import HomeComponent from "./HomeComponent"
import { useNavigation } from '@react-navigation/native';

export default function App() {
  
  const [inputText, setInputText] = useState('');
  
  //gombnyomás teszt
  const handleButtonPress = () => {
    Alert.alert('Sign In', 'Debugged');
  };

  const handleButtonPressSkip = () => {
    navigation.navigate(HomeComponent)
  };

  return (
    <View style={styles.container}>
      <Text>Event Manager Application</Text>
      <TextInput
        style={styles.textInput}
        placeholder="Email"
        onChangeText={(text) => setInputText(text)}
        value={inputText}
      />
      <TextInput
        style={styles.textInput}
        placeholder="Password"
        onChangeText={(text) => setInputText(text)}
        value={inputText}
      />
      
      <View style={styles.buttonContainer}>
        <Button title="Sign in" onPress={handleButtonPress} />
      </View>

      <View style={styles.buttonContainer}>
        <Button 
          title="SKIP"
        >

        </Button>
      </View>

      <View style={styles.buttonContainer}>
        <Button title="Sign up"/>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    width: '80%',
    paddingHorizontal: 10,
    marginTop: 20,
  },
  buttonContainer: {
    marginTop: 20,
  },
  
});