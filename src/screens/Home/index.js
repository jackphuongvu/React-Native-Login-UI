import React from 'react';
import {View, Text} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Button } from 'react-native-elements';
// import HomeIcon from '../../config/icons';
import HomeIcon from '../../components/AppIcons/Home';
import AppStyles from '../../config/styles';

import MostPopularProject from './MostPopularProject';
/**
 * Steps
 * 1. Bottom navigation
 * - Check click game to move to Login screen
 *
 */
class Home extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Trang chủ',
    // tabBarIcon: ({ tintColor, focused }) => (
    //   <MaterialCommunityIcons
    //     name={'home'}
    //     // name={focused ? focusedIcon : icon}
    //     size={26}
    //     style={{ color: focused ? tintColor : '#ccc' }}
    //   />
    // )
    tabBarIcon : ({ tintColor, focused }) => (
      <HomeIcon fill={focused ? tintColor : AppStyles.styles.inactiveGreyColor}/>
    )
  };
  render() {
    return (
      <View style={{
        backgroundColor : 'white'
      }}>
        <MostPopularProject/>
        {/*<Button title="Solid Button"*/}
                {/*onPress={() => {*/}
          {/*this.props.navigation.openDrawer();*/}
        {/*}} />*/}
        {/*<Text>Home Screen</Text>*/}
      </View>
    );
  }
}

export default Home;
