import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
// import Icon from 'react-native-vector-icons/Ionicons'; // Using react-native-vector-icons

const Header = () => {
  return (
    <View style={styles.headerContainer}>
      {/* Back Button */}
      {/* <TouchableOpacity onPress={() => navigation.goBack()}>
        <Icon name="arrow-back" size={24} color="white" />
      </TouchableOpacity> */}

      {/* Title */}
      <Text style={styles.title}>Gas Distribution Center</Text>

      {/* Optional Profile Icon */}
      {/* <Icon name="md-business" size={24} color="white" /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: '#3a86ff', // Example background color (blue)
    elevation: 4, // Add shadow for separation
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
});

export default Header;
