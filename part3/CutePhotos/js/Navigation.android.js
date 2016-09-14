import React, { Component } from 'react';
import {
  Text,
  ToolbarAndroid,
  DrawerLayoutAndroid,
  StyleSheet,
  View
} from 'react-native';

class DrawerItem extends Component {
  render() {
    return (
      <Text style={styles.menuItem}
            onPress={() => this.props.setTab(this.props.name)}>
        {this.props.name}
      </Text>
    );
  }
}

class Navigation extends Component {
  openDrawer = () => {
    this.refs.drawer.openDrawer();
  }

  render() {
    var navigationView = (
      <View style={{flex: 1, backgroundColor: '#ffffff'}}>
        <DrawerItem name="Cat" setTab={this.props.setTab}/>
        <DrawerItem name="Dog" setTab={this.props.setTab}/>
        <DrawerItem name="Sloth" setTab={this.props.setTab}/>
      </View>
      );

    return (
      <DrawerLayoutAndroid
        ref="drawer"
        drawerWidth={250}
        drawerPosition={DrawerLayoutAndroid.positions.Left}
        renderNavigationView={() => navigationView}>
        {this.props.children}
      </DrawerLayoutAndroid>
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

export default Navigation;