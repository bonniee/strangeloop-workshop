import React, { Component } from 'react';
import {StyleSheet,   ToolbarAndroid, View
} from 'react-native';

import FullScreenImage from './FullScreenImage';

class PhotoTab extends Component {
  isActive = () => {
    return this.props.selectedTabName == this.props.title
  }

  render() {
    if (!this.isActive()) {
      return null;
    }

    var toolbar = <ToolbarAndroid
      title={this.props.title}
      navIcon={require('../../img/ic_menu_black_24dp.png')}
      onIconClicked={() => {this.props.openDrawer()}}
      style={styles.toolbar}/>;

    return (
      <View style={{flex: 1}}>
        {toolbar}
        <FullScreenImage image={this.props.image} />
      </View>
     );
  }
}

var styles = StyleSheet.create({
  toolbar: {
    backgroundColor: '#e9eaed',
    height: 56
  },
  menuItem: {
    margin: 10,
    fontSize: 15,
    textAlign: 'left'
  }
});

export default PhotoTab;