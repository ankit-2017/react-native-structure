/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import { Provider, connect } from 'react-redux';
import store from "./src/store";
import Navigator from '_navigations';


class App extends Component {
  render() {
    return (
      <Provider store={store} >
        <Navigator />
      </Provider>
    );
  }
}
  

export default App;
