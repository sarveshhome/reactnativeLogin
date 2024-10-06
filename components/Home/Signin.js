import React, {useState} from 'react';
import {
  Alert,
  Button,
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Switch,
  Text,
  TextInput,
  View,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import styles from './style';
const logo = require('../../assets/images/logo.png');
const facebook = require('../../assets/images/facebook.png');
const linkedin = require('../../assets/images/linkedin.png');

export default function LoginForm() {
  const [click, setClick] = useState(false);
  const navigation = useNavigation();
  const {username, setUsername} = useState('');
  const {password, setPassword} = useState('');

  const signInHandler = () => {
    console.log(formData);
    navigation.navigate('Dashboard');
  };

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contact: '',
    address: '',
    username: '',
    password: '',
  });

  const handleInputChange = (key, value) => {

    console.log(key, value);
    setFormData({
      ...formData,
      [key]: value,
    });
  };
  
  return (
    <SafeAreaView style={styles.container}>
      <Image source={logo} style={styles.image} resizeMode="contain" />
      <Text style={styles.title}>Login</Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.input}
          placeholder="EMAIL OR USERNAME"
          value={username}
          onChangeText={(value) => handleInputChange('username', value)}
          autoCorrect={false}
          autoCapitalize="none"
        />
        <TextInput
          style={styles.input}
          placeholder="PASSWORD"
          secureTextEntry
          value={password}
          onChangeText={(value) => handleInputChange('password', value)}
          autoCorrect={false}
          autoCapitalize="none"
        />
      </View>
      <View style={styles.rememberView}>
        <View style={styles.switch}>
          <Switch
            value={click}
            onValueChange={setClick}
            trackColor={{true: 'green', false: 'gray'}}
          />
          <Text style={styles.rememberText}>Remember Me</Text>
        </View>
        <View>
          <Pressable onPress={() => Alert.alert('Forget Password!')}>
            <Text style={styles.forgetText}>Forgot Password?</Text>
          </Pressable>
        </View>
      </View>

      <View style={styles.buttonView}>
        <Pressable style={styles.button} onPress={signInHandler}>
          <Text style={styles.buttonText}>LOGIN</Text>
        </Pressable>
        <Text style={styles.optionsText}>OR LOGIN WITH</Text>
      </View>

      <View style={styles.mediaIcons}>
        <Image source={facebook} style={styles.icons} />
        <Image source={linkedin} style={styles.icons} />
      </View>

      <Text style={styles.footerText}>
        Don't Have Account?<Text style={styles.signup}> Sign Up</Text>
      </Text>
    </SafeAreaView>
  );
}
