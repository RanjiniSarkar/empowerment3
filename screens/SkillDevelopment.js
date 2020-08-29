import React,{Component} from 'react';
import {View, Text,TouchableOpacity,ScrollView,Image,StyleSheet,Linking} from 'react-native';
import {Card,Icon,Header} from 'react-native-elements'
import MyHeader from '../components/MyHeader'
export default class SkillDevelopment extends React.Component{
    render(){

        return(
            <ScrollView>
                
                <View style = {{flex:1}}>
                <Header
          leftComponent={<Icon name='arrow-back' type='MaterialIcons' color='white'  onPress={() => this.props.navigation.navigate("List")}/>}
          centerComponent={{ text: "SKILL DEVELOPMENT", style: { color: '#ffffff', fontSize:20,fontWeight:"bold", } }}
         
          backgroundColor = "#32867d"
        />
                      <View>
                      <Card style = {styles.card}>
                          <Card>
                     <TouchableOpacity onPress = {()=>{
                         Linking.openURL("https://www.scpwd.in/                         ")
                     }}>
                              <Image
                              source={require("../assets/skill/SKILL.png")}
                              style = {{ width:220,
                                height:150,
                                
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
                Linking.openURL("https://nsdcindia.org/nos-listing/38                ")
                     }}>
                              <Image
                              source={require("../assets/skill/NSDC.png")}
                              style = {{ width:300,
                                height:130,
                                
                                alignSelf:'center'
                            }}
                              />
    
                          </TouchableOpacity>
                          </Card>
                          <Card>
                              <Text style = {styles.text}>
                              NATIONAL SKILL DEVELOPMENT CORPORATION

                              </Text>
                          </Card>
                      </Card>
                      <Card style = {styles.card}>
                          <Card>
                     <TouchableOpacity onPress = {()=>{
                        Linking.openURL("https://www.nationalskillsnetwork.in/skill-development-for-persons-with-disabilities/                        ")
                     }}>
                              <Image
                              source={require("../assets/skill/NATIONAL.png")}
                              style = {{ width:250,
                                height:150,
                                
                                alignSelf:'center'
                            }}
                              />
    
                          </TouchableOpacity>
                          </Card>
                          <Card>
                              <Text style = {styles.text}>
                              NATIONAL SKILLS NETWORK

                              </Text>
                          </Card>
                      </Card>
                      <Card style = {styles.card}>
                          <Card>
                     <TouchableOpacity onPress = {()=>{
                         Linking.openURL("https://www.ncbi.nlm.nih.gov/books/NBK310919/                         ")
                     }}>
                              <Image
                              source={require("../assets/skill/NCBI.png")}
                              style = {{ width:300,
                                height:130,
                                
                                alignSelf:'center'
                            }}
                              />
    
                          </TouchableOpacity>
                          </Card>
                          <Card>
                              <Text style = {styles.text}>
                        NATIONAL CENTER FOR BIOTECHNOLOGY INFORMATION

                              </Text>
                          </Card>
                      </Card>
                      <Card style = {styles.card}>
                          <Card>
                     <TouchableOpacity onPress = {()=>{
                         Linking.openURL("http://trinayani.org/whom-to-call-for-a-job/                         ")
                     }}>
                              <Image
                              source={require("../assets/skill/TRINAYANI.png")}
                              style = {{ width:300,
                                height:130,
                                
                                alignSelf:'center'
                            }}
                              />
    
                          </TouchableOpacity>
                          </Card>
                          <Card>
                              <Text style = {styles.text}>
                        TRINAYANI

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