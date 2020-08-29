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
import{Icon} from 'react-native-elements';
import { FontAwesome, FontAwesome5 } from '@expo/vector-icons'; 
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
            tabBarIcon:<FontAwesome name="home" size={24} color="black" />,
              tabBarLabel: "List Screen"
          },
      
      },
      Search:{
          screen:SearchScreen,
          navigationOptions: {
                  tabBarIcon:<FontAwesome name="comments" size={24} color="black" />,       
              tabBarLabel: "View Comments"
          }
      },
      Blog:{
        screen:Blog,
        navigationOptions:{
          tabBarLabel:"Blog Screen",
          tabBarIcon:<FontAwesome5 name="blog" size={24} color="black" />
        }
      }
      
  })
   const AppDrawerNavigator = createDrawerNavigator({
    Home:{
        screen:AppTabNavigator,
        navigationOptions:{
          drawerIcon:<FontAwesome name="home" size={24} color="black" />
        }
       },
       Profile:{
        screen:Profile,
        navigationOptions:{
          drawerLabel:"Profile",
          drawerIcon:<FontAwesome name="address-book" size={24} color="black" />
        }
      },
    
    DisabilityInIndia:{
      screen:DisabilityInIndia,
      navigationOptions:{
    
        drawerLabel: "Disability in India",
        drawerIcon:<FontAwesome name="wheelchair" size={24} color="black" />
      }
    },
    DisabilityAndType:{
      screen:DisabilityAndType,
      navigationOptions:{
   
        drawerLabel: "Disability Encylopedia",
        drawerIcon:<FontAwesome name="wheelchair" size={24} color="black" />      }
    },
    Connect:{
      screen:Connect,
      navigationOptions:{
        
        drawerIcon:<FontAwesome name="handshake-o" size={24} color="black" />,
        drawerLabel: "Expert Connect"
      }
    },
    EmergencyConnect:{
      screen:MedicalConnect,
      navigationOptions:{
        drawerIcon:<FontAwesome5 name="clinic-medical" size={24} color="black" />,
        drawerLabel: "Emergency Connect"
      }
    },
    Education:{
      screen:Education,
      navigationOptions:{
        drawerIcon:<FontAwesome5 name="book-open" size={24} color="black" />,
        drawerLabel: "Education"
      }
    },
    Training:{
      screen:Training,
      navigationOptions:{
        drawerIcon:<FontAwesome5 name="chalkboard-teacher" size={24} color="black" />,
        drawerLabel: "Training"
      }
    },
    SkillDevelopment:{
      screen:SkillDevelopment,
      navigationOptions:{
        drawerIcon:<FontAwesome5 name="chart-line" size={24} color="black" />,
        drawerLabel: "Skill Development"
      }
    },
    
    
    
   
    SocialSecurity:{
      screen:SocialSecurity,
      navigationOptions:{
        drawerIcon:<FontAwesome5 name="shield-alt" size={28} color="black" />,
        drawerLabel: "Social Security"
      }
    },
    Events:{
      screen:Events,
      navigationOptions:{
        drawerIcon:<FontAwesome name="calendar" size={24} color="black" />,
        drawerLabel: "Events"
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