import React, {Component} from 'react';
import {StyleSheet, Image, ImageBackground} from 'react-native';

// import imgSrc from '../../assets/images';
import imgSrc from '../../assets/images/background.pdf';
  
class Background extends React.Component {

  render() {
    return (
      <ImageBackground style={{
        flex : 1,
        width : null,
        height : null,
        backgroundColor : '#ffffff'
      }}
                       source={imgSrc}
      //                  source={{
      //   uri : "https://www.guidedogs.org/wp-content/uploads/2018/01/Mobile.jpg"
      // }}

      >
        {this.props.children}
      </ImageBackground>
    );
    // src/assets/images/background.pdf
  }
}

export default Background;
