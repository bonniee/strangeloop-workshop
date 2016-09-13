
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

import styles from './style';

class Weather extends Component {
  render() {
    return (
      <Image
        style={styles.container}
        source={require('./img/sky.jpg')}>
        <View style={styles.forecast}>
          <Text style={styles.location}>
            Current weather for 10001:
          </Text>

          <Text style={styles.description}>
            Clear
          </Text>

        </View>

        <Text style={styles.temperature}>
          80°
        </Text>
      </Image>
      );
  }
}

export default Weather;