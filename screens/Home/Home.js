import React, {useEffect} from 'react';
import {SafeAreaView, View, StyleSheet, TouchableOpacity} from 'react-native';
import {Card, Title} from 'react-native-paper';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faBars} from '@fortawesome/free-solid-svg-icons'; // Use solid

import globalStyle from '../../assets/styles/globalStyle';
import {scaleFontSize} from '../../assets/styles/scaling';
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
                justifyContent: 'flex-start',
                padding: 5,
              }}>
              <TouchableOpacity
                style={globalStyle.messageIcon}
                onPress={() => navigation.openDrawer()}>
                <FontAwesomeIcon
                  icon={faBars}
                  size={scaleFontSize(20)}
                  color={'#898DAE'}
                />
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
    padding: 50,
    backgroundColor: '#f4f4f4',
  },
});

export default Home;
