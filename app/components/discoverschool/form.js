import React, {Component} from 'react';
import {
  View, Text, Dimensions,
  TextInput, TouchableOpacity,
  Animated, Keyboard
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

var {height, width} = Dimensions.get('window');


class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slideactive: false
    }
    this.slideup = new Animated.Value(0);
    this.slidedw = new Animated.Value(0);
  }

  componentDidMount = () => {
   this.keyboardDidShowListener = Keyboard.addListener(
     'keyboardDidShow',
     this._keyboardDidShow,
   );
   this.keyboardDidHideListener = Keyboard.addListener(
     'keyboardDidHide',
     this._keyboardDidHide,
   );
 }

 componentWillUnmount = () => {
   this.keyboardDidShowListener.remove();
   this.keyboardDidHideListener.remove();
 }

 _keyboardDidShow = () => {
   Animated.timing(this.slideup, {
     toValue: 1,
     duration: 400,
     useNativeDriver: true
   }).start((e) => {
     this.setState({slideactive: true})
     this.slidedw.setValue(0);
   });
 }

 _keyboardDidHide = () => {
   Animated.timing(this.slidedw, {
     toValue: 1,
     duration: 400,
     useNativeDriver: true
   }).start((e) => {
     this.setState({slideactive: false})
     this.slideup.setValue(0);
   });
 }

  render () {
    var slideupSty = this.slideup.interpolate({
      inputRange: [0, 1],
      outputRange: [0, -height / 3]
    });
    var slidedwSty = this.slidedw.interpolate({
      inputRange: [0, 1],
      outputRange: [-height / 3, 0]
    })
    return (
      <Animated.View style={{transform: [{translateY: this.state.slideactive === false ? slideupSty : slidedwSty}], width: '100%', paddingHorizontal: 20, marginTop: 50, backgroundColor: '#ffffff'}}>
        <View style={{flexDirection: 'row', borderBottomWidth: 1, borderColor: 'transparent', paddingBottom: 5, marginBottom: 25}}>
          <Ionicons name="ios-keypad" size={20} color="#444" style={{alignSelf: 'flex-start', paddingTop: 5}}/>
          <TextInput autoCorrect={false} autoCapitalize="none" autoCompleteType="off" placeholder="School Private Code." placeholderTextColor="#444" style={{paddingVertical: 0, width: '100%', height: 34, fontFamily: 'SourceSansPro-Regular', color: '#444', paddingLeft: 10}}/>
        </View>
        {
          this.props.accountype === 'student' ?
          <View style={{flexDirection: 'row', borderBottomWidth: 1, borderColor: 'transparent', paddingBottom: 5, marginBottom: 25}}>
            <Ionicons name="ios-filing" size={20} color="#444" style={{alignSelf: 'flex-start', paddingTop: 5}}/>
            <TextInput placeholder="Student ID." placeholderTextColor="#444" style={{paddingVertical: 0, width: '100%', height: 34, fontFamily: 'SourceSansPro-Regular', color: '#444', paddingLeft: 10}}/>
          </View> : this.props.accountype === 'teacher' ?
          <View style={{flexDirection: 'row', borderBottomWidth: 1, borderColor: 'transparent', paddingBottom: 5, marginBottom: 25}}>
            <Ionicons name="ios-filing" size={20} color="#444" style={{alignSelf: 'flex-start', paddingTop: 5}}/>
            <TextInput placeholder="Teacher ID." placeholderTextColor="#444" style={{paddingVertical: 0, width: '100%', height: 34, fontFamily: 'SourceSansPro-Regular', color: '#444', paddingLeft: 10}}/>
          </View> : null
        }
        <View style={{marginTop: 30}}>
          <TouchableOpacity style={{flexDirection: 'row',width: '100%', height: 40, borderRadius: 6, justifyContent: 'center', alignItems: 'center', backgroundColor: '#3951b4'}}>
            <Text style={{fontFamily: 'SourceSansPro-SemiBold', color: '#ffffff', fontSize: 14}}>FINISH</Text>
            <Ionicons name="ios-arrow-round-forward" size={24} color="#ffffff" style={{marginLeft: 10}}/>
          </TouchableOpacity>
        </View>
      </Animated.View>
    )
  }
}

export default Form;
