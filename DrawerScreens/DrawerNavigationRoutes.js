// Example of Splash, Login and Sign Up in React Native
// https://aboutreact.com/react-native-login-and-signup/

// Import React
import React from 'react';

// Import Navigators from React Navigation
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';

// Import Screens
import HomeScreen from '../DrawerScreens/HomeScreen';
import orderScreen from '../DrawerScreens/OrderScreen';
import ReportsScreen from '../DrawerScreens/ReportsScreen';
import SettingsScreen from '../DrawerScreens/SettingScreen';

import CustomSidebarMenu from '../DrawerScreens/CustomSidebarMenu';
import NavigationDrawerHeader from '../Components/NavigationDrawerHeader';
import FavoritesScreen from '../DrawerScreens/FavoritesScreen';
import PayBillScreen from '../DrawerScreens/PayBillScreen';
import MenuScreen from '../DrawerScreens/MenuScreen'
import AddUpdatePage from '../DrawerScreens/AddUpdatePage';

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
          title: 'Employee', //Set Header Title
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
          title: 'Tables', //Set Header Title
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
          title: 'Transaction', //Set Header Title
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

const reportsScreenStack = ({navigation}) => {
  return (
    <Stack.Navigator
      initialRouteName="ReportsScreen"
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
        name="ReportsScreen"
        component={ReportsScreen}
        options={{
          title: 'Reports', //Set Header Title
          
        }}
      />
    </Stack.Navigator>
  );
};

const menuScreenStack = ({navigation}) => {
  return (
    <Stack.Navigator
      initialRouteName="MenuScreen"
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
        name="MenuScreen"
        component={MenuScreen}
        options={{
          title: 'MenuBuilder', //Set Header Title
          
        }}
      />
    </Stack.Navigator>
  );
};

const AddUpdatePageStack = ({navigation}) => {
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
      name="orderScreenStack"
      options={{drawerLabel:'Order Screen'}}
      component={orderScreenStack}
      />

      
      <Drawer.Screen
        name="reportsScreenStack"
        options={{drawerLabel: 'Reports'}}
        component={reportsScreenStack}
      />

      <Drawer.Screen
        name="settingScreenStack"
        options={{drawerLabel: 'Employee'}}
        component={settingScreenStack}
      />

      <Drawer.Screen
      name="favoritesScreenStack"
      options={{drawerLabel:'Tables'}}
      component={favoritesScreenStack}/>

      <Drawer.Screen
      name="paybillScreenStack"
      options={{drawerLabel:"Transaction"}}
      component={paybillScreenStack}
      />

      <Drawer.Screen
      name="menuScreenStack"
      options={{drawerLabel:"Menu"}}
      component={menuScreenStack}/>

      <Drawer.Screen
      name="AddUpdatePageStack"
      options={{drawerLabel:()=>null}}
      component={AddUpdatePageStack}/>

    </Drawer.Navigator>
  );
};

export default DrawerNavigatorRoutes;