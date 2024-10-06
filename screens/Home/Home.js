import React, {useEffect} from 'react';
import {SafeAreaView, View, StyleSheet,TouchableOpacity} from 'react-native';
import {Card, Title} from 'react-native-paper';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import globalStyle from '../../assets/styles/globalStyle';
const Home = ({navigation}) => {
  useEffect(() => {}, []);

  return (
    <SafeAreaView style={globalStyle.backgroundWhite}>
      <View>
        <Card>
          <Card.Content>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'flex-end',
                padding: 10,
              }}>
              <TouchableOpacity onPress={() => navigation.openDrawer()}>
                <MaterialIcons name="more-vert" size={28} color="black" />
              </TouchableOpacity>
            </View>
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
