import React from 'react';
import {View} from 'react-native';
import { TextField } from 'react-native-material-textfield';
import { Button } from 'react-native-elements';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

/**
 * 1. Use 1 "onChangeText" function for all fields.
 * 2. Create Loading status of Form Submit
 * 3. Create "onSubmitEditing" function
 * 4. Create "Next Focus Submit" thing.
 * - It's like when we are on this field, for example,
 */
const fields = ['phone', 'password'];

class Fields extends React.Component {
  state = {
    phone: '',
    password : '',
    loadingSubmit : false,
    secureTextEntry : false,
    errors : {}
  };

  constructor(props) {
    super(props);
  }

  /*set "Loading" submit form*/
  setLoadingSubmit = (loadingSubmit) => {
    this.setState({
      loadingSubmit
    });
  }

  /**/
  onChangeText = (e) => {
    // Steps
    // - get all "name" of all fields. (fields)
    // - Check if the field is focused or not.


    // - Set state if it's focused.
  }

  loginSubmit = () => {
    // Steps
    // - Check and validate fields
    // + If all fields are good, set "loading" process
    // + If fields are not valid, alert about messages
    // - Fetch Login API
    // - If it's not success, Alert the message.
    // - If it's success, go to Home Screen as well.

    /*Check fields here*/
    // console.log('Check phone value')
    // console.log(this.phone.value())
    // ['phone', 'password'].forEach(() => {
    //   // let value =
    // })
    // ----------------------------------

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
          keyboardType='email-address'
          style={{
            // backgroundColor : 'red',
            // padding : 10
          }}
          label='Số điện thoại'
          value={phone}
          onChangeText={ (phone) => this.setState({ phone }) }
          onSubmitEditing={() => {
            console.log('onSubmitEditing of phone')
          }}
          // error="Phone failed"
        />
        <TextField
          ref={ref => this.password = ref}
          // inputContainerPadding={20}
          inputContainerStyle={{
            // paddingLeft : 50
          }}
          label='Mật khẩu'
          value={password}
          onChangeText={ () => {
            // console.log('CHECK change password');
            // console.log(e.target.name);
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
