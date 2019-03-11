import React from 'react';
import { FlatList, SafeAreaView, StatusBar, Text, View } from 'react-native';
import { NavigationEvents } from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const createTabScreen = (name, icon, focusedIcon, screen) => {
  class TabScreen extends React.Component<any, any> {
    static navigationOptions = {
      tabBarLabel: name,
      tabBarIcon: ({ tintColor, focused }) => (
        <MaterialCommunityIcons
          name={focused ? focusedIcon : icon}
          size={26}
          style={{ color: focused ? tintColor : '#ccc' }}
        />
      ),
    };

    state = { eventLog: [] };

    append = navigationEvent => {
      this.setState(({ eventLog }) => ({
        eventLog: eventLog.concat(navigationEvent),
      }));
    };

    render() {
      const Screen = screen;
      return (
        <Screen/>
      );
    }
  }

  return TabScreen;
};

export default createTabScreen;
