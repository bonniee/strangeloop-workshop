
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  AsyncStorage,
  Image
} from 'react-native';

import styles from './style';

const API_KEY = 'bbeb34ebf60ad50f7893e7440a1e2b0b';
const STORAGE_KEY = 'storedZipCode'

class Weather extends Component {
  constructor(props) {
    super(props);
    this.state = { zipCode: 10001 };

    AsyncStorage.getItem(STORAGE_KEY)
      .then((value) => {
        if (value !== null) {
          this.state = { zipCode: value }
        }
      })
      .catch((error) => console.log('AsyncStorage error: ' + error.message))
      .done();
  }

  componentDidMount() {
    this._fetchWeather(this.state.zipCode)
  }

  _handleTextChange = (event) => {
    var zipCode = event.nativeEvent.text
    this._fetchWeather(zipCode);

    AsyncStorage.setItem(STORAGE_KEY, zipCode)
      .then(() => console.log('Saved selection to disk: ' + zipCode))
      .catch((error) => console.log('AsyncStorage error: ' + error.message))
      .done();
  }

  _fetchWeather = (zipCode) => {
    this.setState({zipCode: zipCode});
    var url = `http://api.openweathermap.org/data/2.5/weather?q=${zipCode}&units=imperial&APPID=${API_KEY}`
    fetch(url)
      .then((response) => response.json())
      .then((responseJSON) => {
        this.setState({
          main: responseJSON.weather[0].main,
          description: responseJSON.weather[0].description,
          temp: parseInt(responseJSON.main.temp) + "°"
        });
      })
      .catch((error) => {
        console.warn(error);
      });
  }

  render() {
    return (
      <Image
        style={styles.container}
        source={require('./img/sky.jpg')}>
        <View style={styles.forecast}>
          <Text style={styles.location}>
            Current weather for
          </Text>

          <TextInput
            autoCapitalize="none"
            keyboardType="numeric"
            defaultValue={`${this.state.zipCode}`}
            style={styles.textInput}
            onSubmitEditing={(e) => this._handleTextChange(e)}
            />
        </View>

        <Text style={styles.temperature}>
          {this.state.temp}
        </Text>
      </Image>
      );
  }
}

export default Weather;