import React from 'react';
import {View, Text} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

/**
 * Steps
 *
 */
class Activity extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Thông báo',
    tabBarIcon: ({ tintColor, focused }) => (
      <MaterialCommunityIcons
        name={'home'}
        // name={focused ? focusedIcon : icon}
        size={26}
        style={{ color: focused ? tintColor : '#ccc' }}
      />
    ),
  };
  render() {
    return (
      <View style={{
        flex : 1,
        justifyContent : 'center',
        alignItems : 'center'
      }}>
        <Text>Activity</Text>
      </View>
    );
  }
}

export default Activity;
