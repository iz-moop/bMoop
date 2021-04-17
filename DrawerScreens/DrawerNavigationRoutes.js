// Example of Splash, Login and Sign Up in React Native
// https://aboutreact.com/react-native-login-and-signup/

// Import React
import React from 'react';

// Import Navigators from React Navigation
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';

// Import Screens
import HomeScreen from '../DrawerScreens/HomeScreen';
import SettingsScreen from '../DrawerScreens/SettingScreen';
import CustomSidebarMenu from '../DrawerScreens/CustomSidebarMenu';
import NavigationDrawerHeader from '../Components/NavigationDrawerHeader';
import FavoritesScreen from '../DrawerScreens/FavoritesScreen';
import PayBillScreen from './PayBillScreen';
import orderScreen from '../DrawerScreens/OrderScreen';
import AddUpdatePage from  '../DrawerScreens/AddUpdatePage';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const homeScreenStack = ({navigation}) => {
  return (
    <Stack.Navigator initialRouteName="HomeScreen">
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          title: 'Home', //Set Header Title
          headerLeft: () => (
            <NavigationDrawerHeader navigationProps={navigation} />
          ),
          headerStyle: {
            backgroundColor: '#307ecc', //Set Header color
          },
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          },
        }}
      />
    </Stack.Navigator>
  );
};

const settingScreenStack = ({navigation}) => {
  return (
    <Stack.Navigator
      initialRouteName="SettingsScreen"
      screenOptions={{
        headerLeft: () => (
          <NavigationDrawerHeader navigationProps={navigation} />
        ),
        headerStyle: {
          backgroundColor: '#307ecc', //Set Header color
        },
        headerTintColor: '#fff', //Set Header text color
        headerTitleStyle: {
          fontWeight: 'bold', //Set Header text style
        },
      }}>
      <Stack.Screen
        name="SettingsScreen"
        component={SettingsScreen}
        options={{
          title: 'Settings', //Set Header Title
        }}
      />
    </Stack.Navigator>
  );
};
const favoritesScreenStack = ({navigation}) => {
  return (
    <Stack.Navigator
      initialRouteName="FavoritesScreen"
      screenOptions={{
        headerLeft: () => (
          <NavigationDrawerHeader navigationProps={navigation} />
        ),
        headerStyle: {
          backgroundColor: '#307ecc', //Set Header color
        },
        headerTintColor: '#fff', //Set Header text color
        headerTitleStyle: {
          fontWeight: 'bold', //Set Header text style
        },
      }}>
      <Stack.Screen
        name="FavoritesScreen"
        component={FavoritesScreen}
        options={{
          title: 'Favorite', //Set Header Title
        }}
      />
    </Stack.Navigator>
  );
};

const paybillScreenStack = ({navigation}) => {
  return (
    <Stack.Navigator
      initialRouteName="PayBillScreen"
      screenOptions={{
        headerLeft: () => (
          <NavigationDrawerHeader navigationProps={navigation} />
        ),
        headerStyle: {
          backgroundColor: '#307ecc', //Set Header color
        },
        headerTintColor: '#fff', //Set Header text color
        headerTitleStyle: {
          fontWeight: 'bold', //Set Header text style
        },
      }}>
      <Stack.Screen
        name="PayBillScreen"
        component={PayBillScreen}
        options={{
          title: 'PayBill', //Set Header Title
        }}
      />
    </Stack.Navigator>
  );
};

const orderScreenStack = ({navigation}) => {
  return (
    <Stack.Navigator
      initialRouteName="orderScreen"
      screenOptions={{
        headerLeft: () => (
          <NavigationDrawerHeader navigationProps={navigation} />
        ),
        headerStyle: {
          backgroundColor: '#307ecc', //Set Header color
        },
        headerTintColor: '#fff', //Set Header text color
        headerTitleStyle: {
          fontWeight: 'bold', //Set Header text style
        },
      }}>
      <Stack.Screen
        name="orderScreen"
        component={orderScreen}
        options={{
          title: 'OrderList', //Set Header Title
          
        }}
      />
     
    </Stack.Navigator>
  );
};

const AddUpdatePageScreenStack = ({navigation}) => 
{
  return (
    <Stack.Navigator
      initialRouteName="AddUpdatePage"
      screenOptions={{
        headerLeft: () => (
          <NavigationDrawerHeader navigationProps={navigation} />
        ),
        headerStyle: {
          backgroundColor: '#307ecc', //Set Header color
        },
        headerTintColor: '#fff', //Set Header text color
        headerTitleStyle: {
          fontWeight: 'bold', //Set Header text style
        },
      }}>
      <Stack.Screen
        name="AddUpdatePage"
        component={AddUpdatePage}
        options={{
          title: 'Add/Update', //Set Header Title
        }}
      />
    </Stack.Navigator>
  );
};



const DrawerNavigatorRoutes = (props) => {
  return (
    <Drawer.Navigator
      drawerContentOptions={{
        activeTintColor: '#cee1f2',
        color: '#cee1f2',
        itemStyle: {marginVertical: 3, color: 'white'},
        labelStyle: {
          color: 'black',fontSize:16,
        },
      }}
      screenOptions={{headerShown: false}}
      drawerContent={CustomSidebarMenu}>
      <Drawer.Screen
        name="homeScreenStack"
        options={{drawerLabel: 'Home Screen'}}      
        component={homeScreenStack}
      />
      <Drawer.Screen
        name="settingScreenStack"
        options={{drawerLabel: 'Setting Screen'}}
        component={settingScreenStack}
      />

      <Drawer.Screen
      name="favoritesScreenStack"
      options={{drawerLabel:'Favorites Screen'}}
      component={favoritesScreenStack}/>

      <Drawer.Screen
      name="paybillScreenStack"
      options={{drawerLabel:"PayBill Screen"}}
      component={paybillScreenStack}
      />

      <Drawer.Screen
      name="orderScreenStack"
      options={{drawerLabel:"Order Screen"}}
      component={orderScreenStack}
      />

    <Drawer.Screen
    name="AddUpdatePageScreenStack"
    options={{drawerLabel:"AddUpdatePage"}}
    component={AddUpdatePageScreenStack}/>



    </Drawer.Navigator>
  );
};

export default DrawerNavigatorRoutes;
