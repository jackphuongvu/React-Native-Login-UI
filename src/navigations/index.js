import React from 'react';
import { createSwitchNavigator, createAppContainer, createDrawerNavigator } from 'react-navigation';
// createBottomTabNavigator

import Login from '../screens/Login';
import BottomTabNavigation from './BottomTabNavigation';
import Home from "../screens/Home";
import CustomDrawerContentComponent from "./DrawerNavigation/CustomDrawerContentComponent";
// import DrawerNavigator from "./DrawerNavigation";

const DrawerNavigator = createDrawerNavigator({
  Menu : {
    path: '/home',
    screen: Home,
  }
}, {
  contentComponent : () => (
    <CustomDrawerContentComponent/>
  )
});

const Root = createSwitchNavigator({
  LoginScreen : {
    screen : Login
  },
  MainScreen : {
    screen : BottomTabNavigation
  },
  // MainScreen : {
  //   screen : DrawerNavigator
  // },
  // DrawerNavigator
  /**
   * TODO:
   * - Fix a bug here - update soon.
   */
  // Drawer : {
  //   screen : DrawerNavigator
  // }
}, {
  initialRouteName: 'MainScreen',
});

const AppContainer = createAppContainer(Root);

export default AppContainer;
/**
 * Notes:
 * - Can't use "createDrawerNavigator" inside "createSwitchNavigator" component.
 */
