import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet,Pressable } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Singup from './Singup';
import Signin from './Singin';

const Stack = createStackNavigator();
const AuthForm = () => {
  const [isSignIn, setIsSignIn] = useState(true);

  const toggleForm = () => {
    setIsSignIn(!isSignIn);
  };

  return (
    <View style={styles.container}>
     
      {/* Form fields for either sign in or sign up */}
      <View style={styles.form}>
        {isSignIn ? <Signin /> : <Singup />}
      </View>
      <View style={styles.footerText}>
        <Pressable style={styles.footerText} onPress={toggleForm}>
          <Text style={styles.signup}>{isSignIn ? 'Don\'t have account Sign Up' : 'Sign In'}</Text>
        </Pressable>
      </View>
      </View>
  );
};

const styles = StyleSheet.create({
  container: { 
    display:'flex',
    justifyContent: 'center',
    // alignItems: 'center',
    // padding: 20,
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
  buttonView :{
    width :"100%",
    paddingHorizontal : 50
  },
  button : {
    backgroundColor : "blue",
    height : 45,
    borderColor : "gray",
    borderWidth  : 1,
    borderRadius : 5,
    alignItems : "center",
    justifyContent : "center"
  },
  buttonText : {
    color : "white"  ,
    fontSize: 18,
    fontWeight : "bold"
  },
  footerText : {
    alignItems: "center",
    color : "gray",
    display:'flex',
    alignItems:"center"
  },
  signup : {
    color : "red",
  }
});

export default AuthForm;
