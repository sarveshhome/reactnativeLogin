import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaView, FlatList, View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import globalStyle from '../../assets/styles/globalStyle';
import Header from './Header';
import ViewDetails from './ViewDetails';

const ProfileStack = createStackNavigator();

// Sample data for gas distribution centers
const gasDistributionCenters = [
  { id: '1', name: 'City Gas', location: 'New York', contact: '123-456-7890', image: require('../../assets/images/gas-station1.jpg') },
  { id: '2', name: 'State Gas Services', location: 'California', contact: '987-654-3210', image: require('../../assets/images/gas-station2.jpg') },
  { id: '3', name: 'Metro Gas Supply', location: 'Texas', contact: '555-123-4567', image: require('../../assets/images/gas-station3.jpg') },
  { id: '4', name: 'Regional Gas', location: 'Florida', contact: '444-888-7777', image: require('../../assets/images/gas-station4.jpg') },
];


const ProfileList = ({ navigation }) => {
  // Render each gas distribution center as a card
  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('ViewDetails', { item })}>
      <Image source={item.image} style={styles.cardImage} />
      <View style={styles.cardContent}>
        <View>
          <Text style={styles.cardTitle}>{item.name}</Text>
          <Text style={styles.cardLocation}>📍 {item.location}</Text>
          <Text style={styles.cardContact}>☎️ {item.contact}</Text>
        </View>
        <View style={styles.cardButtonContainer}>
          <TouchableOpacity
            onPress={() => navigation.navigate('ViewDetails', { item })} // Navigate to ViewDetails
            style={styles.cardButton}
          >
            <Text style={styles.cardButtonText}>View Details</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <FlatList
      data={gasDistributionCenters}
      keyExtractor={item => item.id}
      renderItem={renderItem}
      numColumns={2} // Display items in two columns
      columnWrapperStyle={styles.columnWrapper}
      contentContainerStyle={styles.flatListContainer}
      showsVerticalScrollIndicator={false}
    />
  );
};

// Profile page component
const Profile = ({ navigation }) => {
  // Render each gas distribution center as a card
  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Detail', { item })}>
      <Image source={item.image} style={styles.cardImage} />
      <View style={styles.cardContent}>
        <Text style={styles.cardTitle}>{item.name}</Text>
        <Text style={styles.cardLocation}>📍 {item.location}</Text>
        <Text style={styles.cardContact}>☎️ {item.contact}</Text>
        <View style={styles.cardButtonContainer}>
          <TouchableOpacity
            onPress={() => navigation.navigate('ViewDetails', { item })} // Navigate to ViewDetails
            style={styles.cardButton}
          >
            <Text style={styles.cardButtonText}>View Details</Text>
          </TouchableOpacity>

        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
      {/* Custom Header */}
      <Header />

      {/* Profile Heading */}
      {/*s <Text style={styles.profileHeader}>Gas Distribution Centers</Text> */}
      <View style={styles.profileContainer} ></View>
        <ProfileStack.Navigator screenOptions={{ headerShown: false }}>
            <ProfileStack.Screen name="ProfileList" component={ProfileList} /> 
            <ProfileStack.Screen name="ViewDetails" component={ViewDetails} /> 
        </ProfileStack.Navigator>
     
    </SafeAreaView>
   
  );
};

// Styles for Profile Page
const styles = StyleSheet.create({
  flatListContainer: {
    paddingHorizontal: 15,
    paddingBottom: 20,
  },
  columnWrapper: {
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  profileContainer:{
    marginTop: 20
  },
  profileHeader: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginVertical: 20,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    width: '48%',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    display:'flex',
    justifyContent:'space-between'
  },
  cardImage: {
    width: '100%',
    height: 100,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    resizeMode: 'cover',
  },
  cardContent: {
    padding: 20,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  cardLocation: {
    fontSize: 14,
    color: '#777',
    marginBottom: 5,
  },
  cardContact: {
    fontSize: 14,
    color: '#777',
    marginBottom: 10,
  },
  cardButtonContainer: {
    alignItems: 'center',
    marginTop: 10,
    display:'flex',
    justifyContent:'space-between'
  },
  cardButton: {
    backgroundColor: '#007bff',
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 18,
  },
  cardButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
});




export default Profile;
