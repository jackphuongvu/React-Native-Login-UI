import React from 'react';
import {Image, StyleSheet} from 'react-native';
import images from '../config/images';

const headerNavigationOptions = {
  headerTitle : () => (
    <Image
      style={styles.stretch}
      source={images.LOGO}
    />
  )
}

const styles = StyleSheet.create({
  stretch : {
    width : 53,
    height : 143
  }
});

export default headerNavigationOptions;
