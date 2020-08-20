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
import Education from './screens/Education/Education';
import Events from './screens/Events';
import Connect from './screens/Expert Connect/Connect'
import MedicalConnect from './screens/MedicalConnect/EmergencyConnect';
import SkillDevelopment from './screens/SkillDevelopment';
import SocialSecurity from './screens/SocialSecurity';
import Training from './screens/Training';
import{createStackNavigator} from 'react-navigation-stack'
import ExpertConnect from './screens/Expert Connect/ExpertConnect'
import PhysioConnect from './screens/Expert Connect/Physio'
import Psycologist from './screens/Expert Connect/Psyco'
import Psychiatric from './screens/Expert Connect/Psychiatric'
import Appliances from './screens/Expert Connect/Appliances'
import EyeCare from './screens/MedicalConnect/EyeCare'
import Special from './screens/Education/Special'
import Blog from './screens/Blog'
import Profile from './screens/Profile';
export default function App () {
  return(
  <AppContainer/>

  );
}
const AppStackNavigator = createStackNavigator({
  
  Connect:{
    screen:Connect
  },
  ExpertConnect:{
    screen: ExpertConnect
  },
  PHYSIOTHERAPIST:{
    screen : PhysioConnect
  },
PSYCOLOGIST:{
  screen: Psycologist
},
PSYCHIATRIC:{
  screen:Psychiatric
},
TRANSPLANTS:{
screen:Appliances
},
MedicalConnect:{
  screen:MedicalConnect
},
EyeCare:{
  screen:EyeCare
},
Education:{
  screen:Education
},
SpecialEducation:{
screen:Special
},

},

  

)


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
      Blog:{
        screen:Blog,
        navigationOptions:{
          tabBarLabel:"Blog Screen"
        }
      }
      
  })
   const AppDrawerNavigator = createDrawerNavigator({
    Home:{
        screen:AppTabNavigator,
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
    Connect:{
      screen:Connect,
      navigationOptions:{
      
        drawerLabel: "Expert Connect"
      }
    },
    EmergencyConnect:{
      screen:MedicalConnect,
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
    
    Profile:{
      screen:Profile,
      navigationOptions:{
        drawerLabel:"profile"
      }
    },
   
    SocialSecurity:{
      screen:SocialSecurity,
      navigationOptions:{
      
        drawerLabel: "Social Security"
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
  StackNavigator: AppStackNavigator,
 

  
})
const AppContainer = createAppContainer(switchNavigator)