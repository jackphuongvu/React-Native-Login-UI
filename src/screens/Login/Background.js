import React, {Component} from 'react';
import {StyleSheet, ImageBackground, View} from 'react-native';
// import SvgUri from 'react-native-svg-uri';
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

const Background = (props) => (
  <View style={{
    flex : 1,
    // alignItems : 'center',
    // justifyContent : 'center',
  }}>
    <BackgroundSVG style={{
      position : 'absolute',
      top : 0,
      bottom : 0,
      left : 0,
      right : 0
    }}/>
    {props.children}
  </View>
)

export default Background;
