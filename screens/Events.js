import React,{Component} from 'react';
import {View, Text,TouchableOpacity,ScrollView,Image,StyleSheet,Linking} from 'react-native';
import {Card} from 'react-native-elements'
import MyHeader from '../components/MyHeader'
import {RFValue} from 'react-native-responsive-fontsize'
export default class Events extends React.Component{
    render(){

        return(
            <ScrollView>
                
                <View style = {{flex:1}}>
                      <MyHeader title = "EVENTS" navigation={this.props.navigation}/>
                      <View>
                      <Card style = {styles.card}>
                          <Card>
                     <TouchableOpacity onPress = {()=>{
                         Linking.openURL("https://specialolympicsbharat.org/calendar/                         ")
                     }}>
                              <Image
                              source={require("../assets/events/SPECIAL.png")}
                              style = {{ width:RFValue(300),
                                height:RFValue(80),
                                
                                alignSelf:'center'
                            }}
                              />
    
                          </TouchableOpacity>
                          </Card>
                          <Card>
                              <Text style = {styles.text}>
                        SKILL INDIA

                              </Text>
                          </Card>
                      </Card>
                      <Card style = {styles.card}>
                          <Card>
                     <TouchableOpacity onPress = {()=>{
                Linking.openURL("     https://www.swargafoundation.org/awareness-programs-on-neurological-disorders/          ")
                     }}>
                              <Image
                              source={require("../assets/events/SWARGA.png")}
                              style = {{ width:RFValue(300),
                                height:RFValue(180),
                                
                                alignSelf:'center'
                            }}
                              />
    
                          </TouchableOpacity>
                          </Card>
                          <Card>
                              <Text style = {styles.text}>
                              SWARGA MOTIVATIONAL TALKS

                              </Text>
                          </Card>
                      </Card>
                      <Card style = {styles.card}>
                          <Card>
                     <TouchableOpacity onPress = {()=>{
                        Linking.openURL("       https://yourstory.com/2017/12/differently-abled-women-champions                        ")
                     }}>
                              <Image
                              source={require("../assets/events/YOUR.png")}
                              style = {{ width:RFValue(300),
                                height:RFValue(100),
                                
                                alignSelf:'center'
                            }}
                              />
    
                          </TouchableOpacity>
                          </Card>
                          <Card>
                              <Text style = {styles.text}>
                              YOUR INSPIRATIONAL STORY

                              </Text>
                          </Card>
                      </Card>
                      <Card style = {styles.card}>
                          <Card>
                     <TouchableOpacity onPress = {()=>{
                         Linking.openURL("https://www.oneindia.com/feature/in-pics-10-extraordinary-personalities-with-disabilities-1580686.html                         ")
                     }}>
                              <Image
                              source={require("../assets/events/ONE.png")}
                              style = {{ width:RFValue(300),
                                height:130,
                                
                                alignSelf:'center'
                            }}
                              />
    
                          </TouchableOpacity>
                          </Card>
                          <Card>
                              <Text style = {styles.text}>
                              ONE INDIA INSPIRATIONAL STORIES


                              </Text>
                          </Card>
                      </Card>
                      <Card style = {styles.card}>
                          <Card>
                     <TouchableOpacity onPress = {()=>{
                         Linking.openURL("http://trinayani.org/whom-to-call-for-a-job/                         ")
                     }}>
                              <Image
                              source={require("../assets/events/BETTER.png")}
                              style = {{ width:300,
                                height:130,
                                
                                alignSelf:'center'
                            }}
                              />
    
                          </TouchableOpacity>
                          </Card>
                          <Card>
                              <Text style = {styles.text}>
                              BETTER INDIA INSPIRATIONALSTORY

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
            marginTop:RFValue(10),
            marginLeft:20,
            textAlign:"center",

        },
        text1:{
            marginLeft:RFValue(240),
            fontSize:20,
            marginTop:RFValue(-30)
        },
        card:{
            padding:10,
            margin:RFValue(10),
        }

    })