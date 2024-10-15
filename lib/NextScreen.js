// NextScreen.js
import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const NextScreen = ({ route }) => {
  const { imagePath } = route.params;

  return (
    <View style={styles.container}>
      <Image source={{ uri: imagePath }} style={styles.image} />
      {/* ... other content for this screen ... */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 300,
    height: 300,
    resizeMode: 'contain', 
  },
});

export default NextScreen;
