import React from 'react';
import {View, Text} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

/**
 * Steps
 *
 */
class ProjectList extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Dự Án',
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
        <Text>ProjectList</Text>
      </View>
    );
  }
}

export default ProjectList;
