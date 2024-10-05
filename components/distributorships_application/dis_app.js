// App.js
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ReportDetails from './ReportDetails';
import ConfirmationScreen from './ConfirmationScreen'; // import the new screen

const Stack = createNativeStackNavigator();

export default function Dis_App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ReportDetails">
        <Stack.Screen name="ReportDetails" component={ReportDetails} />
        <Stack.Screen name="ConfirmationScreen" component={ConfirmationScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
