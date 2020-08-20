import React from 'react';
import {View,
    Text,
    TextInput,
    KeyboardAvoidingView,
    StyleSheet,
    TouchableOpacity,
    ScrollView,
    Alert} from 'react-native'
import MyHeader from '../components/MyHeader'
import db from '../config'
import firebase from 'firebase';
export default class Blog extends React.Component{
    constructor(){
        super();
        this.state ={
          userId : firebase.auth().currentUser.email,
          name:"",
          feedback:""
        }
      }
    
     
    
      addRequest =(name,feedback)=>{
        var userId = this.state.userId
       
        db.collection('feedback').add({
            "user_id": userId,
            "name":name,
            "feedback":feedback,
         
        })
    
        this.setState({
            name:'',
            feedback : ''
        })
    
        return Alert.alert("Thank you very much for your feedback")
      }
    
    
      render(){
        return(
            <View style={{flex:1}}>
                  <View>
                <MyHeader title = "BLOG SCREEN" navigation={this.props.navigation}/>
                
            </View>
                <KeyboardAvoidingView style={styles.keyBoardStyle}>
                  <TextInput
                    style ={styles.formTextInput}
                    placeholder={"enter your name"}
                    onChangeText={(text)=>{
                        this.setState({
                            name:text
                        })
                    }}
                    value={this.state.name}
                  />
                  <TextInput
                    style ={[styles.formTextInput,{height:200}]}
                    multiline
                    numberOfLines ={8}
                    placeholder={"Feedback"}
                    onChangeText ={(text)=>{
                        this.setState({
                            feedback:text
                        })
                    }}
                    value ={this.state.feedback}
                  />
                  <TouchableOpacity
                    style={styles.button}
                    onPress={()=>{this.addRequest(this.state.name,this.state.feedback)}}
                    >
                    <Text style={{color:"white",fontWeight:'bold', fontSize:25}}>SEND</Text>
                  </TouchableOpacity>
                </KeyboardAvoidingView>
            </View>
        )
      }
    }
    
    const styles = StyleSheet.create({
      keyBoardStyle : {
        flex:1,
        alignItems:'center',
        justifyContent:'center'
      },
      formTextInput:{
        width:"75%",
        height:35,
        alignSelf:'center',
        borderColor:'#32867d',
        borderRadius:10,
        borderWidth:1,
        marginTop:20,
        padding:10,
      },
      button:{
        width:"75%",
        height:50,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:10,
        backgroundColor:"#32867d",
        shadowColor: "#000",
        shadowOffset: {
           width: 0,
           height: 8,
        },
        shadowOpacity: 0.44,
        shadowRadius: 10.32,
        elevation: 16,
        marginTop:20
        },
      }
    )
   
   
   
   
   
   
   