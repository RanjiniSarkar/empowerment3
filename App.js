import React from 'react';
import { Text, View } from 'react-native';
import SplashScreen from './screens/SplashScreen'
import WelcomeScreen from './screens/WelcomeScreen'
import {createAppContainer, createSwitchNavigator} from 'react-navigation'
import {createBottomtabNavigator} from 'react-navigation-tabs';
import AppTabNavigator from './components/AppTabNavigator'
export default function App () {
  return(
  <AppContainer/>

  );
}
const switchNavigator = createSwitchNavigator({
  SplashScreen : {screen: SplashScreen},
  WelcomeScreen:{screen:WelcomeScreen},
  
})
const AppContainer = createAppContainer(switchNavigator)