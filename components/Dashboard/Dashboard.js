import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Card, Title, Paragraph} from 'react-native-paper';
import HomeScreen from './HomeScreen';
import NotificationsScreen from './NotificationScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();
const Dashboard = () => {
  return (
    <View style={styles.container}>
      <Card>
        <Card.Content>
          <Title>Welcome to the Dashboard</Title>
         
            <Drawer.Navigator>
              <Drawer.Screen name="HomeScreen" component={HomeScreen} />
              <Drawer.Screen
                name="Notifications"
                component={NotificationsScreen}
              />
            </Drawer.Navigator>
        </Card.Content>
      </Card>
    </View>
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
