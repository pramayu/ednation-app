import {
  createAppContainer, createSwitchNavigator
 } from 'react-navigation';
 import { createStackNavigator } from 'react-navigation-stack';
// introScreenPath
import SplashScreen   from '../screens/splash/splash';
import SignUpScreen   from '../screens/signup/signup';
import SignInScreen   from '../screens/signin/signin';
import DiscoverSchool from '../screens/discoverschool/discoverschool';
import Bio            from '../screens/bio/bio';

var introScreenPath = createStackNavigator({
  SplashScreen    : {
    screen: SplashScreen
  },
  SignUpScreen    : {
    screen: SignUpScreen
  },
  SignInScreen    : {
    screen: SignInScreen
  },
  DiscoverSchool  : {
    screen: DiscoverSchool
  },
  Bio             : {
    screen: Bio
  }
}, {
  headerMode: 'none',
});


export var MainRoute = createAppContainer(createSwitchNavigator({
  IntroScreenPath: { screen: introScreenPath }
}));
