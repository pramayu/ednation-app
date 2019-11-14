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

// import { MainRoute } from './app/routes/index';
import AccountScreen from './app/screens/account/account';

const App: () => React$Node = () => {
  return <AccountScreen />
};

export default App;
