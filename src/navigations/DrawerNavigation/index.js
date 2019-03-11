import React from 'react';
import { StyleSheet, ScrollView, Image, Text } from 'react-native';
import { DrawerItems, SafeAreaView, createDrawerNavigator } from 'react-navigation';
import CustomDrawerContentComponent from './CustomDrawerContentComponent';

// const CustomDrawerContentComponent = props => (
//   <ScrollView>
//     <SafeAreaView style={styles.container} forceInset={{ top: 'always', horizontal: 'never' }}>
//       <DrawerItems {...props} />
//     </SafeAreaView>
//   </ScrollView>
// );

import Home from '../../screens/Home';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

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

export default DrawerNavigator;
