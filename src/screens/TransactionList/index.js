import React from 'react';
import {View, Text} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import TransactionIcon from "../../components/AppIcons/Transaction";
import AppStyles from "../../config/styles";

/**
 * Steps
 *
 */
class TransactionList extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Giao dịch',
    // tabBarIcon: ({ tintColor, focused }) => (
    //   <MaterialCommunityIcons
    //     name={'home'}
    //     // name={focused ? focusedIcon : icon}
    //     size={26}
    //     style={{ color: focused ? tintColor : '#ccc' }}
    //   />
    // ),
    tabBarIcon : ({ tintColor, focused }) => (
      <TransactionIcon fill={focused ? tintColor : AppStyles.styles.inactiveGreyColor}/>
    )
  };
  render() {
    return (
      <View style={{
        flex : 1,
        justifyContent : 'center',
        alignItems : 'center'
      }}>
        <Text>TransactionList</Text>
      </View>
    );
  }
}

export default TransactionList;
