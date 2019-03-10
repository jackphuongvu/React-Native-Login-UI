import { StyleSheet } from 'react-native';
import * as dimension from '../../config/dimension'

const styles = StyleSheet.create({
  loginContainer : {
    flex : 1,
  },
  logoImageContainer : {
    alignItems : 'center',
    justifyContent : 'center'
  },
  logoImage : {
    justifyContent: 'center',
  },
  fieldContainer : {
    paddingHorizontal : 24,
  },
  mainTitle : {
    // fontFamily: "SFProDisplay",
    fontSize: 24,
    fontWeight: "300",
    fontStyle: "normal",
    letterSpacing: 0,
    color: "#5f5f5f",
  },
  desTitle : {
    fontSize: 18,
    fontWeight: "300",
    fontStyle: "normal",
    letterSpacing: 0,
    // TODO: Update "theme" folder of this project.
    color: 'rgba(95, 95, 95, 0.5)',
  },
  bottomContainer : {
    justifyContent : 'center',
    alignItems: 'center'
  },
  bottomContainerText : {
    fontSize: 14,
    fontWeight: "300",
    fontStyle: "normal",
    letterSpacing: 0,
    color: "#5f5f5f"
  },
  bottomContainerLink : {
    fontSize: 14,
    fontWeight: "bold",
    letterSpacing: 0,
    color: "#3b7cec",
    marginTop : 3,
    textDecorationLine : 'underline'
  },
});

const buttonStyle = {
  backgroundColor: '#00b937',
  borderRadius: 23,
  shadowColor: "#17984D",
  shadowOpacity: 0.5,
  shadowRadius: 19.6,
  shadowOffset: {
    height: 13.6,
    width: 0
  },
  paddingVertical : 13,
  marginTop : 40
}

const titleStyle = {
  lineHeight : 19,
  fontSize : 16
}

const forgetPasswordTitleButtonStyle = {
  fontWeight : 'bold',
  fontSize : 14,
  color: 'rgba(95, 95, 95, 0.5)',
  // backgroundColor : 'red',
  height : 16,
  lineHeight : 16
}

export {
  buttonStyle,
  titleStyle,
  forgetPasswordTitleButtonStyle
}

export default styles;
