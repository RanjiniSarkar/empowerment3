import React,{Component} from 'react';
import {View, Text, ScrollView, TouchableOpacity,Linking, StyleSheet} from 'react-native'
import{Card,ListItem,Header,Icon} from 'react-native-elements'
import MyHeader from '../../components/MyHeader'
export default class PhysioConnect extends React.Component{


   
    render(){
        return(
            <ScrollView>
         
       <View style={{flex:1}}>
<Card>
<ListItem
          
          title={"INDIAN ASSOCIATIONS OF PHYSIOTHERAPISTS"}
          
          titleStyle={{ color: 'black', fontWeight: 'bold' }}
          rightElement={
            <TouchableOpacity style={styles.button}
            onPress ={()=>{
              Linking.openURL("http://www.physiotherapyindia.org/ ")
            }}
            >
            <Text style={{color:'#ffff'}}>View</Text>
          </TouchableOpacity>
            }
          bottomDivider
        />
</Card>
<Card>
<ListItem
          
          title={"PHYSIOTHERAPY - DOCTOR DIRECTORY"}
          
          titleStyle={{ color: 'black', fontWeight: 'bold' }}
          rightElement={
            <TouchableOpacity style={styles.button}
            onPress ={()=>{
              Linking.openURL("https://www.indmedica.com/directory.php?directory=doctor&catid=23              ")
            }}
            >
            <Text style={{color:'#ffff'}}>View</Text>
          </TouchableOpacity>
            }
          bottomDivider
        />
</Card>

<Card>
<ListItem
          
          title={"NARAYANA HEALTH"}
          
          titleStyle={{ color: 'black', fontWeight: 'bold' }}
          rightElement={
            <TouchableOpacity style={styles.button}
            onPress ={()=>{
              Linking.openURL("https://www.narayanahealth.org/find-a-doctor/physiotherapists              ")
            }}
            >
            <Text style={{color:'#ffff'}}>View</Text>
          </TouchableOpacity>
            }
          bottomDivider
        />
</Card>
        
<Card>
<ListItem
          
          title={"BEST PHYSIOTHERAPISTS IN INDIA"}
          
          titleStyle={{ color: 'black', fontWeight: 'bold' }}
          rightElement={
            <TouchableOpacity style={styles.button}
            onPress ={()=>{
              Linking.openURL("https://www.medifee.com/best-doctors/physiotherapist-in-india/")
            }}
            >
            <Text style={{color:'#ffff'}}>View</Text>
          </TouchableOpacity>
            }
          bottomDivider
        />
</Card>
<Card>
<ListItem
          
          title={"PRACTO"}
          
          titleStyle={{ color: 'black', fontWeight: 'bold' }}
          rightElement={
            <TouchableOpacity style={styles.button}
            onPress ={()=>{
              Linking.openURL("https://www.practo.com/physiotherapist-in-india/listing ")
            }}
            >
            <Text style={{color:'#ffff'}}>View</Text>
          </TouchableOpacity>
            }
          bottomDivider
        />
</Card>
<Card>
<ListItem
          
          title={"PHYSIOTHERAPY / PHYSIOTHERAPIST IN INDIA          "}
          
          titleStyle={{ color: 'black', fontWeight: 'bold' }}
          rightElement={
            <TouchableOpacity style={styles.button}
            onPress ={()=>{
              Linking.openURL("https://www.medindia.net/patients/doctor_search/physiotherapy-doctors.htm")
            }}
            >
            <Text style={{color:'#ffff'}}>View</Text>
          </TouchableOpacity>
            }
          bottomDivider
        />
</Card>
<Card>
<ListItem
          
          title={"ASK APOLLO   "}
          
          titleStyle={{ color: 'black', fontWeight: 'bold' }}
          rightElement={
            <TouchableOpacity style={styles.button}
            onPress ={()=>{
              Linking.openURL("https://www.askapollo.com/physical-appointment/physiotherapist              ")
            }}
            >
            <Text style={{color:'#ffff'}}>View</Text>
          </TouchableOpacity>
            }
          bottomDivider
        />
</Card>
<Card><ListItem
          
          title={"TOP 10 PHYSIOTHERAPY CLININCS AND HOSPITALS  "}
          
          titleStyle={{ color: 'black', fontWeight: 'bold' }}
          rightElement={
            <TouchableOpacity style={styles.button}
            onPress ={()=>{
              Linking.openURL("https://gcr.org/top/physiotherapy/in?page=1&per_page=16&sort=score&order=desc              ")
            }}
            >
            <Text style={{color:'#ffff'}}>View</Text>
          </TouchableOpacity>
            }
          bottomDivider
        />
</Card>
       </View>
   </ScrollView>
        )
}
}
const styles = StyleSheet.create({
    button:{
        width:100,
        height:50,
        justifyContent:'center',
        alignItems:'center',
        
        backgroundColor:"#11c66c",
        shadowColor: "#000",
        shadowOffset: {
           width: 0,
           height: 8,
        },
        shadowOpacity: 0.30,
        shadowRadius: 10.32,
        elevation: 16,
      }
})