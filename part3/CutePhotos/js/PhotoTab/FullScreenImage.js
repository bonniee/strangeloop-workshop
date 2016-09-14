import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View,
  Image,
  StyleSheet
} from 'react-native';

class FullScreenImage extends Component {
  render() {
    return (
        <Image
          style={styles.image}
          source={this.props.image}/>
      );
  }
}

FullScreenImage.propTypes = {
  image: React.PropTypes.node.isRequired
};

const styles = StyleSheet.create({
  image: {
    flex: 1,
    resizeMode: 'cover',
    width: null,
    height: null
  }
});

export default FullScreenImage;