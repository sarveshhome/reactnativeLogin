import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import { TextInput, Button, Card, Title, Paragraph } from 'react-native-paper';

const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    dob: '',
    address: '',
    contactNumber: '',
    email: '',
    category: '',
  });

  const handleInputChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    console.log('Form Data Submitted:', formData);
  };

  return (
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Card style={styles.card}>
          <Card.Content>
            <Title style={styles.title}>LPG Distributorship Application</Title>
            <Paragraph style={styles.subtitle}>
              Fill out the form below to apply for an LPG distributorship.
            </Paragraph>
          </Card.Content>
        </Card>

        <View style={styles.inputContainer}>
          <TextInput
            label="Name"
            mode="outlined"
            value={formData.name}
            onChangeText={(value) => handleInputChange('name', value)}
            left={<TextInput.Icon name="account" />}
            style={styles.input}
            outlineColor="#b0bec5"
            activeOutlineColor="#1976d2"
          />

          <TextInput
            label="Date of Birth"
            mode="outlined"
            value={formData.dob}
            onChangeText={(value) => handleInputChange('dob', value)}
            left={<TextInput.Icon name="calendar-today" />}
            style={styles.input}
            outlineColor="#b0bec5"
            activeOutlineColor="#1976d2"
          />

          <TextInput
            label="Address"
            mode="outlined"
            value={formData.address}
            onChangeText={(value) => handleInputChange('address', value)}
            left={<TextInput.Icon name="home" />}
            style={styles.input}
            outlineColor="#b0bec5"
            activeOutlineColor="#1976d2"
          />

          <TextInput
            label="Contact Number"
            mode="outlined"
            keyboardType="phone-pad"
            value={formData.contactNumber}
            onChangeText={(value) => handleInputChange('contactNumber', value)}
            left={<TextInput.Icon name="phone" />}
            style={styles.input}
            outlineColor="#b0bec5"
            activeOutlineColor="#1976d2"
          />

          <TextInput
            label="Email"
            mode="outlined"
            keyboardType="email-address"
            value={formData.email}
            onChangeText={(value) => handleInputChange('email', value)}
            left={<TextInput.Icon name="email" />}
            style={styles.input}
            outlineColor="#b0bec5"
            activeOutlineColor="#1976d2"
          />
        </View>

        <Button
          mode="contained"
          onPress={handleSubmit}
          style={styles.submitButton}
          contentStyle={styles.submitButtonContent}
          labelStyle={styles.submitButtonLabel}
        >
          Sign Up
        </Button>
      </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f6f8',
  },
  scrollContent: {
    padding: 20,
  },
  card: {
    marginBottom: 20,
    backgroundColor: '#e3f2fd',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#1976d2',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 15,
    color: '#455a64',
    textAlign: 'center',
    marginTop: 5,
  },
  inputContainer: {
    marginVertical: 10,
  },
  input: {
    marginBottom: 15,
    backgroundColor: '#fff',
    borderRadius: 8,
  },
  submitButton: {
    marginTop: 25,
    borderRadius: 8,
    alignSelf: 'center',
    backgroundColor: '#1976d2',
    width: '80%',
  },
  submitButtonContent: {
    paddingVertical: 8,
  },
  submitButtonLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
  },
});

export default Signup;
