import React from 'react';
import {Image, StyleSheet, Text} from 'react-native';
import { Button } from 'react-native-elements';
import { withNavigation } from 'react-navigation';
import images from '../config/images';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import FontAwesome from 'react-native-vector-icons/FontAwesome';

import AppStyles from '../config/styles';

const HeaderLeft = withNavigation((props) => (
  <MaterialIcons.Button backgroundColor="transparent"
                        activeOpacity={0.5}
                        underlayColor="transparent"
                        onPress={() => {
                          props.navigation.openDrawer();
                        }}
                        name="menu" size={30} color={AppStyles.styles.icon} />
))

// const HeaderLeft = () => (
//   <Button
//     style={{
//       backgroundColor : 'transparent'
//     }}
//     icon={
//       <Icon
//         name="arrow-right"
//         size={15}
//         color="white"
//       />
//     }
//   />
// )

const headerNavigationOptions = {
  defaultNavigationOptions : {
    headerStyle : {
      marginBottom : 10,
      // backgroundColor : 'orange',
      borderBottomWidth: 0,
    },
    headerLeft : (props) => (
      <HeaderLeft {...props}/>
    ),
    // headerLeft : (props) => (
    //   <HeaderLeftNewWithNavigation {...props}/>
    // ),
    headerTitle : () => (
      <Image
        style={styles.stretch}
        source={images.LOGO}
      />
    ),
    headerRight : (
      <FontAwesome.Button
        backgroundColor="transparent"
        activeOpacity={0.5}
        underlayColor="transparent"
        onPress={() => {
          // console.log(props);
        }}
        name="search" size={30} color={AppStyles.styles.icon} />
    ),
    headerTitleStyle : {
      marginBottom : 10,
      paddingBottom : 10,
      // backgroundColor : 'green',
    },
    headerTitleContainerStyle : {
      // backgroundColor : 'green',
      // paddingBottom : 2,
      // marginBottom : 50,
    },
    headerLeftContainerStyle : {
      // backgroundColor : 'yellow',
    },
    headerRightContainerStyle : {
      // backgroundColor : 'red',
    }
  }
}

const styles = StyleSheet.create({
  stretch : {
    // backgroundColor : 'red',
    height: '100%',
    resizeMode: 'contain',
  }
});

export default headerNavigationOptions;
