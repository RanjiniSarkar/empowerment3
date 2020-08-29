import React, {Component} from 'react'
import {Text,View,Image, TouchableOpacity, ScrollView, TextInput,StyleSheet,Alert} from 'react-native'
import {Card} from 'react-native-elements'
import db from '../../config';
import firebase from 'firebase';
import DatePicker from "react-native-datepicker";
import {RFValue} from 'react-native-responsive-fontsize'
export default class ExpertConnect extends React.Component{
  constructor(props){
    super(props)
    this.state={
      firstName:"",
      lastName:"",
      contact:'',
      emailId:'',
      topic:"",
      date: "2016-05-15" ,
      address:'',
     
      docId:''
    }
  }

  addRequest =()=>{
    
    db.collection('expert_connect').add({
        
         "discussoion-status":'requested',
       
        "topic":this.state.topic,
        "requested_date":this.state.date,
        "date"       : firebase.firestore.FieldValue.serverTimestamp(),
    });
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
        <ScrollView>
        <View style = {{flex:1}}>
        <Image 
        source = {require('../../assets/expertConnect.png')}
        style = {{width:150, height:150, alignSelf:'center'}}
        />
        <Card>
        <Card>
            <Text>CONTACT NUMBER- 9836785401 </Text>
        </Card>
        <Card>
            <Text>EMAIL-ID- sanchita.basu@05gmail.com</Text>
        </Card>
      <Card>
          <Text>PLACE- PUNE</Text>
      </Card>
      <Card>
          <Text>QUALIFICATION- MA, B.Ed</Text>
      </Card>
      <Card>
          <Text>EXPERIENCE- 18 years</Text>
      </Card>
      <Card>
          <Text>SKILLS- Teaching children with autism with special needs and counselling</Text>
      </Card>
      <Card>
          <Text>INTEREST FOR: Teaching children with Autism Spectrum Disorder (ASD), Learning Difficulties ( Dyslexia, Dyscalculia, Disgraphia), Cerebral Palsy (CP), ADHD, Low Vision</Text>
      </Card>
      </Card>
      <Text style = {styles.text}>
          To book an appointment please fill out the following details:-
      </Text>
      <Card>
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
                  this.updateData()                }}
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