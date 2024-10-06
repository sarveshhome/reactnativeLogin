import React, {useEffect} from 'react';
import {SafeAreaView, View, StyleSheet} from 'react-native';
import {Card, Title} from 'react-native-paper';

import globalStyle from '../../assets/styles/globalStyle';
const Home = ({navigation}) => {
  useEffect(() => {}, []);

  return (
    <SafeAreaView style={globalStyle.backgroundWhite}>
      <View >
        <Card>
          <Card.Content>
            <Title style={styles.container}>Welcome to the Dashboard</Title>
          </Card.Content>
        </Card>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 2,
    padding: 20,
    backgroundColor: '#f4f4f4',
  },
});

export default Home;
