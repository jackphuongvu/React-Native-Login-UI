import React, {Component} from 'react';
import {StyleSheet, ImageBackground, View} from 'react-native';
import {KeyboardAvoidingView} from 'react-native';
import Svg,{
  Circle,
  Ellipse,
  G,
  Text,
  TSpan,
  TextPath,
  Path,
  Polygon,
  Polyline,
  Line,
  Rect,
  Use,
  Image,
  Symbol,
  Defs,
  LinearGradient,
  RadialGradient,
  Stop,
  ClipPath,
  Pattern,
  Mask,
} from 'react-native-svg';

import imgSrc from '../../assets/images/background.svg';
import BackgroundSVG from '../../assets/images/background.svg';
import * as dimension from '../../config/dimension'

/*Use Background Image from react-native to display Background.*/
// class Background extends React.Component {
//   render() {
//     return (
//       <ImageBackground style={{
//         flex : 1,
//         width : null,
//         height : null,
//         backgroundColor : '#ffffff'
//       }}
//                        source={imgSrc}
//       //                  source={{
//       //   uri : "https://www.guidedogs.org/wp-content/uploads/2018/01/Mobile.jpg"
//       // }}
//       >
//         {this.props.children}
//       </ImageBackground>
//     );
//   }
// }

// 2.
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

// const Background = (props) => (
//   <View style={{
//     flex : 1
//   }}>
//     <BackgroundSVG style={{
//       position : 'absolute',
//       top : 0,
//       bottom : 0,
//       left : 0,
//       right : 0,
//     }}/>
//     <KeyboardAvoidingView behavior="padding" enabled>
//       {props.children}
//     </KeyboardAvoidingView>
//   </View>
// )

const BackgroundFix = (props) => (
  <KeyboardAvoidingView enabled
                        behavior="padding"
                        style={{flex : 1}}>
    <BackgroundSVG style={{
      position : 'absolute',
      top : 0,
      bottom : 0,
      left : 0,
      right : 0,
    }}/>
    {props.children}
  </KeyboardAvoidingView>
)

export default BackgroundFix;
