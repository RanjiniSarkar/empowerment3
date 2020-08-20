import React,{Component} from 'react';
import {View, Text, TouchableOpacity,ScrollView,Linking,StyleSheet,Image} from 'react-native';
import{Card} from 'react-native-elements'
import MyHeader from '../components/MyHeader'
import {RFValue }from "react-native-responsive-fontsize"
export default class DisabilityInIndia extends React.Component{
    render(){

        return(
            <ScrollView>
                  <View style = {{flex:1}}>
                      <MyHeader title = 'Disability In India' navigation={this.props.navigation}/>
                      <View>
                      <Card style = {styles.card}>
                          <Card>
                     <TouchableOpacity onPress = {()=>{
                         Linking.openURL("https://www.prsindia.org/uploads/media/Person%20with%20Disabilities/Rights%20of%20Persons%20with%20Disabilities%20Act,%202016.pdf                         ")
                     }}>
                              <Image
                              source={require("../assets/disabilityInIndia/1.png")}
                              style = {{ width:RFValue(164),
                                height:RFValue(300),
                                marginTop:RFValue(30),
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
                              style = {{ width:RFValue(190),
                                height:RFValue(330),
                                marginTop:RFValue(30),
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
                              style = {{ width:RFValue(303),
                                height:RFValue(191),
                                marginTop:RFValue(30),
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
                              style = {{ width:RFValue(310),
                                height:RFValue(131),
                                marginTop:RFValue(30),
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
                              style = {{ width:RFValue(315),
                                height:RFValue(220),
                                marginTop:RFValue(30),
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
                              style = {{ width:RFValue(196),
                                height:RFValue(209),
                                marginTop:RFValue(30),
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
                              style = {{ width:RFValue(181),
                                height:RFValue(220),
                                marginTop:RFValue(30),
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