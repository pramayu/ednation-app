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
        <View style={{width: '100%', height: height / 4.8, paddingHorizontal: 20}}>
          <View style={{flexDirection: 'row', width: '100%'}}>
            <View style={{width: width / 3.8, height: width / 3.8}}>
              <Image style={{width: '100%', height: '100%', resizeMode: 'cover', borderRadius: 50, borderWidth: 1, borderColor: '#ffffff'}}
                source={{uri: 'https://images.unsplash.com/photo-1525430182374-bf7e61d4f220?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=766&q=80'}}/>
            </View>
            <View style={{width: width / 1.6, height: '100%', paddingLeft: 20}}>
              <Text style={{fontFamily: 'PlayfairDisplay-Regular', color: '#ffffff', fontSize: 20}}>Luciana Zogbi</Text>
              <Text style={{fontFamily: 'Brandon_Regular', color: '#ffffff', fontSize: 16, marginTop: 2}}>Computer Network Engineering</Text>
              <Text style={{fontFamily: 'Brandon_Regular', color: '#ffffff', fontSize: 14}}>EXP +2400</Text>
              <TouchableOpacity>
                <Text style={{marginTop: 6, alignSelf: 'flex-start', fontFamily: 'SourceSansPro-SemiBold', fontSize: 12, color: '#BDA201', paddingHorizontal: 15, paddingVertical: 5, borderRadius: 4, backgroundColor: '#FFE339'}}>INVITE ME</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={{width: '100%', height: height / 1, backgroundColor: '#ffffff', borderRadius: 30, paddingHorizontal: 20, paddingTop:20}}>

        </View>
      </View>
    )
  }
}


export default AccountScreen;
