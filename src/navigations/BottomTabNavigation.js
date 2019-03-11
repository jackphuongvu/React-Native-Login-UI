import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import AppStyles from '../config/styles';

import Home from '../screens/Home';
import Activity from '../screens/Activity';
import ProjectList from '../screens/ProjectList';
import TransactionList from '../screens/TransactionList';
import User from '../screens/User';

export default createMaterialBottomTabNavigator({
  Home: { screen: Home },
  Activity: { screen: Activity },
  ProjectList: { screen: ProjectList },
  TransactionList: { screen: TransactionList },
  User: { screen: User }
}, {
  // initialRouteName: 'Album',
  activeColor : AppStyles.styles.accentColor,
  inactiveColor: AppStyles.styles.inactiveGreyColor,
  barStyle: { backgroundColor: '#ffffff' },
  labeled : true,
  shifting : false,
  // barStyle :
});
