import React, {useEffect} from 'react';
import {SafeAreaView, View, StyleSheet, TouchableOpacity} from 'react-native';
import {Card, Title} from 'react-native-paper';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faBars} from '@fortawesome/free-solid-svg-icons'; // Use solid

import globalStyle from '../../assets/styles/globalStyle';
const Home = ({navigation}) => {
  useEffect(() => {}, []);

  return (
    <SafeAreaView style={globalStyle.backgroundWhite}>
      <View>
        <Card>
          <Card.Content>
            <Title style={styles.titleText}>Welcome to the Dashboard</Title>
          </Card.Content>
        </Card>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', // To center the title if needed
    alignItems: 'center',      // To horizontally center the title
    padding: 50,
    backgroundColor: '#f4f4f4',
  },
  titleText: {
    fontSize: 24, // Custom font size
    color: '#333', // Custom color
    textAlign: 'center', // Ensure text itself is centered (if multiline)
  },
});

export default Home;
