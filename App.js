/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import SignInScreen from './app/screens/signin/signin';

const App: () => React$Node = () => {
  return <SignInScreen />
};

export default App;
