import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Card, Title, Paragraph} from 'react-native-paper';

import {NavigationContainer} from '@react-navigation/native';
import MainNavigation from '../../navigation/MainNavigation';

const Dashboard = () => {
  return (
    // <NavigationContainer>
    <MainNavigation></MainNavigation>
  // </NavigationContainer>
    // <View style={styles.container}>
    //   <Card>
    //     <Card.Content>
    //       <Title>Welcome to the Dashboard</Title>
    //     </Card.Content>
    //   </Card>
    // </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f4f4f4',
  },
});

export default Dashboard;
