import React,{Component} from 'react';
import {View, Text,TouchableOpacity,ScrollView,Image,StyleSheet} from 'react-native';
import {Card} from 'react-native-elements'
import MyHeader from '../../components/MyHeader'
export default class Connect extends React.Component{
    render(){

        return(
            <ScrollView>
                
                <View style = {{flex:1}}>
                      <MyHeader title = 'Expert Connect' navigation={this.props.navigation}/>
                      <View>
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