import React,{Component} from 'react';
import {View, Text, ScrollView, TouchableOpacity,Linking, StyleSheet} from 'react-native'
import{Card,ListItem} from 'react-native-elements'
import MyHeader from '../../components/MyHeader'
export default class Psycologist extends React.Component{


   
    render(){
        return(
            <ScrollView>
            <MyHeader title='PSYCHOLOGIST' navigation={this.props.navigation}/>


       <View style={{flex:1}}>
<Card>
<ListItem
          
          title={"INDIAN PSYCOLOGISTS"}
          
          titleStyle={{ color: 'black', fontWeight: 'bold' }}
          rightElement={
            <TouchableOpacity style={styles.button}
            onPress ={()=>{
              Linking.openURL("https://www.indiaeducation.net/careercenter/humanities/psychology/top-7-psychologists-in-india.html              ")
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
          
          title={"MEDIFEE"}
          
          titleStyle={{ color: 'black', fontWeight: 'bold' }}
          rightElement={
            <TouchableOpacity style={styles.button}
            onPress ={()=>{
              Linking.openURL("https://www.medifee.com/best-doctors/psychologist-in-india/              ")
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
          
          title={"INDIAN ASSOCIATION OF CLINICAL PSYCOLOGISTS"}
          
          titleStyle={{ color: 'black', fontWeight: 'bold' }}
          rightElement={
            <TouchableOpacity style={styles.button}
            onPress ={()=>{
              Linking.openURL("http://iacp.in/   ")
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
          
          title={"HOMEGROWN"}
          
          titleStyle={{ color: 'black', fontWeight: 'bold' }}
          rightElement={
            <TouchableOpacity style={styles.button}
            onPress ={()=>{
              Linking.openURL("https://homegrown.co.in/article/802971/a-crowdsourced-list-of-non-judgemental-mental-health-professionals-in-india              ")
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
          
          title={"CREDIHEALTH"}
          
          titleStyle={{ color: 'black', fontWeight: 'bold' }}
          rightElement={
            <TouchableOpacity style={styles.button}
            onPress ={()=>{
              Linking.openURL("https://www.credihealth.com/doctors/india/psychology              ")
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
          
          title={"MENTAL HEALTH EXPERTS     "}
          
          titleStyle={{ color: 'black', fontWeight: 'bold' }}
          rightElement={
            <TouchableOpacity style={styles.button}
            onPress ={()=>{
              Linking.openURL("https://nowandme.com/resources/experts              ")
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
              Linking.openURL("https://www.askapollo.com/physical-appointment/psychologist              ")
            }}
            >
            <Text style={{color:'#ffff'}}>View</Text>
          </TouchableOpacity>
            }
          bottomDivider
        />
</Card>
<Card><ListItem
          
          title={"MANASTHA "}
          
          titleStyle={{ color: 'black', fontWeight: 'bold' }}
          rightElement={
            <TouchableOpacity style={styles.button}
            onPress ={()=>{
              Linking.openURL("https://www.manastha.com/              ")
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