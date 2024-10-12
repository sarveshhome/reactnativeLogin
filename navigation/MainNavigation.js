import {createStackNavigator} from '@react-navigation/stack';
import {Routes} from './Routes';
import Home from '../screens/Home/Home';
import Profile from '../screens/Profile/Profile';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Header from '../screens/Header/Header';
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const MainMenuNavigation = ({navigation}) => {
  return (
    <Drawer.Navigator initialRouteName={Routes.Home}>
      <Drawer.Screen
        name={Routes.Home}
        component={Home}
        options={({ navigation }) => ({ // Access navigation here
          header: () => <Header navigation={navigation} />,
          headerShown: true,
        })}
      />
      <Drawer.Screen
        name={Routes.Profile}
        component={Profile}
        options={({ navigation }) => ({ // Access navigation here
          header: () => <Header navigation={navigation} />,
          headerShown: true,
        })}
      />
    </Drawer.Navigator>
  );
};

const MainNavigation = ({navigation}) => {
  return (
    <Stack.Navigator initialRouteName={'Drawer'}>
      <Stack.Screen name={'Drawer'} component={MainMenuNavigation} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
};

export default MainNavigation;