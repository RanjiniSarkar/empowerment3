import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import SearchScreen from '../screens/SearchScreen';
import ListScreen from '../screens/ListScreen';



export const AppTabNavigator = createBottomTabNavigator({
  ListScreen : {
    screen: ListScreen,
    navigationOptions :{
      
      tabBarLabel : "List Screen",
    }
  },
  SearchScreen: {
    screen: SearchScreen,
    navigationOptions :{
      
      tabBarLabel : "Search",
    }
  }
});