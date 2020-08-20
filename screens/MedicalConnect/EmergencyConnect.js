import React,{Component} from 'react';
import {View, Text,TouchableOpacity,ScrollView,Image,StyleSheet,Linking} from 'react-native';
import {Card} from 'react-native-elements'
import MyHeader from '../../components/MyHeader'
export default class MedicalConnect extends React.Component{
    render(){

        return(
            <ScrollView>
                
                <View style = {{flex:1}}>
                      <MyHeader title = 'MEDICAL CONNECT' navigation={this.props.navigation}/>
                      <View>
                      <Card style = {styles.card}>
                          <Card>
                     <TouchableOpacity onPress = {()=>{
                         this.props.navigation.navigate("EyeCare")
                     }}>
                              <Image
                              source={require("../../assets/medical/EYE.png")}
                              style = {{ width:250,
                                height:130,
                                
                                alignSelf:'center'
                            }}
                              />
    
                          </TouchableOpacity>
                          </Card>
                          <Card>
                              <Text style = {styles.text}>
                              EYE CARE HOSPITALS IN INDIA

                              </Text>
                          </Card>
                      </Card>
                      <Card style = {styles.card}>
                          <Card>
                     <TouchableOpacity onPress = {()=>{
                        Linking.openURL("https://drive.google.com/file/d/1uFv3TmCoQPNTNjAbBOc269B1MJ2whk3B/view?usp=sharing")
                     }}>
                              <Image
                              source={require("../../assets/medical/ORTHOPADIC.png")}
                              style = {{ width:250,
                                height:200,
                                
                                alignSelf:'center'
                            }}
                              />
    
                          </TouchableOpacity>
                          </Card>
                          <Card>
                              <Text style = {styles.text}>
                              ORTHOPADIC HOSPITALS IN INDIA

                              </Text>
                          </Card>
                      </Card>
                      <Card style = {styles.card}>
                          <Card>
                     <TouchableOpacity onPress = {()=>{
                         Linking.openURL("https://www.google.co.in/search?biw=1280&bih=529&q=best+mental+health+hospital+in+india&npsic=0&rflfq=1&rlha=0&rllag=19937009,81100799,803528&tbm=lcl&ved=2ahUKEwjxne7CuZ3rAhXczjgGHXxwANIQjGp6BAgOEE4&rldoc=1#rlfi=hd:;si:;mv:[[29.5834187,89.3467898],[11.9756748,71.886865]];tbs:lrf:!1m4!1u3!2m2!3m1!1e1!1m4!1u2!2m2!2m1!1e1!2m1!1e2!2m1!1e3!3sIAE,lf:1,lf_ui:2                         ")
                     }}>
                              <Image
                              source={require("../../assets/medical/PSYCHOLOGY.png")}
                              style = {{ width:350,
                                height:270,
                                
                                alignSelf:'center'
                            }}
                              />
    
                          </TouchableOpacity>
                          </Card>
                          <Card>
                              <Text style = {styles.text}>
                              PSYCHOLOGY CLINIC-CENTRES IN INDIA

                              </Text>
                          </Card>
                      </Card>
                      <Card style = {styles.card}>
                          <Card>
                     <TouchableOpacity onPress = {()=>{
                      Linking.openURL("https://drive.google.com/file/d/1bqJxH5b-yKQqhpVedp3TwGTmZsCK-Z1Z/view?usp=sharing")
                     }}>
                              <Image
                              source={require("../../assets/medical/SPEECH.png")}
                              style = {{ width:300,
                                height:300,
                                
                                alignSelf:'center'
                            }}
                              />
    
                          </TouchableOpacity>
                          </Card>
                          <Card>
                              <Text style = {styles.text}>
                              SPEECH AND HEARING THERAPY IN INDIA

                              </Text>
                          </Card>
                      </Card>
     
                          
            
                      
                </View>
                </View>
            </ScrollView>
        )
    }}
    const styles = StyleSheet.create({
       
        text:{
            fontSize:20,
            marginTop:10,
            marginLeft:20,
            textAlign:"center",

        },
        text1:{
            marginLeft:240,
            fontSize:20,
            marginTop:-30
        },
        card:{
            padding:10,
            margin:10,
        }

    })