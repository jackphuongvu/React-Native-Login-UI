import React from "react";
import Svg, { G, Path } from "react-native-svg";
import styles from "../../config/styles";

const SvgPhoneIphone = props => <Svg width={24} height={24} viewBox="0 0 24 24" {...props}><G fill="none" fillRule="evenodd"><Path d="M0 0h24v24H0z" /><Path fill={props.fill || styles.inactiveGreyColor} d="M16.5 1h-8A2.5 2.5 0 0 0 6 3.5v17A2.5 2.5 0 0 0 8.5 23h8a2.5 2.5 0 0 0 2.5-2.5v-17A2.5 2.5 0 0 0 16.5 1zm-4 21c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm4.5-4H8V4h9v14z" /></G></Svg>;

export default SvgPhoneIphone;