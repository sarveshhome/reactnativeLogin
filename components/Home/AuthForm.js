import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import Singup from './Singup';
import Signin from './Singin';

const AuthForm = () => {
  const [isSignIn, setIsSignIn] = useState(true);

  const toggleForm = () => {
    setIsSignIn(!isSignIn);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {isSignIn ? 'Sign In' : 'Sign Up'}
      </Text>
      {/* Form fields for either sign in or sign up */}
      <View style={styles.form}>
        {isSignIn ? <Signin /> : <Singup />}
      </View>
      <Button title={isSignIn ? 'Sign Up' : 'Sign In'} onPress={toggleForm} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  form: {
    width: '100%',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
  },
});

export default AuthForm;