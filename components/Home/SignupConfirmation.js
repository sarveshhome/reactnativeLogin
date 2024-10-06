// ConfirmationScreen.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';

const ConfirmationScreen = ({ route }) => {
  const { formData } = route.params; // Get the submitted data

  return (
    <View style={styles.container}>
      <Card>
        <Card.Content>
          <Title>Submitted Report Details</Title>
          <Paragraph>Name: {formData.name}</Paragraph>
          <Paragraph>Father's/Spouse's Name: {formData.fatherName}</Paragraph>
          <Paragraph>Address: {formData.address}</Paragraph>
          <Paragraph>Contact Number: {formData.contactNumber}</Paragraph>
          <Paragraph>Email: {formData.email}</Paragraph>
          <Paragraph>Category: {formData.category}</Paragraph>
          <Paragraph>Report Details: {formData.reportDetails}</Paragraph>
        </Card.Content>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f4f4f4',
  },
});

export default ConfirmationScreen;
