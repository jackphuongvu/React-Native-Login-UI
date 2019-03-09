import React from 'react';
import {View} from 'react-native';
import { TextField } from 'react-native-material-textfield';
import { Button } from 'react-native-elements';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import {BoxShadow} from 'react-native-shadow'
import * as styles from './styles';

/**
 * 1. Use 1 "onChangeText" function for all fields. => NOT DONE
 * 1.1. Create Password field.
 * 2. Create Loading status of Form Submit
 * 3. Create "onSubmitEditing" function for all fields
 * 4. Create "Next Focus Submit" thing.
 * - It's like when we are on this field, for example,
 */
const fields = ['phone', 'password'];

class Fields extends React.Component {
  state = {
    phone: '',
    password : '',
    loadingSubmit : false,
    secureTextEntry : true,
    errors : {}
  };

  /*set "Loading" submit form*/
  setLoadingSubmit = (loadingSubmit) => {
    this.setState({
      loadingSubmit
    });
  }

  onChangeText = (value) => {
    // Steps
    // - get all "name" of all fields. (fields)
    fields.forEach((name) => {
      if (this[name].isFocused()) {
        // TODO:
        // - Fix a bug when user change "Pass view" mode, value of this function is empty!
        // if (name === 'password' && !value && this.state.password) {
        //   console.log('Update old password')
        //   console.log(this.state.password)
        //   console.log(value)
        //   this.setState({
        //     [name] : this.state.password + value
        //   });
        // }

        // else
          this.setState({
            [name] : value
          });
      }
    })
    // - Check if the field is focused or not.


    // - Set state if it's focused.
  }

  loginSubmit = () => {
    // Test check focus field.
    // const {phone, password} = this.state;
    // console.log(phone)
    // console.log(password)
    //
    // return;
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

    setTimeout(() => {
      this.setLoadingSubmit(false);
    }, 2000)
    //
  }
  onAccessoryPress = () => {
    // this.setState(({ secureTextEntry }) => ({ secureTextEntry: !secureTextEntry }));
    console.log(this.state.password)
    this.setState({
      secureTextEntry : !this.state.secureTextEntry
    });
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
  onSubmitPhone = () => {
    // Submit for next field not this current field.
    // this.password.focus();
  }
  render() {
    const { phone, password, secureTextEntry} = this.state;
    return (
      <View>
        <TextField
          ref={ref => this.phone = ref}
          keyboardType='phone-pad'
          style={{
            // backgroundColor : 'red',
            // padding : 10
          }}
          label='Số điện thoại'
          value={phone}
          onChangeText={this.onChangeText}
          returnKeyType='next'
          onSubmitEditing={this.onSubmitPhone}
          // error="Phone failed"
        />
        <TextField
          ref={ref => this.password = ref}
          // inputContainerPadding={20}
          inputContainerStyle={{
            // paddingLeft : 50
          }}
          secureTextEntry={secureTextEntry}
          label='Mật khẩu'
          value={password}
          onChangeText={this.onChangeText}
          enablesReturnKeyAutomatically={true}
          returnKeyType='done'
          onSubmitEditing={this.onSubmitPassword}
          renderAccessory={this.renderPasswordAccessory}
        />
        {/*Work with Boxshadow width*/}
        {/*https://gist.github.com/lunvjp/cff4845545062027f0b8d06d2e2ae9c7*/}
        <Button
          /*TODO: Update onPress for button*/
          // raised

          loading={this.state.loadingSubmit}
          buttonStyle={styles.buttonStyle}
          textStyle={{textAlign: 'center'}}
          onPress={this.loginSubmit}
          title={'Đăng nhập ngay'}
          titleStyle={styles.titleStyle}
        />
      </View>
    );
  }
}

export default Fields;
