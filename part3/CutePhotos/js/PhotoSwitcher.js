import React, { Component } from 'react';
import {
  Text,
  TabBarIOS
} from 'react-native';

import Navigation from './Navigation';
import PhotoTab from './PhotoTab';

class PhotoSwitcher extends Component {
  constructor(props) {
    super(props);
    this.state = { selectedTab: "Dog" };
  }

  openDrawer = () => {
    this.refs.nav.openDrawer();
  }

  render() {
    var setTab = (title) => this.setState({selectedTab: title});
    return (
      <Navigation
        ref="nav"
        name={this.state.selectedTab}
        setTab={setTab}>
        <PhotoTab
          title="Dog"
          icon={require('../img/dogpaw.png')}
          image={require("../img/dog.jpg")}
          selectedTabName={this.state.selectedTab}
          onPress={setTab}
          openDrawer={this.openDrawer}/>
        <PhotoTab
          title="Cat"
          icon={require('../img/caticon.png')}
          selectedTabName={this.state.selectedTab}
          image={require("../img/cat.jpg")}
          onPress={setTab}
          openDrawer={this.openDrawer}/>
        <PhotoTab
          title="Sloth"
          icon={require('../img/slothicon.png')}
          selectedTabName={this.state.selectedTab}
          image={require("../img/sloth.jpg")}
          onPress={setTab}
          openDrawer={this.openDrawer}/>
      </Navigation>
    );
  }
}

export default PhotoSwitcher;