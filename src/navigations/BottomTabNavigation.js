import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { createStackNavigator, createSwitchNavigator ,createDrawerNavigator, withNavigation,
  createBottomTabNavigator
} from 'react-navigation';
import AppStyles from '../config/styles';
import React from 'react';
import {Text} from 'react-native';

import Home from '../screens/Home';
import Activity from '../screens/Activity';
import ProjectList from '../screens/ProjectList';
import TransactionList from '../screens/TransactionList';
import User from '../screens/User';

import headerNavigationOptions from './Header';
import CustomDrawerContentComponent from "./DrawerNavigation/CustomDrawerContentComponent";

/*Detail 5 Tabs*/
const BottomTabNavigator = createMaterialBottomTabNavigator({
  Home: { screen: Home },
  ProjectList: { screen: ProjectList },
  Activity: { screen: Activity },
  TransactionList: { screen: TransactionList },
  User: { screen: User }
}, {
  initialRouteName: 'Home',
  activeColor : AppStyles.styles.accentColor,
  inactiveColor: AppStyles.styles.inactiveGreyColor,
  barStyle: { backgroundColor: '#ffffff' },
  labeled : true,
  shifting : false,
});

/*Another version of BottomTabNavigator*/
// const BottomTabNavigator = createBottomTabNavigator({
//   Home: { screen: Home },
//   ProjectList: { screen: ProjectList },
//   Activity: { screen: Activity },
//   TransactionList: { screen: TransactionList },
//   User: { screen: User }
// }, {
//   initialRouteName: 'Home',
//   tabBarOptions : {
//     activeTintColor : AppStyles.styles.accentColor,
//     // activeBackgroundColor : AppStyles.styles.accentColor,
//     inactiveTintColor : AppStyles.styles.inactiveGreyColor,
//     style : {
//       // backgroundColor: '#ffffff',
//       // backgroundColor: 'red',
//       // paddingTop : 20
//
//     },
//     labelStyle: {
//       fontSize: 10,
//       // fontWeight: "normal",
//       // fontStyle: "normal",
//       letterSpacing: 0.09,
//       // color: "#999999"
//     }
//     // tabStyle : {
//     //   backgroundColor: 'red',
//     //   marginTop : 20
//     // }
//   },
//   // activeColor : AppStyles.styles.accentColor,
//   // inactiveColor: AppStyles.styles.inactiveGreyColor,
//   // barStyle: { backgroundColor: '#ffffff' },
//   // labeled : true,
//   // shifting : false,
// });
/*END: Another version of BottomTabNavigator*/

/*Create Main screen for 5 tabs.*/
const HomeStackNavigator = createStackNavigator({
  BottomTabNavigator : {
    // path: '/home',
    screen: BottomTabNavigator,
  },
}, {
  ...headerNavigationOptions,
  // headerMode : 'float'
});

/*Main screen*/
const DrawerNavigator = createDrawerNavigator({
  HomeStackNavigator : {
    screen : HomeStackNavigator
  }
}, {
  contentComponent : (props) => (
    <CustomDrawerContentComponent {...props}/>
  )
});
export default DrawerNavigator;
