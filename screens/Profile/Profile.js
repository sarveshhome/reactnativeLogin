import React from 'react';
import {SafeAreaView, Text, TouchableOpacity, FlatList, View, StyleSheet} from 'react-native';
import globalStyle from '../../assets/styles/globalStyle';

// Sample data of gas distribution centers
const gasDistributionCenters = [
  { id: '1', name: 'City Gas Distribution', location: 'New York', contact: '123-456-7890' },
  { id: '2', name: 'State Gas Services', location: 'California', contact: '987-654-3210' },
  { id: '3', name: 'Metro Gas Supply', location: 'Texas', contact: '555-123-4567' },
  { id: '4', name: 'Regional Gas Distributors', location: 'Florida', contact: '444-888-7777' },
];

const Profile = ({navigation}) => {

  // Function to render each item in the FlatList
  const renderItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => navigation.navigate('Detail', { item })} // Navigate to detail screen with item data
    >
      <View style={styles.itemContainer}>
        <Text style={styles.itemName}>{item.name}</Text>
        <Text style={styles.itemLocation}>Location: {item.location}</Text>
        <Text style={styles.itemContact}>Contact: {item.contact}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={{color: 'blue', marginBottom: 20}}>Go Back</Text>
      </TouchableOpacity>

      <Text style={{fontSize: 20, marginBottom: 20}}>Welcome to profile page</Text>

      {/* Gas Distribution List */}
      <FlatList
        data={gasDistributionCenters}
        keyExtractor={item => item.id}
        renderItem={renderItem}
      />
    </SafeAreaView>
  );
};

// Additional styles for the FlatList
const styles = StyleSheet.create({
  itemContainer: {
    padding: 15,
    marginBottom: 10,
    backgroundColor: '#ffffff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  itemName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  itemLocation: {
    fontSize: 14,
    color: '#555',
  },
  itemContact: {
    fontSize: 14,
    color: '#555',
  },
});

export default Profile;
