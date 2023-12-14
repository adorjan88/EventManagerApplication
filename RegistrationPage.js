import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TextInput, Button, RadioButton } from 'react-native-paper';

const RegistrationPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [userType, setUserType] = useState('user');
  const [supporterType, setSupporterType] = useState('');

  const handleSignIn = () => {
    console.log('Username:', username);
    console.log('Password:', password);
    console.log('User Type:', userType);
  };

  const renderSupporterOptions = () => {
    if (userType === 'supporter') {
      return (
        <>
          <RadioButton.Item
            label="Gold"
            value="gold"
            status={supporterType === 'gold' ? 'checked' : 'unchecked'}
            onPress={() => setSupporterType('gold')}
          />
          <RadioButton.Item
            label="Silver"
            value="silver"
            status={supporterType === 'silver' ? 'checked' : 'unchecked'}
            onPress={() => setSupporterType('silver')}
          />
          <RadioButton.Item
            label="Bronze"
            value="bronze"
            status={supporterType === 'bronze' ? 'checked' : 'unchecked'}
            onPress={() => setSupporterType('bronze')}
          />
        </>
      );
    }
    return null;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Registration</Text>
      <TextInput
        label="Username"
        value={username}
        onChangeText={(text) => setUsername(text)}
        style={styles.input}
      />
      <TextInput
        label="Password"
        value={password}
        secureTextEntry
        onChangeText={(text) => setPassword(text)}
        style={styles.input}
      />
      <View style={styles.radioGroup}>
        <RadioButton.Item
          label="Participant"
          value="participant"
          status={userType === 'participant' ? 'checked' : 'unchecked'}
          onPress={() => setUserType('participant')}
        />
        <RadioButton.Item
          label="Lecturer"
          value="lecturer"
          status={userType === 'lecturer' ? 'checked' : 'unchecked'}
          onPress={() => setUserType('lecturer')}
        />
        <RadioButton.Item
          label="Supporter"
          value="supporter"
          status={userType === 'supporter' ? 'checked' : 'unchecked'}
          onPress={() => setUserType('supporter')}
        />
      </View>
      {renderSupporterOptions()}
      <Button mode="contained" onPress={handleSignIn} style={styles.button}>
        Sign Up
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  input: {
    marginVertical: 8,
  },
  radioGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginVertical: 8,
  },
  button: {
    marginTop: 16,
  },
});

export default RegistrationPage;