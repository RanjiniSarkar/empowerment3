import React, {Component} from 'react'
import {Text,View,Image, TouchableOpacity, ScrollView, TextInput,StyleSheet} from 'react-native'
import {Card} from 'react-native-elements'
import db from '../../config';
import firebase from 'firebase';
import DatePicker from "react-native-datepicker";
export default class ExpertConnect extends React.Component{
  constructor(props){
    super(props)
    this.state={
      firstName:"",
      lastName:"",
      contact:'',
      emailId:'',
      topic:"",
      date: "2016-05-15" 
    }
  }

  addRequest =()=>{
    
    db.collection('expert_connect').add({
        "first_name":this.state.firstName,
        "last_name":this.state.lastName,
         "discussoion-status":'requested',
        "contact":this.state.contact,
        "emailId": this.state.email_id,
        "topic":this.state.topic,
        "requested_date":this.state.date,
        "date"       : firebase.firestore.FieldValue.serverTimestamp(),
    });
  }
  getData = ()=>{
    var user = firebase.auth().currentUser;
    var email= user.email
     db.collection('users').where('emai_id','==',email).get()
      .then(snapshot => {
        snapshot.forEach(doc => {
           var data = doc.data()
           this.setState({
             emailId: data.email_id,
             firstName:data.first_name,
             lastName:data.last_name,
             contact:data.contact,
            
           })
        });
      })
    }
    componentDidMount(){
      this.getData()
    }
    
    
  
render(){
    return(
        <ScrollView>
        <View style = {{flex:1}}>
        <Image 
        source = {require('../../assets/expertConnect.png')}
        style = {{width:150, height:150, alignSelf:'center'}}
        />
        <Card>
        <Card>
            <Text>CONTACT NUMBER </Text>
        </Card>
        <Card>
            <Text>EMAIL-ID</Text>
        </Card>
      <Card>
          <Text>ADDRESS</Text>
      </Card>
      <Card>
          <Text>QUALIFICATION</Text>
      </Card>
      <Card>
          <Text>EXPERIENCE</Text>
      </Card>
      <Card>
          <Text>SKILLS</Text>
      </Card>
      <Card>
          <Text>SOCIAL MEDIA</Text>
      </Card>
      </Card>
      <Text style = {styles.text}>
          To book an appointment please fill out the following details:-
      </Text>
      <Card>
      <TextInput
       style = {styles.formTextInput}
       placeholder={'First Name'}
      
       onChangeText={(text)=>{
         this.setState({
           firstName: text
         })
       }}
    />
     <TextInput
        style = {styles.formTextInput}
        placeholder={'Last Name'}
    
        onChangeText={(text)=>{
          this.setState({
            lastName:text
          })
        }}  
        />
        <TextInput
        style = {styles.formTextInput}
        placeholder={'Contact'}
        maxLength={10}
        keyboardType={'numeric'}
        onChangeText={(text)=>{
          this.setState({
            contact:text
          })
        }}  
        />
        
        <TextInput
        style = {styles.formTextInput}
        placeholder={'Email'}
        keyboardType={'email-address'}
        onChangeText={(text)=>{
          this.setState({
            emailId:text
          })
        }}  
        />
        <TextInput
        style={styles.formTextInput}
        placeholder={"Topic interested"}
        onChangeText={(text)=>{
          this.setState({
            topic:text
          })
        }}
        />
      
    <DatePicker
        style={{ width: 200,marginLeft:60 }}
        date={this.state.date}
        mode="date"
        placeholder="select date"
        format="YYYY-MM-DD"
        minDate="2020-08-01"
        maxDate="2020-12-01"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        customStyles={{
          dateIcon: {
            position: "absolute",
            left: 0,
            top: 4,
            marginLeft: 0
          },
          dateInput: {
            marginLeft: 36
          }
          // ... You can check the source to find the other keys.
        }}
        onDateChange={date => {
          this.setState({ date: date });
        
        }}
      />
  
       
       <TouchableOpacity
                style={styles.button}
                onPress={()=>{ this.addRequest();
                }}
                >

                <Text>Request</Text>
              </TouchableOpacity>

      

</Card>
        </View>
        </ScrollView>
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
        marginTop:10,
        marginBottom:10,
        padding:10,
        
      },
    button:{
        width:160,
        height:50,
        marginTop:40,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:10,
        
        alignSelf:'center',
        backgroundColor:"#0090ff",
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
      text:{
fontSize:20,
alignSelf:"center",
marginLeft:20,
fontWeight:'bold'

      }
}
)