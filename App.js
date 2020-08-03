import React from 'react';
import { Text, View } from 'react-native';
import SplashScreen from './screens/SplashScreen'
import WelcomeScreen from './screens/WelcomeScreen'
import {createAppContainer, createSwitchNavigator} from 'react-navigation'
export default function App () {
  return(
  <AppContainer/>

  );
}
const switchNavigator = createSwitchNavigator({
  SplashScreen : {screen: SplashScreen},
  WelcomeScreen:{screen:WelcomeScreen}
})
const AppContainer = createAppContainer(switchNavigator)