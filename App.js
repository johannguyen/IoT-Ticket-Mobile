import React from 'react';
import { StyleSheet, Text, WebView } from 'react-native';
import {Constants} from 'expo'

export default class App extends React.Component {
  render() {
    return (
      <WebView
      source={{uri: 'https://qa-dmz.iot-ticket.com'}}
        style={{marginTop: Constants.statusBarHeight}}
      />
    );
  }
}
