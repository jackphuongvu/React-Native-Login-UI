import React from 'react';
import { createSwitchNavigator, createAppContainer, createDrawerNavigator } from 'react-navigation';

import Login from '../screens/Login';
import BottomTabNavigation from './BottomTabNavigation';

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
/**
 * Notes:
 * - Can't use "createDrawerNavigator" inside "createSwitchNavigator" component. - not sure for now anymore.
 */
