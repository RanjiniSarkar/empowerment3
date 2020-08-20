import React, { Component } from 'react';
import {View,Text, KeyboardAvoidingView,TextInput,StyleSheet,ScrollView,TouchableOpacity} from 'react-native';

import db from '../config'
import firebase from 'firebase'
import MyHeader from '../components/MyHeader'
import {RFValue} from 'react-native-responsive-fontsize'

export default class SettingScreen extends Component{
  constructor(){
    super();
    this.state={
      emailId:'',
      firstName:'',
      lastName:'',
      address:'',
      contact:'',
      docId:''
    }
  }

  getUserDetails(){
    var user = firebase.auth().currentUser;
    var email= user.email
  
   db.collection('users').where('email_id','==',email).get()
    .then(snapshot => {
      snapshot.forEach(doc => {
         var data = doc.data()
         this.setState({
           emailId: data.email_id,
           firstName:data.first_name,
           lastName:data.last_name,
           address:data.address,
           contact:data.contact,
           docId:doc.id
         })
      });
    })
  
  }

  updateData = () => {
    db.collection("users").doc(this.state.docId).update({
      first_name: this.state.firstName,
      last_name: this.state.lastName,
      address: this.state.address,
      contact: this.state.contact,
    });

  }
  componentDidMount() {
    this.getUserDetails()
  }



    render(){
        return(
                <View style={{flex:1,width:'100%',alignItems: 'center'}}>
                
                <View style={{flex:1,width:'100%',alignItems: 'center'}}>
                <TextInput
                  style={styles.formTextInput}
                  placeholder ={"First Name"}
                  maxLength ={8}
                  containerStyle={{
                    marginBottom:RFValue(25),
                    marginTop:RFValue(0)
                  }}
                  onChangeText={(text)=>{
                    this.setState({
                      firstName: text
                    })
                  }}
                  value ={this.state.firstName}
                />
                <TextInput
                  style={styles.formTextInput}
                  placeholder ={"Last Name"}
                  maxLength ={8}
                  containerStyle={{
                    marginBottom:RFValue(25),
                    
                  }}
                  onChangeText={(text)=>{
                    this.setState({
                      lastName: text
                    })
                  }}
                    value ={this.state.lastName}
                />
                <TextInput
                  style={styles.formTextInput}
                  placeholder ={"Contact"}
                  maxLength ={10}
                  containerStyle={{
                    marginBottom:RFValue(25),
                  
                  }}
                  keyboardType={'numeric'}
                  onChangeText={(text)=>{
                    this.setState({
                      contact: text
                    })
                  }}
                    value ={this.state.contact}
                />
                <TextInput
                  style={styles.formTextInput}
                  placeholder ={"Address"}
                  multiline = {true}
                  containerStyle={{
                    marginBottom:RFValue(25),
                    
                  }}
                  onChangeText={(text)=>{
                    this.setState({
                      address: text
                    })
                  }}
                    value ={this.state.address}
                />
                <TextInput
                  style={styles.formTextInput}
                  placeholder ={"Email"}
                  keyboardType ={'email-address'}
                  containerStyle={{
                    marginBottom:RFValue(25),
                  
                  }}
                  onChangeText={(text)=>{
                    this.setState({
                      emailId: text
                    })
                  }}
                    value ={this.state.emailId}
                />
                <TouchableOpacity style={styles.button}
                  onPress={()=>{this.updateData()}}>
                  <Text style={{fontSize:25, color:"white"}}> SAVE </Text>
                </TouchableOpacity>
                </View>
                </View>

       





        )
    }
}


const styles = StyleSheet.create({
    formTextInput:{
        width:300,
        height:35,
        alignSelf:'center',
        borderColor:'#373fdd',
        borderRadius:10,
        borderRadius:10,
        borderWidth:1,
        marginTop:20,
        marginBottom:10,
        padding:10,
        
      },
    button:{
        width:300,
        height:50,
        marginTop:40,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:25,
        marginLeft:10,
        backgroundColor:"#373fdd",
        shadowColor: "#000",
        shadowOffset: {
           width: 0,
           height: 8,
        },
        shadowOpacity: 0.30,
        shadowRadius: 10.32,
        elevation: 16,
      },
      buttonText:{
        color:'#18db93',
        fontWeight:'200',
        fontSize:20
      },
      KeyboardAvoidingView:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
      },
}
)