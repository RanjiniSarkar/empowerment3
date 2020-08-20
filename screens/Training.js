import React,{Component} from 'react';
import {View, Text,TouchableOpacity,ScrollView,Image,StyleSheet,Linking} from 'react-native';
import {Card} from 'react-native-elements'
import MyHeader from '../components/MyHeader'
export default class Training extends React.Component{
    render(){

        return(
            <ScrollView>
                
                <View style = {{flex:1}}>
                      <MyHeader title = "TRAINING" navigation={this.props.navigation}/>
                      <View>
                      <Card style = {styles.card}>
                          <Card>
                     <TouchableOpacity onPress = {()=>{
                         Linking.openURL("http://atmavishwas.org/vocational-training-courses-programs-for-the-disabled-verna-goa-india.html                         ")
                     }}>
                              <Image
                              source={require("../assets/training/ATMAVISHWAS.png")}
                              style = {{ width:320,
                                height:100,
                                
                                alignSelf:'center'
                            }}
                              />
    
                          </TouchableOpacity>
                          </Card>
                          <Card>
                              <Text style = {styles.text}>
                        ATMAVISHWAS

                              </Text>
                          </Card>
                      </Card>
                      <Card style = {styles.card}>
                          <Card>
                     <TouchableOpacity onPress = {()=>{
                Linking.openURL("https://sarthakindia.org/skill-building.php                ")
                     }}>
                              <Image
                              source={require("../assets/training/SARTHAK.png")}
                              style = {{ width:300,
                                height:130,
                                
                                alignSelf:'center'
                            }}
                              />
    
                          </TouchableOpacity>
                          </Card>
                          <Card>
                              <Text style = {styles.text}>
                        

                              </Text>
                          </Card>
                      </Card>
                      <Card style = {styles.card}>
                          <Card>
                     <TouchableOpacity onPress = {()=>{
                        Linking.openURL("http://www.ayjnihh.nic.in/employment-vocational-training                        ")
                     }}>
                              <Image
                              source={require("../assets/training/AYJNISHD.png")}
                              style = {{ width:320,
                                height:30,
                                
                                alignSelf:'center'
                            }}
                              />
    
                          </TouchableOpacity>
                          </Card>
                          <Card>
                              <Text style = {styles.text}>
                              AYJNISHD

                              </Text>
                          </Card>
                      </Card>
                      <Card style = {styles.card}>
                          <Card>
                     <TouchableOpacity onPress = {()=>{
                         Linking.openURL("https://www.collegedekho.com/articles/best-courses-pwd-category-india/                         ")
                     }}>
                              <Image
                              source={require("../assets/training/COLLEGE.png")}
                              style = {{ width:300,
                                height:130,
                                
                                alignSelf:'center'
                            }}
                              />
    
                          </TouchableOpacity>
                          </Card>
                          <Card>
                              <Text style = {styles.text}>
                        COLLEGE DEKHO

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