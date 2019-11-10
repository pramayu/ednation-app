import React, {Component} from 'react';
import {
  View, Text, Dimensions,
  TextInput, TouchableOpacity,
  Animated, Keyboard
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

var {height, width} = Dimensions.get('window');


class Form extends Component {
  render () {
    return (
      <View style={{width: '100%', paddingHorizontal: 20, marginTop: 50, backgroundColor: '#ffffff'}}>
        <View style={{flexDirection: 'row', borderBottomWidth: 1, borderColor: 'transparent', paddingBottom: 5, marginBottom: 25}}>
          <Ionicons name="ios-finger-print" size={22} color="#444" style={{alignSelf: 'flex-start', paddingTop: 5}}/>
          <TextInput keyboardType="email-address" autoCorrect={false} autoCapitalize="none" autoCompleteType="off" placeholder="Email Address." placeholderTextColor="#444" style={{paddingVertical: 0, width: '100%', height: 34, fontFamily: 'SourceSansPro-Regular', color: '#444', paddingLeft: 10}}/>
        </View>
        <View style={{flexDirection: 'row', borderBottomWidth: 1, borderColor: 'transparent', paddingBottom: 5, marginBottom: 25}}>
          <Ionicons name="ios-lock" size={24} color="#444" style={{alignSelf: 'flex-start', paddingTop: 5}}/>
          <TextInput secureTextEntry={true} placeholder="Password." placeholderTextColor="#444" style={{paddingVertical: 0, width: '100%', height: 34, fontFamily: 'SourceSansPro-Regular', color: '#444', paddingLeft: 10}}/>
        </View>
        <View style={{marginTop: 30}}>
          <TouchableOpacity style={{width: '100%', height: 40, borderRadius: 6, justifyContent: 'center', alignItems: 'center', backgroundColor: '#3951b4'}}>
            <Text style={{fontFamily: 'SourceSansPro-SemiBold', color: '#ffffff', fontSize: 14}}>SIGN IN</Text>
          </TouchableOpacity>
        </View>
        <View style={{alignItems: 'flex-end', marginTop: 20}}>
          <TouchableOpacity>
            <Text style={{fontFamily: 'SourceSansPro-SemiBold', fontSize: 13, color: '#7f8082'}}>Don't have an account?</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

export default Form;
