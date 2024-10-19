import React from 'react';
import {SafeAreaView, View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import globalStyle from '../../assets/styles/globalStyle';

const ViewDetails = ({route, navigation}) => {
  // Destructure the item passed via navigation
  const {item} = route.params;
  return (
    <SafeAreaView >
    <View style={styles.container}>
      <Image source={item.image} style={styles.image} />
      <View >
        <Text style={styles.title}>{item.name}</Text> 
        <Text style={styles.location}>Location: {item.location}</Text>
        <Text style={styles.contact}>Contact: {item.contact}</Text>
        <TouchableOpacity 
          style={styles.backButton}
          onPress={() => navigation.goBack()}
          activeOpacity={0.3}
          underlayColor="#007bff"
        >
          <Text style={styles.backButtonText}>Go Back</Text>
        </TouchableOpacity>
      </View>
    </View>
  </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    padding: 20,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 20,
  },
  detailsContainer: {
    flex: 1,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  location: {
    fontSize: 16,
    color: '#666',
    marginBottom: 5,
  },
  contact: {
    fontSize: 16,
    color: '#666',
    // color: '#666',
    marginBottom: 20,
  },
  backButton: {
    backgroundColor: '#007bff',
    padding: 15,
    alignItems: 'center',
    borderRadius: 22
  },
  backButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default ViewDetails;
