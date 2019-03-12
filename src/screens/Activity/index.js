import React from 'react';
import {View, Text} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AlertIcon from '../../components/AppIcons/Alert';
import ProjectIcon from '../../components/AppIcons/Project';
import AppStyles from '../../config/styles';
/**
 * Steps
 *
 */
class Activity extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Thông báo',
    // tabBarIcon: ({ tintColor, focused }) => (
    //   <MaterialCommunityIcons
    //     name={'bell-ring-outline'}
    //     // name={focused ? focusedIcon : icon}
    //     size={26}
    //     style={{ color: focused ? tintColor : '#ccc' }}
    //   />
    // ),
    tabBarIcon: ({ tintColor, focused }) => (
      <AlertIcon fill={focused ? tintColor : AppStyles.styles.inactiveGreyColor}/>
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
