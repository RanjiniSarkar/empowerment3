import React, {Component} from 'react';
import{View,Text,TextInput,StyleSheet,TouchableOpacity,Alert,KeyboardAvoidingView,ScrollView,Modal,Image} from'react-native';
import db from '../config';
import firebase from 'firebase';


export default class WelcomeScreen extends React.Component{
    constructor (){
        super()
        this.state = {
            emailId: ' ',
            password: ' ',
            confirmPassword: ' ',
            firstName: ' ',
            lastName: ' ',
            address: ' ',
            contact: ' ',
            city: ' ',
            state: ' ',
            isModalVisible: ' '      }
    }
    userSignUp = (emailId, password,confirmPassword) =>{
        if(password !== confirmPassword){
          return Alert.alert("password doesn't match\nCheck your password.")
        }
        else{
        firebase.auth().createUserWithEmailAndPassword(emailId, password)
        .then(()=>{
          db.collection('users').add({
            'first_name': this.state.firstName,
            'last_name':this.state.lastName,
            'contact':this.state.contact,
            'email_id':this.state.emailId,
            'address':this.state.address,
            'city': this.state.city,
            'state': this.state.state,

          })
          return  Alert.alert(
            'User Added Successfully',
            '',
            [
              {text: 'OK', onPress: () => this.setState({"isModalVisible" : false})},
            ]
        );
        })
        .catch(function(error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          return Alert.alert(errorMessage)
        });
      }
    }
    userLogin = (emailId, password)=>{
      firebase.auth().signInWithEmailAndPassword(emailId, password)
      .then(()=>{
        this.props.navigation.navigate('ListScreen')
        
      })
      .catch((error)=> {
        var errorCode = error.code;
        var errorMessage = error.message;
        return Alert.alert(errorMessage)
      })
    }
showModal = ()=>{
    return(
      <Modal
        animationType="fade"
        transparent={true}
        visible={this.state.isModalVisible}
        >
       <View style ={styles.modalContainer}>
         <ScrollView style = {{width:'100%'}}>
           <KeyboardAvoidingView style = {styles.KeyboardAvoidingView}>
             <Text style = {styles.modalTitle}>REGISTRATION</Text>

             <View>
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
        placeholder={'Address'}
        multiline = {true}
        onChangeText={(text)=>{
          this.setState({
            address:text
          })
        }}  
        />
         <TextInput
          style={styles.formTextInput}
          placeholder ={"City"}
           onChangeText={(text)=>{
            this.setState({
              city: text
            })
          }}/>
           <TextInput
          style={styles.formTextInput}
          placeholder ={"State"}
    
          onChangeText={(text)=>{
            this.setState({
              state: text
            })
          }}/>
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
        style = {styles.formTextInput}
        placeholder={'Password'}
        secureTextEntry={true}
        onChangeText={(text)=>{
          this.setState({
            password:text
          })
        }}  
        />
        <TextInput
        style = {styles.formTextInput}
        placeholder={'Confirm Password'}
        secureTextEntry={true}
        onChangeText={(text)=>{
          this.setState({
            confirmPassword:text
          })
        }}  
        />
        
        
                
        </View>
        <View style={styles.modalBackButton}>
        <TouchableOpacity
          style={styles.registerButton}
          onPress={()=>
            this.userSignUp(this.state.emailId, this.state.password, this.state.confirmPassword)
          }
        >
        <Text style={styles.registerButtonText}>REGISTER</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
            style = {styles.cancelButton}
             onPress = {()=>{
               this.setState({
                 isModalVisible:false
               })
             }}
             >
                 <Text style = {styles.registerButtonText}>CANCEL</Text>
             </TouchableOpacity>
        

        

           </KeyboardAvoidingView>
         </ScrollView>
       </View>
      </Modal>
    )
  }

render(){
    return(
        <View style = {{flex:1, backgroundColor:'#18db93'}}>
             <View style = {{justifyContent:'center',alignItems:'center'}}>

</View>
{this.showModal()}
            <View style= {styles.profileContainer}>
    <Image
            source = {require("../assets/disability1.png")}
            style = {{width:200,height:180 ,marginTop:-30}}
            />
            </View>
            <Text style ={styles.title}>
            EMPOWERMENT
            </Text>
            <View>
           <TextInput style = {styles.login}
           placeholder="email-id"
           keyboardType='email-address'
           onChangeText = {(text)=>{
               this.setState({
                   emailId: text
               })
           }}
           
           />
           <TextInput
           style= {styles.login}
           placeholder= 'password'
           secureTextEntry={true}
           onChangeText={(text)=>{
               this.setState({
                   password:text
               })
           }}
           />
           <TouchableOpacity style = {styles.button}
           onPress = {()=>{
               this.userLogin(this.state.emailId, this.state.password)
           }}
           >
               <Text style = {styles.buttonText}>LOGIN</Text>
           </TouchableOpacity>

           <TouchableOpacity style = {styles.button} 
          onPress={()=>{this.setState({isModalVisible:true})}}>
               <Text style = {styles.buttonText}>SIGN UP</Text>
               </TouchableOpacity>
            </View>
        </View>
    )
}
}


const styles = StyleSheet.create({
    profileContainer:{
        justifyContent:'center',
        alignItems:'center',
        marginTop:60
      },
      title :{
        fontSize:50,
        fontWeight:'bold',
        paddingBottom:30,
      
        fontStyle:'italic',
        padding:10,
        paddingTop:60,
        alignSelf:'center'

      },
      login:{
        width: 350,
        height: 40,
        borderBottomWidth: 1.5,
        borderColor : '#6866ff',
        fontSize: 20,
        marginBottom:10,
        marginTop:10,
        paddingLeft:10,
        borderRadius:30,
        marginLeft:20

      },
      button:{
        width:300,
        height:50,
        marginTop:40,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:25,
        marginLeft:50,
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
     
      KeyboardAvoidingView:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
      },
      modalTitle:{
        justifyContent:'center',
        alignSelf:'center',
        fontSize:35,
        color:'#18db93',
        margin:50
      },
      modalContainer:{
        flex:1,
        borderRadius:20,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#ffff',
        marginRight:30,
        marginLeft:30,
        marginTop:80,
        marginBottom:80
      },
      formTextInput:{
        width:300,
        height:35,
        alignSelf:'center',
        borderColor:'#373fdd',
        borderRadius:10,
        borderRadius:10,
        borderWidth:1,
        marginTop:20,
        padding:10
      },
      registerButton:{
        width:200,
        height:40,
        alignItems:'center',
        justifyContent:'center',
        borderWidth:1,
        borderRadius:10,
        marginTop:30,
        borderColor:'#18db93'
      },
      registerButtonText:{
        color:'#373fdd',
        fontSize:15,
        fontWeight:'bold'
      },
      cancelButton:{
        width:200,
        height:30,
        justifyContent:'center',
        alignItems:'center',
        marginTop:5,
      },
     
       
      buttonText:{
        color:'#18db93',
        fontWeight:'200',
        fontSize:20
      },
      buttonContainer:{
        flex:1,
        alignItems:'center'
      }
})
