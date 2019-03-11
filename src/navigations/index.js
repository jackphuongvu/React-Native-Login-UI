import React from 'react';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';
// createBottomTabNavigator

import Login from '../screens/Login';
import BottomTabNavigation from './BottomTabNavigation';
import createTabScreen from './TabScreen';

const Root = createSwitchNavigator({
  LoginScreen : {
    screen : Login
  },
  MainScreen : {
    screen : BottomTabNavigation
  }
}, {
  initialRouteName: 'MainScreen',
});

const AppContainer = createAppContainer(Root);

export default AppContainer;
