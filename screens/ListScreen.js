import React,{Component} from 'react';
import {View, Text, StyleSheet,ImageBackground,ScrollView ,Image,TouchableOpacity,Linking} from 'react-native';
import MyHeader from '../components/MyHeader';
import {RFValue} from 'react-native-responsive-fontsize'
import {Card} from 'react-native-elements'

 export default class ListScreen extends React.Component{
     render(){
         return(
            <ScrollView>
                 <MyHeader title = "THE ACCESSIBLE INDIA" navigation={this.props.navigation}/>
                 <View style = {{flex:1}}>
                     <Image source={require("../assets/calendar.png")}
                     style={{width:430, height:350, alignSelf:"center",marginTop:RFValue(60)}}
                     />
                     <Card>
                                              <TouchableOpacity 
                     onPress={()=>{
                         Linking.openURL("https://www.disabilitytalent.org/single-post/2019/12/31/2020-Diversity-Inclusion-Disability-Awareness-2020Calendar                         ")
                     }}
                     >
                         <Image source={require("../assets/event.png")}
                         style={{width:350, height:320,marginTop:RFValue(40), marginLeft:RFValue(5)}}
                         />
                     </TouchableOpacity>
                     </Card>
                     <Card>
                     <TouchableOpacity 
                     onPress={()=>{
                         Linking.openURL("https://specialolympicsbharat.org/calendar/ ")
                     }}
                     >
                         <Image source={require("../assets/sports.png")}
                         style={{width:350, height:400,marginTop:RFValue(40), marginLeft:RFValue(5)}}
                         />
                     </TouchableOpacity>
                     </Card>
                    
                 </View>
            </ScrollView>
         )
     }
 }
