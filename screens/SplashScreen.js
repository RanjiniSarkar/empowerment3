import React, {Component} from 'react';
import {View, Text, ImageBackground, Image} from "react-native";

var bg = require("../assets/background.png")
var logo = require("../assets/disability.png")

export default class SplashScreen extends React.Component{
    constructor(props){
        super(props)
    
    
setTimeout(() => {
  this.props.navigation.navigate('WelcomeScreen')  
}, 8000)
} 

render(){
        return(
        <ImageBackground source = {bg}
        style = {{width:"100%", height: "100%" }}
        >
             <View style = {{flex:1, marginTop:130, alignItems:'center'}}>
                 <Image source = {logo} style = {{width:400, height: 400}}></Image>
             </View>

        </ImageBackground>
        )
    }
}