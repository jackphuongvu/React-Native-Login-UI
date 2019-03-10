import React from 'react';
import {View, Text} from 'react-native';
import { Button } from 'react-native-elements';
import PropTypes from 'prop-types';
import * as styles from './styles';

import AwesomeButton from "react-native-really-awesome-button";

class AppButton extends React.Component {
  static propTypes = {
    onPress: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired,
    type: PropTypes.func.isRequired
  }

  render() {
    const {
      title,
      type = 'clear',
      onPress
    } = this.props;

    if (type === 'solid')
      return (
        <AwesomeButton
          raiseLevel={1}
          backgroundColor={'#00b937'}
          backgroundShadow={'#17984D'}
          // backgroundActive={'#17984D'}
          backgroundDarker={'#008026'}
          borderRadius={23}
          borderWidth={0}
          height={46}
          stretch={true}
          style={{
            marginTop : 40,
            borderRadius: 23,
            shadowColor: "#17984D",
            shadowOpacity: 0.5,
            shadowRadius: 19.6,
            shadowOffset: {
              height: 10,
              // height: 5,
              width: 0
            },
          }}
          progress
          onPress={onPress}>
          <Text style={{
            fontSize : 16,
            color : '#ffffff'
          }}>{title}</Text>
        </AwesomeButton>
      )

    return (
      <Button type={type}
              buttonStyle={{
                padding: 0
              }}
              title={title}
              titleStyle={styles.titleStyle}
              onPress={onPress}/>
    )
  }
}

export default AppButton;
