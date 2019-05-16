import React from 'react'
import { StyleSheet, Text, WebView } from 'react-native'
import {Constants} from 'expo'

export default class WebViewTwo extends React.Component {
    render() {
      return (
        <WebView
        source={{uri: 'https://qa-dmz.iot-ticket.com/Dashboard/#desktop/N5qVFm6Jxc8CEhkNGv10n5/1'}}
          style={{marginTop: Constants.statusBarHeight}}
        />
      );
    }
  }
