import React,{Component} from 'react';
import {View, Text, StyleSheet,ImageBackground,ScrollView ,Image,TouchableOpacity,Linking} from 'react-native';
import MyHeader from '../components/MyHeader';
import {RFValue} from 'react-native-responsive-fontsize'

 export default class ListScreen extends React.Component{
     render(){
         return(
            <ScrollView>
                 <MyHeader title = "THE ACCESSIBLE INDIA" navigation={this.props.navigation}/>
                 <View style = {{flex:1}}>
                     <Image source={require("../assets/LOGO.png")}
                     style={{width:400, height:350, alignSelf:"center",marginTop:RFValue(30)}}
                     />
                     <TouchableOpacity 
                 style={{ width:200,
                    height:80,
                    justifyContent:'center',
                    alignItems:'center',
                    alignSelf:"center",
                    backgroundColor:"#32867d",
                    shadowColor: "#000",
                    shadowOffset: {
                       width: 0,
                       height: 8,
                    },
                    shadowOpacity: 0.30,
                    shadowRadius: 10.32,
                    elevation: 16,}}
                    onPress={()=>{
                     Linking.openURL("https://drive.google.com/file/d/1XR_OZBTDvro12s92Xt4znj7IsKymh-wA/view?usp=sharing")
                    }}
                    >
                        <Text style={{textAlign:'center',fontSize:20,fontWeight:'bold',color:'white'}}>VIEW CALENDAR</Text>
                    </TouchableOpacity>
                 </View>
            </ScrollView>
         )
     }
 }
