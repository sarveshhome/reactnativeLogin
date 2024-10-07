import React from 'react';
import {StyleSheet} from 'react-native';
import MainNavigation from '../../navigation/MainNavigation';

const Dashboard = () => {
  return (
    <MainNavigation></MainNavigation>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#f4f4f4',
  },
});

export default Dashboard;
