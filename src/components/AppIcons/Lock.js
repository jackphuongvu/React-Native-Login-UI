import React from "react";
import Svg, { G, Path } from "react-native-svg";
import styles from "../../config/styles";

const SvgLock = props => <Svg width={24} height={24} viewBox="0 0 24 24" {...props}><G fill="none" fillRule="evenodd"><Path d="M0 0h24v24H0z" /><Path fill={props.fill || styles.inactiveGreyColor} d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zM9 8V6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9z" /></G></Svg>;

export default SvgLock;