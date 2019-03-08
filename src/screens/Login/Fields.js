import React from 'react';
import {View} from 'react-native';
import { TextField } from 'react-native-material-textfield';
import { Button } from 'react-native-elements';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

class Fields extends React.Component {
  state = {
    phone: '',
    password : '',
    loadingSubmit : false,
    secureTextEntry : false
  };

  constructor(props) {
    super(props);
  }
  setLoadingSubmit = (loadingSubmit) => {
    this.setState({
      loadingSubmit
    });
  }
  loginSubmit = () => {
    this.setLoadingSubmit(true);
    // Doing something here!

    /*Validate fields*/
    // Alert
    //

    setTimeout(() => {
      this.setLoadingSubmit(false);
    }, 2000)
    //
  }
  onAccessoryPress() {
    this.setState(({ secureTextEntry }) => ({ secureTextEntry: !secureTextEntry }));
  }
  onSubmitPassword = () => {
    this.password.blur();
  }

  renderPasswordAccessory = () => {
    let { secureTextEntry } = this.state;

    let name = secureTextEntry?
      'visibility':
      'visibility-off';

    return (
      <MaterialIcons
        size={24}
        name={name}
        color={TextField.defaultProps.baseColor}
        onPress={this.onAccessoryPress}
        suppressHighlighting
      />
    );
  }
  render() {
    const { phone, password} = this.state;
    return (
      <View>
        <TextField
          ref={ref => this.phone = ref}
          style={{
            // backgroundColor : 'red',
            // padding : 10
          }}
          label='Số điện thoại'
          value={phone}
          onChangeText={ (phone) => this.setState({ phone }) }
        />
        <TextField
          ref={ref => this.password = ref}
          // inputContainerPadding={20}
          inputContainerStyle={{
            // paddingLeft : 50
          }}
          label='Mật khẩu'
          value={password}
          onChangeText={ (e) => {
            console.log('CHECK change password');
            console.log(e.target);
          }}
          onSubmitEditing={this.onSubmitPassword}
          // renderAccessory={this.renderPasswordAccessory}
        />
        <Button
          // raised
          // icon={{name: 'home', size: 32}}
          loading={this.state.loadingSubmit}
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
          onPress={this.loginSubmit}
          // containerBorderRadius={8}
          // innerBorderStyle={}
          title={'Đăng nhập ngay'}
        />
      </View>
    );
  }
}

export default Fields;
