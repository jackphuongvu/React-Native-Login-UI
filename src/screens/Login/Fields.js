import React from 'react';
import {View, Text} from 'react-native';
import { TextField } from 'react-native-material-textfield';
import { Button } from 'react-native-elements';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import LottieView from 'lottie-react-native';
import * as Icons from '../../config/icons';

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
    forgetPassword : true,
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

        /*Update "Forget Password" mode*/
        // if (name === 'password') {
        //   this.setState({
        //     forgetPassword : false,
        //   })
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
    this.setState(({ secureTextEntry }) => ({ secureTextEntry: !secureTextEntry }));
  }
  onSubmitPassword = () => {
    this.password.blur();
  }

  renderPasswordAccessory = () => {
    let { secureTextEntry, forgetPassword } = this.state;

    let name = secureTextEntry?
      'visibility':
      'visibility-off';

    /*Created Forget password by Link*/
    // if (forgetPassword) {
    //   return (
    //     <Hyperlink onLongPress={ (url, text) => alert(url + ", " + text) }
    //                style={{
    //       backgroundColor : 'red',
    //       zIndex : 9999
    //     }}
    //                onPress={() => {
    //       console.log('onPress')
    //                  alert('Hyperlink onPress');
    //     }}
    //                linkDefault={ true }>
    //       <Text style={{
    //         fontWeight : 'bold',
    //         fontSize : 14,
    //         color: 'rgba(95, 95, 95, 0.5)',
    //       }}>Quên mật khẩu?</Text>
    //     </Hyperlink>
    //   );
    // }

    if (forgetPassword )
      return (
        <Button title="Quên mật khẩu?"
                buttonStyle={{
                  padding : 0
                }}
                titleStyle={styles.forgetPasswordTitleButtonStyle}
                onPress={() => {
                  alert('Navigate to Forget Password Screen (Update soon)')
                }}
                type="clear"/>
      )

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
  onDisplayForgetPassword = () => {
    this.setState(({forgetPassword}) => ({
      forgetPassword : !forgetPassword
    }));
  }
  onSubmitPhone = () => {
    // Submit for next field not this current field.
    // this.password.focus();
  }
  render() {
    const { phone, password, secureTextEntry} = this.state;
    // let focusTextInput = this.password.isFocused();
    return (
      <View>
        <TextField
          ref={ref => this.phone = ref}
          baseColor="#e6e6e6"
          tintColor="#272066"
          keyboardType='phone-pad'
          label=''
          placeholder='Số điện thoại'
          value={phone}
          onChangeText={this.onChangeText}
          returnKeyType='next'
          onSubmitEditing={this.onSubmitPhone}
          inputContainerStyle={{
            borderBottomWidth : 1,
          }}
          renderLeftAccessory={() => {
            return (
              <View style={{
                paddingRight: 20,
                paddingLeft: 2
              }}>
                <Icons.PhoneIcon/>
              </View>
            )
          }}
          // error="Phone failed"
        />
        <TextField
          ref={ref => this.password = ref}
          // inputContainerPadding={20}
          // containerStyle={{
          //   backgroundColor : 'green',
          // }}
          // inputContainerStyleOverrides={{
          //   borderBottomWidth : 1,
          //   borderBottomColor : '#e6e6e6'
          // }}
          inputContainerStyle={{
            // paddingLeft : 50,
            // backgroundColor : 'red',
            borderBottomWidth : 1,
            // borderBottomColor : this.password.isFocused() ? '#e6e6e6' : ''
            // padding : 20,
            // paddingBottom : 20,
            // paddingTop : 25,
            // margin : 20
          }}
          // style={{
          //   borderBottomWidth : 1
          // }}
          baseColor="#e6e6e6"
          tintColor="#272066"
          secureTextEntry={secureTextEntry}
          label=''
          value={password}
          onChangeText={this.onChangeText}
          enablesReturnKeyAutomatically={true}
          returnKeyType='done'
          onSubmitEditing={this.onSubmitPassword}
          placeholder={'Mật khẩu'}
          // labelPadding={20}
          // affixTextStyle={{
          //   backgroundColor : 'red'
          // }}
          // containerStyle={{
          //   backgroundColor : 'yellow',
          //   padding : 20
          // }}
          renderLeftAccessory={() => {

            return (
              <View style={{
                paddingRight : 20,
                paddingLeft : 2
              }}>
                <Icons.LockIcon/>
              </View>
            )
            // return (
            //   <MaterialIcons
            //     size={24}
            //     style={{
            //       paddingRight : 20,
            //       paddingLeft : 2
            //     }}
            //     name={'visibility'}
            //     color={TextField.defaultProps.baseColor}
            //     onPress={this.onAccessoryPress}
            //     suppressHighlighting
            //   />
            // )
            /*END*/

            /*TODO: Use animation icons soon.*/
            // https://lottiefiles.com/479-micro-interaction-phone-ringing
            // https://lottiefiles.com/512-lock
            // return (
            //   <LottieView
            //     style={{
            //       // flex : 1,
            //       justifyContent : 'flex-start',
            //       width : 50,
            //       height : 50,
            //       backgroundColor : 'red',
            //       paddingRight : 20,
            //       paddingLeft : 2
            //     }}
            //     // source={require('../../assets/buttons/lock-for-password-primary-color.json')}
            //     source={require('../../assets/buttons/animation-w800-h600.json')}
            //     autoPlay
            //     loop
            //   />
            // )
            /*END*/
          }}
          renderAccessory={this.renderPasswordAccessory}
          onFocus={this.onDisplayForgetPassword}
          onBlur={this.onDisplayForgetPassword}
        />
        {/*Work with Boxshadow width*/}
        {/*https://gist.github.com/lunvjp/cff4845545062027f0b8d06d2e2ae9c7*/}
        <Button
          style={{
            backgroundColor: 'yellow',
            marginTop : 40,
            borderRadius: 23,
          }}
          // type="clear"

          loading={this.state.loadingSubmit}
          buttonStyle={styles.buttonStyle}
          loadingStyle={{
            marginVertical: 1
          }}
          textStyle={{textAlign: 'center'}}
          onPress={this.loginSubmit}
          title={'Đăng nhập ngay'}
          titleStyle={styles.titleStyle}
        />
        {/*<LottieView*/}
          {/*style={{*/}
            {/*paddingRight : 20,*/}
            {/*paddingLeft : 2*/}
          {/*}}*/}
          {/*source={require('../../assets/buttons/lock-for-password.json')}*/}
          {/*autoPlay*/}
          {/*loop*/}
        {/*/>*/}
      </View>
    );
  }
}

export default Fields;
