import React, {Component} from 'react';
import {
  View, Text,
  Dimensions, TouchableOpacity
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { style } from '../../styles/sty';

var {width, height} = Dimensions.get('window');

var Header = () => {
  return (
    <View style={{width: '100%', height: height / 12}}>
      <View style={{width: '100%', height: '100%', flexDirection: 'row'}}>
        <View style={{width: '50%', height: '100%', justifyContent: 'center'}}>
          <View style={{flexDirection: 'row'}}>
            <Ionicons name="ios-flash" size={24} color="#3951b4" style={{alignSelf: 'flex-start'}}/>
            <Text style={[{color: '#444', fontSize: 14, letterSpacing: 1, paddingTop: 5, paddingLeft: 5, fontFamily: 'Brandon_Medium'}]}>EDNATION</Text>
          </View>
        </View>
        <View style={{width: '50%', height: '100%', justifyContent: 'center',alignItems: 'flex-end'}}>
          <TouchableOpacity>
            
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default Header;
