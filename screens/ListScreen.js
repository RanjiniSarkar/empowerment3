import React,{Component} from 'react';
import {View, Text, StyleSheet,ImageBackground} from 'react-native';
 var bg = require("../assets/disability.png")

 export default class ListScreen extends React.Component{
     render(){
         return(
            <ImageBackground source = {bg}
            style = {{width:400, height: 400, marginTop:100 }}
            ></ImageBackground>
         )
     }
 }
