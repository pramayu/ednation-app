import React, {Component} from 'react';
import {
  View, Text, Dimensions,
  TextInput, TouchableOpacity,
  Animated, Keyboard
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

var {height, width} = Dimensions.get('window');


class Form extends Component {
  render() {
    return(
      <View style={{width: '100%', marginTop: 30, backgroundColor: '#ffffff'}}>
        <View style={{flexDirection: 'row'}}>
          <Ionicons name="ios-person" size={18} color="#3951b4"/>
          <Text style={{fontFamily: 'SourceSansPro-SemiBold', fontSize: 12, color: '#3951b4', marginLeft: 8, paddingTop: 5}}>FULLNAME</Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <TextInput editable={false} value={"NI PUTU INTAN PERMATASARI"} style={{marginBottom: 20, fontFamily: 'SourceSansPro-Regular', color: '#444', paddingHorizontal: 0, height: 34, fontSize: 14, width: '90%'}}/>
          <TouchableOpacity>
            <Ionicons name="ios-repeat" size={20} color="#dbd9d9" style={{paddingTop: 10}}/>
          </TouchableOpacity>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Ionicons name="ios-git-merge" size={18} color="#3951b4"/>
          <Text style={{fontFamily: 'SourceSansPro-SemiBold', fontSize: 12, color: '#3951b4', marginLeft: 8, paddingTop: 5}}>BIRTHDAY</Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <TextInput editable={false} value={"17 AUGUST 1995"} style={{marginBottom: 20, fontFamily: 'SourceSansPro-Regular', color: '#444', paddingHorizontal: 0, height: 34, fontSize: 14, width: '90%'}}/>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Ionicons name="ios-pin" size={18} color="#3951b4"/>
          <Text style={{fontFamily: 'SourceSansPro-SemiBold', fontSize: 12, color: '#3951b4', marginLeft: 8, paddingTop: 5}}>ADDRESS</Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <TextInput editable={false} value={"JL.BISMA NO.05 SINGARAJA"} style={{marginBottom: 20, fontFamily: 'SourceSansPro-Regular', color: '#444', paddingHorizontal: 0, height: 34, fontSize: 14, width: '90%'}}/>
          <TouchableOpacity>
            <Ionicons name="ios-repeat" size={20} color="#dbd9d9" style={{paddingTop: 10}}/>
          </TouchableOpacity>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Ionicons name="ios-call" size={18} color="#3951b4"/>
          <Text style={{fontFamily: 'SourceSansPro-SemiBold', fontSize: 12, color: '#3951b4', marginLeft: 8, paddingTop: 5}}>PHONE NUNBER</Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <TextInput editable={false} value={"+6282144880784"} style={{marginBottom: 20, fontFamily: 'SourceSansPro-Regular', color: '#444', paddingHorizontal: 0, height: 34, fontSize: 14, width: '90%'}}/>
          <TouchableOpacity>
            <Ionicons name="ios-repeat" size={20} color="#dbd9d9" style={{paddingTop: 10}}/>
          </TouchableOpacity>
        </View>
        <View style={{marginTop: 30}}>
          <TouchableOpacity style={{flexDirection: 'row',width: '100%', height: 40, borderRadius: 6, justifyContent: 'center', alignItems: 'center', backgroundColor: '#3951b4'}}>
            <Text style={{fontFamily: 'SourceSansPro-SemiBold', color: '#ffffff', fontSize: 14}}>YES IT'S ME</Text>
            <Ionicons name="ios-arrow-round-forward" size={24} color="#ffffff" style={{marginLeft: 10}}/>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

export default Form;
