import React, { Component } from 'react';
import {
  TabBarIOS
} from 'react-native';

class Navigation extends Component {
  render() {
    return (
      <TabBarIOS
        tintColor="white"
        barTintColor="deepskyblue">
        {this.props.children}
      </TabBarIOS>
    );
  }
}

export default Navigation;