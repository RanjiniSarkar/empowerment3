import React from 'react';
import { Text, View } from 'react-native';
import SplashScreen from './screens/SplashScreen'
import WelcomeScreen from './screens/WelcomeScreen'
import {createAppContainer, createSwitchNavigator} from 'react-navigation'
import {createBottomTabNavigator} from 'react-navigation-tabs'
import ListScreen from './screens/ListScreen';
import SearchScreen from './screens/SearchScreen';
import CustomSideBarMenu from './components/CustomSideBarMenu';
import SettingScreen from './screens/SettingScreen';
import {createDrawerNavigator} from 'react-navigation-drawer';
import DisabilityAndType from './screens/DisabilityAndType';
import DisabilityInIndia from './screens/DisabilityInIndia';
import Education from './screens/Education';
import Events from './screens/Events';
import ExpertConnect from './screens/ExpertConnect';
import EmergencyConnect from './screens/EmergencyConnect';
import SkillDevelopment from './screens/SkillDevelopment';
import SocialSecurity from './screens/SocialSecurity';
import Training from './screens/Training';
import InspirationalStories from './screens/InspirationalStories'
export default function App () {
  return(
  <AppContainer/>

  );
}

const AppTabNavigator = createBottomTabNavigator({
  List:{
          screen:ListScreen,
          navigationOptions: {
              
              tabBarLabel: "List Screen"
          },
      
      },
      Search:{
          screen:SearchScreen,
          navigationOptions: {
                         
              tabBarLabel: "Search Screen"
          }
      },
      
  })
   const AppDrawerNavigator = createDrawerNavigator({
    Home:{
        screen:AppTabNavigator,
       },
    Settings:{
      screen:SettingScreen,
      navigationOptions:{
      
        drawerLabel: "Settings"
      }
    },
    DisabilityInIndia:{
      screen:DisabilityInIndia,
      navigationOptions:{
      
        drawerLabel: "Disability in India"
      }
    },
    DisabilityAndType:{
      screen:DisabilityAndType,
      navigationOptions:{
      
        drawerLabel: "Disability And Type wise encylopedia"
      }
    },
    ExpertConnect:{
      screen:ExpertConnect,
      navigationOptions:{
      
        drawerLabel: "Expert Connect"
      }
    },
    EmergencyConnect:{
      screen:EmergencyConnect,
      navigationOptions:{
      
        drawerLabel: "Emergency Connect"
      }
    },
    Education:{
      screen:Education,
      navigationOptions:{
      
        drawerLabel: "Education"
      }
    },
    Training:{
      screen:Training,
      navigationOptions:{
      
        drawerLabel: "Training"
      }
    },
    SkillDevelopment:{
      screen:SkillDevelopment,
      navigationOptions:{
      
        drawerLabel: "Skill Development"
      }
    },
    Events:{
      screen:Events,
      navigationOptions:{
      
        drawerLabel: "Events"
      }
    },
    
    
   
    SocialSecurity:{
      screen:SocialSecurity,
      navigationOptions:{
      
        drawerLabel: "Social Security"
      }
    },
    InspirationalStories:{
      screen:InspirationalStories,
      navigationOptions:{
      
        drawerLabel: "Inspirational Stories"
      }
    },
    
    
},
{
    contentComponent:CustomSideBarMenu
},
{
    initialRouteName:'Home'
})


    const switchNavigator = createSwitchNavigator({
  SplashScreen : {screen: SplashScreen},
  WelcomeScreen:{screen:WelcomeScreen},
  AppDrawNavigator : AppDrawerNavigator,
  
})
const AppContainer = createAppContainer(switchNavigator)