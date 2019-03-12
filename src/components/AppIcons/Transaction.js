import React from "react";
import Svg, { Path } from "react-native-svg";
import styles from "../../config/styles";

const SvgTransaction = props => <Svg width={28} height={24} viewBox="0 0 28 24" {...props}><Path fill={props.fill || styles.inactiveGreyColor} fillRule="nonzero" d="M16.51.031c.65 0 1.176.525 1.176 1.174v21.551c0 .648-.526 1.174-1.176 1.174h-4.98c-.65 0-1.177-.526-1.177-1.174V1.205c0-.649.527-1.174 1.176-1.174h4.98zm-1.177 21.552V2.378h-2.627v19.205h2.627zM6.157 9.77c.65 0 1.176.525 1.176 1.173v11.851c0 .649-.526 1.174-1.176 1.174h-4.98c-.65 0-1.177-.525-1.177-1.174V10.944c0-.648.527-1.173 1.176-1.173h4.98zM4.98 21.622v-9.505H2.353v9.505H4.98zM26.824 6.993c.65 0 1.176.526 1.176 1.174v14.628c0 .649-.526 1.174-1.176 1.174h-4.98c-.65 0-1.177-.525-1.177-1.174V8.167c0-.648.526-1.174 1.176-1.174h4.98zm-1.177 14.629V9.34H23.02v12.282h2.627z" /></Svg>;

export default SvgTransaction;