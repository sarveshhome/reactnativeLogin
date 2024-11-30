import {createStackNavigator} from '@react-navigation/stack';
import {Routes} from './Routes';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Home from '../screens/Home/Home';
import Profile from '../screens/Profile/Profile';
import Header from '../screens/Header/Header';
import ViewDetails from '../screens/Profile/ViewDetails';
import DealerDetail from '../screens/Profile/DealerDetail'; // Or wherever it is located

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const MainMenuNavigation = ({navigation}) => {
  return (
    <Drawer.Navigator initialRouteName={Routes.Home} screenOptions={{ header: (props) => <Header {...props} />, headerShown: true }} // headerShown can be true or false
    >
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
      <Drawer.Screen
        name={Routes.DealerDetail}
        component={DealerDetail}
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
    <Stack.Navigator screenOptions={{ header: () => null, headerShown: false }} initialRouteName={'Drawer'}>
      <Stack.Screen name={'Drawer'} component={MainMenuNavigation} options={{ headerShown: false }} />
      
    </Stack.Navigator>  
  );
};

export default MainNavigation;
