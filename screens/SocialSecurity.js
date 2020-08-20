import React,{Component} from 'react';
import {View, Text,TouchableOpacity,ScrollView,Image,StyleSheet,Linking} from 'react-native';
import {Card} from 'react-native-elements'
import MyHeader from '../components/MyHeader'
export default class SocialSecurity extends React.Component{
    render(){

        return(
            <ScrollView>
                
                <View style = {{flex:1}}>
                      <MyHeader title = "SOCIAL SECURITY" navigation={this.props.navigation}/>
                      <View>
                      <Card style = {styles.card}>
                          <Card>
                     <TouchableOpacity onPress = {()=>{
                         Linking.openURL("https://www.ncpedp.org/youth                         ")
                     }}>
                              <Image
                              source={require("../assets/social/NCPEDP.png")}
                              style = {{ width:300,
                                height:130,
                                
                                alignSelf:'center'
                            }}
                              />
    
                          </TouchableOpacity>
                          </Card>
                          <Card>
                              <Text style = {styles.text}>
                              NATIONAL CENTRE FOR PROMOTION OF EMPLOYMENT OF DISABLED PEOPLE

                              </Text>
                          </Card>
                      </Card>
                      <Card style = {styles.card}>
                          <Card>
                     <TouchableOpacity onPress = {()=>{
                Linking.openURL("   https://www.apd-india.org/                ")
                     }}>
                              <Image
                              source={require("../assets/social/APD-INDIA.png")}
                              style = {{ width:250,
                                height:300,
                                
                                alignSelf:'center'
                            }}
                              />
    
                          </TouchableOpacity>
                          </Card>
                          <Card>
                              <Text style = {styles.text}>
                              THE ASSOCIATION OF PEOPLE WITH DISABILITY (APD), INDIA

                              </Text>
                          </Card>
                      </Card>
                      <Card style = {styles.card}>
                          <Card>
                     <TouchableOpacity onPress = {()=>{
                        Linking.openURL("       http://nhfdc.nic.in/default.aspx                        ")
                     }}>
                              <Image
                              source={require("../assets/social/NHFDC.png")}
                              style = {{ width:280,
                                height:150,
                                
                                alignSelf:'center'
                            }}
                              />
    
                          </TouchableOpacity>
                          </Card>
                          <Card>
                              <Text style = {styles.text}>
                              NATIONAL HANDICAPED FINANCE AND DEVELOPMENT CORPORATION

                              </Text>
                          </Card>
                      </Card>
                      <Card style = {styles.card}>
                          <Card>
                     <TouchableOpacity onPress = {()=>{
                         Linking.openURL("https://www.enableindia.org/                         ")
                     }}>
                              <Image
                              source={require("../assets/social/ENABLE.png")}
                              style = {{ width:320,
                                height:130,
                                
                                alignSelf:'center'
                            }}
                              />
    
                          </TouchableOpacity>
                          </Card>
                          <Card>
                              <Text style = {styles.text}>
                              ENABLE INDIA


                              </Text>
                          </Card>
                      </Card>
                      <Card style = {styles.card}>
                          <Card>
                     <TouchableOpacity onPress = {()=>{
                         Linking.openURL("https://equallyable.org/                         ")
                     }}>
                              <Image
                              source={require("../assets/social/SWAVLAMBAN.png")}
                              style = {{ width:300,
                                height:70,
                                
                                alignSelf:'center'
                            }}
                              />
    
                          </TouchableOpacity>
                          </Card>
                          <Card>
                              <Text style = {styles.text}>
                              SWAVLAMBAN

                              </Text>
                          </Card>
                      </Card>
                      <Card style = {styles.card}>
                          <Card>
                     <TouchableOpacity onPress = {()=>{
                         Linking.openURL("https://labour.gov.in/vrc                         ")
                     }}>
                              <Image
                              source={require("../assets/social/VRC.png")}
                              style = {{ width:320,
                                height:100,
                                
                                alignSelf:'center'
                            }}
                              />
    
                          </TouchableOpacity>
                          </Card>
                          <Card>
                              <Text style = {styles.text}>
                              VRC

                              </Text>
                          </Card>
                      </Card>
                   
                      <Card style = {styles.card}>
                          <Card>
                     <TouchableOpacity onPress = {()=>{
                         Linking.openURL("https://www.aarogya.com/support-groups/disability/indian-organizations-for-persons-with-disability.html?showall=1                         ")
                     }}>
                              <Image
                              source={require("../assets/social/AAROGYA.png")}
                              style = {{ width:300,
                                height:100,
                                
                                alignSelf:'center'
                            }}
                              />
    
                          </TouchableOpacity>
                          </Card>
                          <Card>
                              <Text style = {styles.text}>
                              AAROGYA

                              </Text>
                          </Card>
                      </Card>
                      <Card style = {styles.card}>
                          <Card>
                     <TouchableOpacity onPress = {()=>{
                         Linking.openURL("https://en.wikipedia.org/wiki/Rehabilitation_Council_of_India                         ")
                     }}>
                              <Image
                              source={require("../assets/social/REHAB.png")}
                              style = {{ width:300,
                                height:180,
                                
                                alignSelf:'center'
                            }}
                              />
    
                          </TouchableOpacity>
                          </Card>
                          <Card>
                              <Text style = {styles.text}>
                              REHAB COUNCIL OF INDIA

                              </Text>
                          </Card>
                      </Card>
                      <Card style = {styles.card}>
                          <Card>
                     <TouchableOpacity onPress = {()=>{
                         Linking.openURL("https://www.abcindia.org/                         ")
                     }}>
                              <Image
                              source={require("../assets/social/ABC.png")}
                              style = {{ width:300,
                                height:130,
                                
                                alignSelf:'center'
                            }}
                              />
    
                          </TouchableOpacity>
                          </Card>
                          <Card>
                              <Text style = {styles.text}>
                              ASHA BHAVAN CENTER

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