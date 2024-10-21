// App.js
import React, { useState } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { TextInput, Button, Card, Title, Paragraph } from 'react-native-paper';
import { Picker } from '@react-native-picker/picker';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Singup = () => {
  const [formData, setFormData] = useState({
    name: '',
    fatherName: '',
    dob: '',
    address: '',
    contactNumber: '',
    email: '',
    category: '',
    distributorshipType: '',
    landDetails: '',
    financialStatus: '',
  });

  const handleInputChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    // Handle the form submission
    console.log('Form Data Submitted:', formData);
  };

  return (
    <ScrollView style={styles.container}>
      <Card style={styles.card}>
        <Card.Content>
          <Title style={styles.title}>LPG Distributorship Application</Title>
          <Paragraph style={styles.subTitle}>Fill out the form below to apply for an LPG distributorship.</Paragraph>
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
          theme={{ roundness: 18 }}
          contentStyle={{ paddingLeft: 5 }}
        />

        <TextInput
          label="Father's/Spouse's Name"
          mode="outlined"
          value={formData.fatherName}
          onChangeText={(value) => handleInputChange('fatherName', value)}
          left={<TextInput.Icon name="account" />}
          style={styles.input}
          theme={{ roundness: 18 }}
        />

        <TextInput
          label="Date of Birth"
          mode="outlined"
          value={formData.dob}
          onChangeText={(value) => handleInputChange('dob', value)}
          left={<TextInput.Icon name="calendar-today" />}
          style={styles.input}
          theme={{ roundness: 18 }}
        />

        <TextInput
          label="Address"
          mode="outlined"
          value={formData.address}
          onChangeText={(value) => handleInputChange('address', value)}
          left={<TextInput.Icon name="home" />}
          style={styles.input}
          theme={{ roundness: 18 }}
        />

        <TextInput
          label="Contact Number"
          mode="outlined"
          keyboardType="phone-pad"
          value={formData.contactNumber}
          onChangeText={(value) => handleInputChange('contactNumber', value)}
          left={<TextInput.Icon name="phone" />}
          style={styles.input}
          theme={{ roundness: 18 }}
        />

        <TextInput
          label="Email"
          mode="outlined"
          keyboardType="email-address"
          value={formData.email}
          onChangeText={(value) => handleInputChange('email', value)}
          left={<TextInput.Icon name="email" />}
          style={styles.input}
          theme={{ roundness: 18 }}
        />

        {/* Category Picker */}
        <View style={{ borderRadius: 16, overflow: 'hidden', borderWidth: 1, borderColor: '#ccc',marginBottom: 15, }}>
          <Picker
            selectedValue={formData.category}
            onValueChange={(value) => handleInputChange('category', value)}
            style={styles.picker}>
            <Picker.Item label="Select Category" value="" />
            <Picker.Item label="SC" value="SC" />
            <Picker.Item label="ST" value="ST" />
            <Picker.Item label="OBC" value="OBC" />
            <Picker.Item label="General" value="General" />
          </Picker>
        </View>
        <TextInput
          label="Type of Distributorship"
          mode="outlined"
          value={formData.distributorshipType}
          onChangeText={(value) => handleInputChange('distributorshipType', value)}
          left={<TextInput.Icon name="store" />}
          style={styles.input}
          theme={{ roundness: 18 }}
        />

        <TextInput
          label="Land Details"
          mode="outlined"
          value={formData.landDetails}
          onChangeText={(value) => handleInputChange('landDetails', value)}
          left={<TextInput.Icon name="map" />}
          style={styles.input}
          theme={{ roundness: 18 }}
        />

        <TextInput
          label="Financial Status"
          mode="outlined"
          value={formData.financialStatus}
          onChangeText={(value) => handleInputChange('financialStatus', value)}
          left={<TextInput.Icon name="currency-usd" />}
          style={styles.input}
          theme={{ roundness: 18 }}
        />
      </View>

      <Button
        mode="contained"
        onPress={handleSubmit}
        icon="send"
        style={styles.submitButton}
      >
        Submit Application
      </Button>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    display:'flex',
    paddingTop: 40,
    rowGap:25,
    fontWeight: 100,
    padding:16
  },
  card: {
    marginBottom: 20,
    textAlign:'center'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subTitle:{
    textAlign: 'center'
  },
  inputContainer: {
    marginVertical: 10,
  },
  input: {
    marginBottom: 15,
    borderRadius: 16,
    marginLeft:5
  },
  picker: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 16,
  },
  submitButton: {
    marginTop: 20,
    paddingVertical: 10,
  },
});

export default Singup;
