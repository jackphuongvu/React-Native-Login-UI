import React from 'react';
import {View} from 'react-native';
import { TextField } from 'react-native-material-textfield';
import { Button } from 'react-native-elements';

class Fields extends React.Component {
  state = {
    phone: '',
    password : ''
  };
  loginSubmit = () => {

  }
  render() {
    const { phone, password} = this.state;
    return (
      <View>
        <TextField
          style={{
            // backgroundColor : 'red',
            // padding : 10
          }}
          label='Số điện thoại'
          value={phone}
          onChangeText={ (phone) => this.setState({ phone }) }
        />
        <TextField
          label='Mật khẩu'
          value={password}
          onChangeText={ (e) => {
            console.log('CHECK change password');
            console.log(e.target);
          }}
        />
        <Button
          // raised
          // icon={{name: 'home', size: 32}}
          buttonStyle={{backgroundColor: '#00b937', borderRadius: 23,
            shadowColor: "#17984D",
            shadowOpacity: 0.5,
            shadowRadius: 19.6,
            shadowOffset: {
              height: 13.6,
              // width: 0.3
            },
            paddingVertical : 13,
            marginTop : 40
          }}
          textStyle={{textAlign: 'center'}}
          // containerBorderRadius={8}
          // innerBorderStyle={}
          title={'Đăng nhập ngay'}
        />
      </View>
    );
  }
}

export default Fields;
