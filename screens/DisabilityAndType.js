import React,{Component} from 'react';
import {View, Text, TouchableOpacity, Image,StyleSheet,ScrollView} from 'react-native';
import MyHeader from '../components/MyHeader'
export default class DisabilityAndType extends React.Component{
    render(){

        return(
            <ScrollView>
            <View style={{flex:1}}>
        <MyHeader title="Disability Encyclopedia"/>
        
            <View>
                <TouchableOpacity>
                    <Image 
                    source ={require("../assets/disabilityEncyclopedia/1.png")}
                    style = {styles.image}
                    />
                </TouchableOpacity>
                <Text style= {styles.text}>BLINDNESS</Text>
                </View>
                <View>
                <TouchableOpacity>
                <Image 
                    source ={require("../assets/disabilityEncyclopedia/2.png")}
                    style = {styles.image}
                    />
                    
                </TouchableOpacity>
                <Text style={styles.text}>LOW VISION</Text>
                </View>
                <View>
                <TouchableOpacity>
                <Image 
                    source ={require("../assets/disabilityEncyclopedia/3.png")}
                    style = {styles.image}
                    />
                    
                </TouchableOpacity>
                <Text style={styles.text}>LEPROSY</Text>
                </View>
                <View>
                <TouchableOpacity>
                <Image 
                    source ={require("../assets/disabilityEncyclopedia/4.png")}
                    style = {styles.image}
                    />
                    
                </TouchableOpacity>
                <Text style={styles.text}>DEAF</Text>
            
                
                </View>
            </View>
            </ScrollView>
        )
    }}
    const styles = StyleSheet.create({
        image:{
            width:180,
            height:150,
            marginTop:30,
            alignSelf:'center'
        },
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
        }

    })