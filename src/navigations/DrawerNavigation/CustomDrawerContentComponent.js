import React from 'react';
import { StyleSheet, ScrollView, Image, Text} from 'react-native';
import { DrawerItems, SafeAreaView } from 'react-navigation';

const CustomDrawerContentComponent = props => (
  <ScrollView>
    <SafeAreaView style={styles.container} forceInset={{ top: 'always', horizontal: 'never' }}>
      <DrawerItems {...props} />
      <Text>CustomDrawerContentComponent</Text>
    </SafeAreaView>
  </ScrollView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default CustomDrawerContentComponent;
