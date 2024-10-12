import React from 'react';
import { SafeAreaView, Text, StyleSheet } from 'react-native';

const Detail = ({ route, navigation }) => {
  const { item } = route.params; // Access the item data passed from the Profile screen

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Gas Distribution Details</Text>
      <Text style={styles.detail}>Name: {item.name}</Text>
      <Text style={styles.detail}>Location: {item.location}</Text>
      <Text style={styles.detail}>Contact: {item.contact}</Text>

      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Text style={{ color: 'blue' }}>Go Back</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  detail: {
    fontSize: 18,
    marginBottom: 10,
  },
  backButton: {
    marginTop: 20,
  },
});

export default Detail;
