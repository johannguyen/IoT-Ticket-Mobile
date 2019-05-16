import React from 'react';
import { StyleSheet, Text, WebView } from 'react-native';
import {createStackNavigator, createAppContainer, createSwitchNavigator, createBottomTabNavigator} from 'react-navigation'
import {Constants} from 'expo'
import WebViewOne from './WebViewOne'
import WebViewTwo from './WebViewTwo';

const MainNavigator = createBottomTabNavigator({
  WebViewOne: WebViewOne,
  WebViewTwo: WebViewTwo
},{
  tabBarOptions:{
      activeTintColor:'#a41034'
  }
});

const MainContainer = createAppContainer(MainNavigator);

export default class App extends React.Component {
  render() {
    return (
      <MainContainer/>
    );
  }
}
