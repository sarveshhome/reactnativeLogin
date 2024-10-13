import React from 'react';
import {SafeAreaView, View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import globalStyle from '../../assets/styles/globalStyle';

const ViewDetails = ({route, navigation}) => {console.log('mks--', route)
  // Destructure the item passed via navigation
  const {item} = route.params;
  console.log('item ===> ', item);
  return (
    <SafeAreaView style={globalStyle.backgroundWhite}>
    <View style={styles.container}>
      <Image source={item.image} style={styles.image} />

      <View style={styles.detailsContainer}>
        {/* <Text style={styles.title}>{item.name}</Text>  */}
        <Text style={styles.location}>Location: {item.location}</Text>
        <Text style={styles.contact}>Contact: {item.contact}</Text>

        <TouchableOpacity 
          style={styles.backButton}
          onPress={() => navigation.goBack()}
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
    flex: 1,
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
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  location: {
    fontSize: 16,
    color: '#c9a7a7',
    marginBottom: 5,
  },
  contact: {
    fontSize: 16,
    color: '#c9a7a7',
    // color: '#666',
    marginBottom: 20,
  },
  backButton: {
    backgroundColor: '#007bff',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  backButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default ViewDetails;
