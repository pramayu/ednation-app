import React, {Component} from 'react';
import {
  View, Text, Dimensions,
  TextInput, TouchableOpacity,
  Animated, Keyboard, StatusBar,
  Image
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { style } from '../../styles/sty';
import Header from '../../components/account/header';

var {width, height} = Dimensions.get('window');

class AccountScreen extends Component {
  render() {
    return(
      <View style={[style.container, {backgroundColor: '#3951b4'}]}>
        <StatusBar backgroundColor="#3951b4" barStyle="light-content"/>
        <Header color={"#ffffff"}/>
        <View style={{width: '100%', height: height / 3.8, alignItems: 'center', justifyContent: 'flex-start'}}>
          <View style={{width: width / 4, height: width / 4}}>
            <Image style={{width: '100%', height: '100%', resizeMode: 'cover', borderRadius: 6, borderWidth: 1, borderColor: '#ffffff'}}
              source={{uri: 'https://cdn.dribbble.com/users/674925/screenshots/7560883/media/b3057cd6ac536c9f798ad4aac27fe345.jpg'}}/>
          </View>
          <Text style={{fontFamily: 'PlayfairDisplay-Regular', color: '#ffffff', fontSize: 22, marginTop: 10}}>Luciana Zogbi</Text>
          <Text style={{fontFamily: 'Brandon_Regular', color: '#ffffff', fontSize: 16, marginTop: 5}}>Computer Network Engineering</Text>
        </View>
        <View style={{width: '100%', height: height / 1, backgroundColor: '#ffffff', borderRadius: 30}}></View>
      </View>
    )
  }
}


export default AccountScreen;
