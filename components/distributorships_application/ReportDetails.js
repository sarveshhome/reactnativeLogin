// ReportDetails.js
import React, { useState } from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';
import { TextInput, Button, Card, Title, Paragraph } from 'react-native-paper';
import { Picker } from '@react-native-picker/picker';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation
import Icon from 'react-native-vector-icons/MaterialIcons';

const ReportDetails = () => {
  const [formData, setFormData] = useState({
    name: '',
    fatherName: '',
    address: '',
    contactNumber: '',
    email: '',
    category: '',
    reportDetails: '',
  });

  const navigation = useNavigation(); // Initialize navigation

  const handleInputChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    navigation.navigate('ConfirmationScreen', { formData }); // Navigate with data
  };

  return (
    <ScrollView style={styles.container}>
      <Card style={styles.card}>
        <Card.Content>
          <Title style={styles.title}>LPG Distributorship Report Details</Title>
          <Paragraph>Provide your report details below:</Paragraph>
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
        />
        
        {/* ... other input fields ... */}

        <Button
          mode="contained"
          onPress={handleSubmit}
          icon="send"
          style={styles.submitButton}
        >
          Submit Report
        </Button>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f4f4f4',
  },
  card: {
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  inputContainer: {
    marginVertical: 10,
  },
  input: {
    marginBottom: 15,
  },
  submitButton: {
    marginTop: 20,
    paddingVertical: 10,
  },
});

export default ReportDetails;
