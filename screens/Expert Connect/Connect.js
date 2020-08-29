import React,{Component} from 'react';
import {View, Text,TouchableOpacity,ScrollView,Image,StyleSheet,Linking} from 'react-native';
import {Card,Icon,Header} from 'react-native-elements'



export default class Connect extends React.Component{
    render(){

        return(
            <ScrollView>
                 <Header
          leftComponent={<Icon name='arrow-back' type='MaterialIcons' color='white'  onPress={() => this.props.navigation.navigate("List")}/>}
          centerComponent={{ text: "EXPERT CONNECT", style: { color: '#ffffff', fontSize:20,fontWeight:"bold", } }}
         
          backgroundColor = "#32867d"
        />

             
                      <Card style = {styles.card}>
                          <Card>
                     <TouchableOpacity onPress = {()=>{
                         this.props.navigation.navigate("ExpertConnect")
                     }}>
                              <Image
                              source={require("../../assets/expertConnect.png")}
                              style = {{ width:130,
                                height:130,
                                
                                alignSelf:'center'
                            }}
                              />
    
                          </TouchableOpacity>
                          </Card>
                          <Card>
                              <Text style = {styles.text}>
                            EXPERT CONNECT

                              </Text>
                          </Card>
                      </Card>
                      <Card style = {styles.card}>
                          <Card>
                     <TouchableOpacity onPress = {()=>{
                         this.props.navigation.navigate("PHYSIOTHERAPIST")
                     }}>
                              <Image
                              source={require("../../assets/expert/PHYSIOTHERAPIST.png")}
                              style = {{ width:130,
                                height:130,
                                
                                alignSelf:'center'
                            }}
                              />
    
                          </TouchableOpacity>
                          </Card>
                          <Card>
                              <Text style = {styles.text}>
                        PHYSIOTHERAPIST

                              </Text>
                          </Card>
                      </Card>
                      <Card style = {styles.card}>
                          <Card>
                     <TouchableOpacity onPress = {()=>{
                         this.props.navigation.navigate("PSYCHIATRIC")
                     }}>
                              <Image
                              source={require("../../assets/expert/PSYCHIATRIST.png")}
                              style = {{ width:260,
                                height:130,
                                
                                alignSelf:'center'
                            }}
                              />
    
                          </TouchableOpacity>
                          </Card>
                          <Card>
                              <Text style = {styles.text}>
                              PSYCHIATRIC

                              </Text>
                          </Card>
                      </Card>
                      <Card style = {styles.card}>
                          <Card>
                     <TouchableOpacity onPress = {()=>{
                         this.props.navigation.navigate("PSYCOLOGIST")
                     }}>
                              <Image
                              source={require("../../assets/expert/PSYCOLOGIST.png")}
                              style = {{ width:130,
                                height:130,
                                
                                alignSelf:'center'
                            }}
                              />
    
                          </TouchableOpacity>
                          </Card>
                          <Card>
                              <Text style = {styles.text}>
                        PSYCOLOGIST

                              </Text>
                          </Card>
                      </Card>
                      <Card style = {styles.card}>
                          <Card>
                     <TouchableOpacity onPress = {()=>{
                         this.props.navigation.navigate("TRANSPLANTS")
                     }}>
                              <Image
                              source={require("../../assets/expert/APPLIANCESANDTRANSPLANTS.png")}
                              style = {{ width:250,
                                height:150,
                                alignSelf:'center'
                                
                            }}
                              />
    
                          </TouchableOpacity>
                          </Card>
                          </Card>
                      <Card style = {styles.card}>
                          <Card>
                     <TouchableOpacity onPress = {()=>{
                        Linking.openURL("https://drive.google.com/file/d/1h17w7l2IixDJQ04QFojVVs7QdOMz1Zh3/view?usp=sharing")
                     }}>
                              <Image
                              source={require("../../assets/expert/SPEECH.png")}
                              style = {{ width:250,
                                height:150,
                                alignSelf:'center'
                                
                            }}
                              />
    
                          </TouchableOpacity>
                          </Card>
                          <Card>
                              <Text style = {styles.text}>
                            
SPEECH AND AUDIO THERAPIST
                              </Text>
                          </Card>
                      </Card>
                      <Card style = {styles.card}>
                          <Card>
                     <TouchableOpacity onPress = {()=>{
                        Linking.openURL("https://drive.google.com/file/d/1o9bN7jE7RqvtRqFY8MH7dtS2P2Y_bs8a/view?usp=sharing")
                     }}>
                              <Image
                              source={require("../../assets/expert/VISION.png")}
                              style = {{ width:320,
                                height:130,
                                alignSelf:'center'
                                
                            }}
                              />
    
                          </TouchableOpacity>
                          </Card>
                          <Card>
                              <Text style = {styles.text}>
                            
                          VISION AND HEARING AIDS
                              </Text>
                          </Card>
                          </Card>
                          <Card style = {styles.card}>
                          <Card>
                     <TouchableOpacity onPress = {()=>{
                        Linking.openURL("http://www.udaan.org/misc/home.html                       ")
                     }}>
                              <Image
                              source={require("../../assets/expert/AUTISM.png")}
                              style = {{ width:320,
                                height:130,
                                alignSelf:'center'
                                
                            }}
                              />
    
                          </TouchableOpacity>
                          </Card>
                          <Card>
                              <Text style = {styles.text}>
                            
                          AUTISM SPECTRUM DISORDER
                              </Text>
                          </Card>
                          </Card>
                          <Card style = {styles.card}>
                          
                     <TouchableOpacity onPress = {()=>{
                        Linking.openURL("https://www.thelivelovelaughfoundation.org/therapist.html                        ")
                     }}>
                             <Text style = {styles.text}>
                            
                            THERAPIST
                                </Text>
                          </TouchableOpacity>
                         
                        
                              
                          </Card>
                          
            
                      
         
                
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