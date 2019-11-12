import React, {Component} from 'react';
import {
  View, Text, Dimensions,
  TextInput, TouchableOpacity,
  Animated, Keyboard, StatusBar
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { style } from '../../styles/sty';
import Header from '../../components/bio/header';
import Form from '../../components/bio/form';

var {height, width} = Dimensions.get('window');

class Bio extends Component {
  render () {
    return (
      <View style={[style.container, {paddingHorizontal: 20}]}>
        <StatusBar backgroundColor="#ffffff" barStyle="dark-content"/>
        <Header />
        <Text style={{fontFamily: 'PlayfairDisplay-Bold', fontSize: 32, color: '#444', marginTop: 10}}>Biodata</Text>
        <View style={{paddingRight: '40%'}}>
          <Text style={{fontFamily: 'SourceSansPro-Regular', fontSize: 14, color: '#626165', lineHeight: 20, marginTop: 10}}>Fill the form with valid data and describe yourself.</Text>
        </View>
        <Form />
      </View>
    )
  }
}

export default Bio;
