// import React from 'react'
//
// // Navigators
// import { DrawerNavigator, StackNavigator, createBottomTabNavigator } from 'react-navigation'
//
// // TabNavigator screens
// import ProfileConnector from '../connectors/ProfileConnector'
// import InboxConnector from '../connectors/InboxConnector'
// import AttendanceConnector from '../connectors/AttendanceConnector'
// import Results from '../layouts/results/Results'
// import TimetableConnector from '../connectors/TimetableConnector'
// import Icon from 'react-native-vector-icons/Entypo'
// import {Dimensions} from 'react-native'
//
// const deviceW = Dimensions.get('window').width
//
// const basePx = 375
//
// function px2dp(px) {
//   return px *  deviceW / basePx
// }
//
// import Gallery from '../layouts/gallery/Gallery'
//
// export const Tabs = createBottomTabNavigator({
//   Profile: {
//     screen: ProfileConnector,
//     navigationOptions: {
//       tabBarLabel: 'Profile',
//       tabBarIcon: ({tintColor}) => <Icon name="user" size={px2dp(22)} color={tintColor}/>,
//     },
//   },
//   Inbox: {
//     screen: InboxConnector,
//     navigationOptions: {
//       tabBarLabel: 'Inbox',
//       tabBarIcon: ({tintColor}) => <Icon name="inbox" size={px2dp(22)} color={tintColor}/>,
//     },
//   },
//   Attendance: {
//     screen: AttendanceConnector,
//     navigationOptions: {
//       tabBarLabel: 'Attendance',
//       tabBarIcon: ({tintColor}) => <Icon name="hand" size={px2dp(22)} color={tintColor}/>,
//     },
//   },
//   Timetable: {
//     screen: TimetableConnector,
//     navigationOptions: {
//       tabBarLabel: 'Timetable',
//       tabBarIcon: ({tintColor}) => <Icon name="calendar" size={px2dp(22)} color={tintColor}/>,
//     },
//   },
//   Results: {
//     screen: Results,
//     navigationOptions: {
//       tabBarLabel: 'Results',
//       tabBarIcon: ({tintColor}) => <Icon name="bar-graph" size={px2dp(22)} color={tintColor}/>,
//     },
//   },
// }, {
//   initialRouteName: 'Inbox',
//   tabBarPosition: 'bottom',
//   swipeEnabled: true,
//   tabBarOptions: {
//     activeTintColor: 'teal',
//     inactiveTintColor: '#424949',
//     activeBackgroundColor: "white",
//     inactiveTintColor: '#424949',
//     labelStyle: { fontSize: 14 },
//     style : { height : 50}
//   }
// });
//
// export const Drawer = DrawerNavigator({
//   Tabs: {screen: Tabs},
//   Gallery: { screen: Gallery },
// },{
//   drawerWidth: 250,
//   drawerPosition: 'left',
//   drawerOpenRoute: 'DrawerOpen',
//   drawerCloseRoute: 'DrawerClose',
//
