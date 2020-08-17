import React,{Component} from 'react';
import {View, Text, TouchableOpacity,ScrollView,Linking,StyleSheet,Image} from 'react-native';
import{Card} from 'react-native-elements'
import MyHeader from '../components/MyHeader'
export default class DisabilityInIndia extends React.Component{
    render(){

        return(
            <ScrollView>
                  <View style = {{flex:1}}>
                      <MyHeader title = 'Disability In India'/>
                      <View>
                      <Card style = {styles.card}>
                          <Card>
                     <TouchableOpacity onPress = {()=>{
                         Linking.openURL("https://www.prsindia.org/uploads/media/Person%20with%20Disabilities/Rights%20of%20Persons%20with%20Disabilities%20Act,%202016.pdf                         ")
                     }}>
                              <Image
                              source={require("../assets/disabilityInIndia/1.png")}
                              style = {{ width:164,
                                height:300,
                                marginTop:30,
                                alignSelf:'center'
                            }}
                              />
    
                          </TouchableOpacity>
                          </Card>
                          <Card>
                              <Text style = {styles.text}>
                             Act Name : THE RIGHTS OF PERSONS WITH DISABILITY ACT - RPWD

                              </Text>
                          </Card>
                      </Card>
                      </View>
                      <View>
                      <Card style = {styles.card}>
                          <Card>
                     <TouchableOpacity onPress = {()=>{
                         Linking.openURL("https://mhrd.gov.in/rte ")
                     }}>
                              <Image
                              source={require("../assets/disabilityInIndia/2.png")}
                              style = {{ width:190,
                                height:330,
                                marginTop:30,
                                alignSelf:'center'
                            }}
                              />
    
                          </TouchableOpacity>
                          </Card>
                          <Card>
                              <Text style = {styles.text}>
                             Act Name : THE RIGHT TO EDUCATION - RTE



                              </Text>
                          </Card>
                      </Card>
                      </View>
                      <View>
                      <Card style = {styles.card}>
                          <Card>
                     <TouchableOpacity onPress = {()=>{
                         Linking.openURL("http://www.rehabcouncil.nic.in/  ")
                     }}>
                              <Image
                              source={require("../assets/disabilityInIndia/3.png")}
                              style = {{ width:303,
                                height:191,
                                marginTop:30,
                                alignSelf:'center'
                            }}
                              />
    
                          </TouchableOpacity>
                          </Card>
                          <Card>
                              <Text style = {styles.text}>
                             Act Name : REHABILITATION COUNCIL OF INDIA - RCI


                              </Text>
                          </Card>
                      </Card>
                      </View>
                      <View>
                      <Card style = {styles.card}>
                          <Card>
                     <TouchableOpacity onPress = {()=>{
                         Linking.openURL("https://dredf.org/  ")
                     }}>
                              <Image
                              source={require("../assets/disabilityInIndia/4.png")}
                              style = {{ width:310,
                                height:131,
                                marginTop:30,
                                alignSelf:'center'
                            }}
                              />
    
                          </TouchableOpacity>
                          </Card>
                          <Card>
                              <Text style = {styles.text}>
                             Act Name : DISABILITY RIGHTS EDUCATION AND DEFENSE FUND - DREDF


                              </Text>
                          </Card>
                      </Card>
                      </View>
                      <View>
                      <Card style = {styles.card}>
                          <Card>
                     <TouchableOpacity onPress = {()=>{
                         Linking.openURL("http://disabilityaffairs.gov.in/content/    ")
                     }}>
                              <Image
                              source={require("../assets/disabilityInIndia/5.png")}
                              style = {{ width:315,
                                height:220,
                                marginTop:30,
                                alignSelf:'center'
                            }}
                              />
    
                          </TouchableOpacity>
                          </Card>
                          <Card>
                              <Text style = {styles.text}>
                             Act Name :DIVYANGJAN


                              </Text>
                          </Card>
                      </Card>
                      </View>
                      <View>
                      <Card style = {styles.card}>
                          <Card>
                     <TouchableOpacity onPress = {()=>{
                         Linking.openURL("http://niepmd.tn.nic.in/index.php                         ")
                     }}>
                              <Image
                              source={require("../assets/disabilityInIndia/6.png")}
                              style = {{ width:196,
                                height:209,
                                marginTop:30,
                                alignSelf:'center'
                            }}
                              />
    
                          </TouchableOpacity>
                          </Card>
                          <Card>
                              <Text style = {styles.text}>
                             Act Name :NATIONAL INSTITUTE FOR EMPOWERMENT OF PERSONS WITH MULTIPLE DISABILITIES



                              </Text>
                          </Card>
                      </Card>
                      </View>
                      <View>
                      <Card style = {styles.card}>
                          <Card>
                     <TouchableOpacity onPress = {()=>{
                         Linking.openURL("https://en.wikipedia.org/wiki/Atmanirbhar_Bharat")
                     }}>
                              <Image
                              source={require("../assets/disabilityInIndia/7.png")}
                              style = {{ width:181,
                                height:220,
                                marginTop:30,
                                alignSelf:'center'
                            }}
                              />
    
                          </TouchableOpacity>
                          </Card>
                          <Card>
                              <Text style = {styles.text}>
                             Act Name :WE CAPABLE



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