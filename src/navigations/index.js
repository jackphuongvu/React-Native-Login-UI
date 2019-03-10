import React from 'react';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';

import Login from '../screens/Login';

const Root = createSwitchNavigator({
  LoginScreen : {
    screen : Login
  }
}, {
  // initialRouteName: 'LoginScreen',
});

const AppContainer = createAppContainer(Root);

export default AppContainer;
