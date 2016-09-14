import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  TabBarIOS
} from 'react-native';

import FullScreenImage from './FullScreenImage';

class PhotoTab extends Component {
  isActive = () => {
    return this.props.selectedTabName == this.props.title
  }

  render() {
    return (
     <TabBarIOS.Item
       title={this.props.title}
       icon={this.props.icon}
       selected={this.isActive()}
       onPress={() => {this.props.onPress(this.props.title)}}
       >
         <FullScreenImage image={this.props.image} />
     </TabBarIOS.Item>
     );
  }
}

PhotoTab.propTypes = {
  icon: React.PropTypes.node.isRequired,
  image: React.PropTypes.node.isRequired,
  title: React.PropTypes.string.isRequired,
  selectedTabName: React.PropTypes.string.isRequired
}

export default PhotoTab;