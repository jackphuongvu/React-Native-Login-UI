import React from 'react';
import {View, Text, Image} from 'react-native';
import * as Animatable from 'react-native-animatable';
import { Button } from 'react-native-elements';
import AppButton from '../../components/AppButton';

import Background from './Background';
import Fields from './Fields';
import styles from './styles';

const logoSrc = require('../../assets/images/logo.png');

class Login extends React.Component {

  render() {
    return (
      <Background style={styles.loginContainer}>
        <View style={[{
          flex : 2,
        }, styles.logoImageContainer]}>
          <Animatable.Image style={styles.logoImage}
                            animation={'bounceIn'}
                            duration={1200}
                            delay={200}
                            source={logoSrc} />
        </View>
        <View style={[{
          // backgroundColor : 'green',
          flex : 3
        }, styles.fieldContainer]}>
          <Animatable.Text  animation={'fadeInUp'}
            // duration={2000}
            // delay={200}
                            style={styles.mainTitle}>Chào buổi sáng</Animatable.Text>
          <Animatable.Text animation={'fadeInUp'}
                           delay={100}
                           style={[styles.desTitle, {
                             marginTop : 8
                           }]}>Đăng nhập để truy cập tài khoản của bạn</Animatable.Text>
          <Fields/>
          <View style={[
            {
              marginTop : 33
            },
            styles.bottomContainer]}>
            <Text style={styles.bottomContainerText}>Bạn chưa có tài khoản?</Text>
            <AppButton type="clear"
                       title="Đăng ký tại đây"
                       onPress={() => {
                         alert ('Navigate to Sign Up Screen (Update soon)')
                       }}/>
          </View>
        </View>
      </Background>
    );
  }
}

export default Login;
