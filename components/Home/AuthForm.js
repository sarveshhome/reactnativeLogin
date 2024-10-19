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
      <View style={styles.buttonView}>
        <Pressable style={styles.button} onPress={toggleForm}>
          <Text style={styles.buttonText}>{isSignIn ? 'Sign Up' : 'Sign In'}</Text>
        </Pressable>
      </View>
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display:'flex'
    // justifyContent: 'center',
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
    width :"30%",
    paddingHorizontal : 10,
    //button center
    justifyContent:'center' 

  },
  button : {
    backgroundColor: 'blue', // Example background color
    paddingHorizontal: 20, // Adjust horizontal padding
    paddingVertical: 10,   // Adjust vertical padding
    borderRadius: 5,  
    justifyContent:'center'
  },
  buttonText : {
    color: 'white',
    fontSize: 16,           // Adjust font size
    fontWeight: 'bold',  
  },
});

export default AuthForm;