import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import Separator from '../components/Separator';
import SocialButtons from '../components/SocialButtons';
import React, { useState } from 'react';

const LoginScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleNameChange = (text) => {
    setName(text);
  };

  const handleEmailChange = (text) => {
    setEmail(text);
  };

  const handleLogin = () => {
    if (!validateName(name)) {
      Alert.alert('Invalid Name', 'Please enter a valid name.');
      return;
    }
    if (!validateEmail(email)) {
      Alert.alert('Invalid Email', 'Please enter a valid email address.');
      return;
    }

    navigation.navigate('Home', { name, email });
  };

  const validateName = (name) => {
    return name.trim().length >= 2;
  };

  const validateEmail = (email) => {
    const regex = /\S+@\S+\.\S+/;
    return regex.test(email);
  };

  return (
    <View style={styles.container}>
      <View style={styles.introArea}>
        <Text style={styles.userName}>Jobizz</Text>
        <Text style={styles.greeting}>Welcome Back 👋</Text>
        <Text style={styles.todo}>Let's log in. Apply to jobs!</Text>
      </View>

      <View style={styles.formArea}>
        <TextInput
          style={styles.input}
          placeholder="Name"
          value={name}
          onChangeText={handleNameChange}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          keyboardType="email-address"
          autoCapitalize="none"
          value={email}
          onChangeText={handleEmailChange}
        />

        <TouchableOpacity style={styles.btn} onPress={handleLogin}>
          <Text style={styles.btnText}>Log in</Text>
        </TouchableOpacity>
      </View>

      <Separator />
      <SocialButtons />

      <View style={styles.qst}>
        <Text style={styles.qstMain}>
          Haven't an account?
          <Text style={styles.qstReg}> Register</Text>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafd',
    padding: 16,
  },

  introArea: {
    marginTop: 90,
    marginBottom: 60,
  },

  userName: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#356899',
    paddingBottom: 5,
  },

  greeting: {
    fontSize: 30,
    fontWeight: 'bold',
    paddingBottom: 5,
  },

  todo: {
    color: '#878787',
    fontSize: 17,
  },

  formArea: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  input: {
    height: 50,
    width: '100%',
    borderColor: '#AFB0B6',
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 12,
    padding: 10,
  },

  btn: {
    height: 50,
    width: '100%',
    backgroundColor: '#356899',
    borderRadius: 10,
    marginBottom: 12,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },

  btnText: {
    color: '#fafafd',
    fontSize: 17,
  },

  qst: {
    margin: 'auto',
  },

  qstMain: {
    color: '#A9A9A9',
  },

  qstReg: {
    color: '#356899',
  },
});

export default LoginScreen;
