import React from 'react';
import {View, Text, Image} from 'react-native';
import * as Animatable from 'react-native-animatable';

import Background from './Background';
import styles from './styles';

const logoSrc = require('../../assets/images/logo.png');

class Login extends React.Component {

  render() {
    return (
      <Background style={styles.loginContainer}>
        <View style={[{
          flex : 1,
          // backgroundColor : 'red',
          alignItems : 'center',
          justifyContent : 'center'
        }, styles.logoImageContainer]}>
          <Animatable.Image style={styles.logoImage} animation={'bounceIn'}
                            duration={1200}
                            delay={200}
                            source={logoSrc} />
        </View>
        <View style={[{flex : 1}, styles.fieldContainer]}>
          <Text style={styles.mainTitle}>Chào buổi sáng</Text>
          <Text style={styles.desTitle}>Đăng nhập để truy cập tài khoản của bạn</Text>
        </View>
      </Background>
    );
  }
}

export default Login;
