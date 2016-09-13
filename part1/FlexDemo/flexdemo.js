
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

class FlexDemo extends Component {
  render() {
    return (
      <View style={styles.parent}>
        <Text style={styles.child}> Child One </Text>
        <Text style={styles.child}> Child Two </Text>
        <Text style={styles.child}> Child Three </Text>  
      </View>
      );
  }
}

const styles = StyleSheet.create({
  parent: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end',

    backgroundColor: '#2274A5',
    borderColor: '#185172',
    borderWidth: 5,
    marginTop: 30
  },
  child: {
    flex: 1,
    textAlign: 'center',

    borderColor: '#725D06',
    backgroundColor: '#F1C40F',
    borderWidth: 2,
    fontSize: 24,
  }
});

export default FlexDemo;