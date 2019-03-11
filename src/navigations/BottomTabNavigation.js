import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { createStackNavigator, createSwitchNavigator ,createDrawerNavigator } from 'react-navigation';
import AppStyles from '../config/styles';
import React from 'react';
import {Text} from 'react-native';

import Home from '../screens/Home';
import Activity from '../screens/Activity';
import ProjectList from '../screens/ProjectList';
import TransactionList from '../screens/TransactionList';
import User from '../screens/User';

import headerNavigationOptions from './Header';
// import CustomDrawerContentComponent from "./DrawerNavigation/CustomDrawerContentComponent";

const BottomTabNavigator = createMaterialBottomTabNavigator({
  Home: { screen: Home },
  Activity: { screen: Activity },
  ProjectList: { screen: ProjectList },
  TransactionList: { screen: TransactionList },
  User: { screen: User }
}, {
  initialRouteName: 'Home',
  activeColor : AppStyles.styles.accentColor,
  inactiveColor: AppStyles.styles.inactiveGreyColor,
  barStyle: { backgroundColor: '#ffffff' },
  labeled : true,
  shifting : false,
  // barStyle :
}, {
  ...headerNavigationOptions,
  title : 'Jack title'
});

// createStackNavigator
const HomeStackNavigator = createStackNavigator({
  BottomTabNavigator : {
    // path: '/home',
    screen: BottomTabNavigator,
  },
}, {
  // ...headerNavigationOptions,
  title : 'Jack title'
});

const DrawerNavigator = createDrawerNavigator({
  // BottomTabNavigator : {
  //   // path: '/home',
  //   screen: BottomTabNavigator,
  // },
  HomeStackNavigator : {
    screen : HomeStackNavigator
  }
}, {
  // contentComponent : () => (
  //   <CustomDrawerContentComponent/>
  // )
});
export default DrawerNavigator;

// import DrawerNavigator from './DrawerNavigation';

//
// // export default createSwitchNavigator({
// export default createStackNavigator({
//   BottomTabNavigator : {
//     screen : BottomTabNavigator,
//   },
//   DrawerNavigator : {
//     screen : DrawerNavigator
//   }
// }, {
//   initialRouteName: 'BottomTabNavigator',
// })
