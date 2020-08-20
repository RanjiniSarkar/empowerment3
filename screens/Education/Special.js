import React,{Component} from 'react';
import {View, Text, ScrollView, TouchableOpacity,Linking, StyleSheet} from 'react-native'
import{Card,ListItem} from 'react-native-elements'
import MyHeader from '../../components/MyHeader'
export default class Special extends React.Component{


   
    render(){
        return(
            <ScrollView>
            <MyHeader title='SPECIAL EDUCATION' navigation={this.props.navigation}/>


       <View style={{flex:1}}>
<Card>
<ListItem
          
          title={"EDUACTION OF CHILDREN WITH DISABILITIES IN INDIA"}
          
          titleStyle={{ color: 'black', fontWeight: 'bold' }}
          rightElement={
            <TouchableOpacity style={styles.button}
            onPress ={()=>{
              Linking.openURL("https://unesdoc.unesco.org/ark:/48223/pf0000186611              ")
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
          
          title={"ALI YAVAR JUNG NATIONAL INSTITUE OF SPEECH AND HEARING"}
          
          titleStyle={{ color: 'black', fontWeight: 'bold' }}
          rightElement={
            <TouchableOpacity style={styles.button}
            onPress ={()=>{
              Linking.openURL("http://ayjnihh.nic.in/       ")
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
          
          title={"EDUACTION OF CHILDREN WITH SPECIAL NEEDS"}
          
          titleStyle={{ color: 'black', fontWeight: 'bold' }}
          rightElement={
            <TouchableOpacity style={styles.button}
            onPress ={()=>{
              Linking.openURL("https://vikaspedia.in/education/parents-corner/guidelines-for-parents-of-children-with-disabilities/education-for-children-with-special-needs ")
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
          
          title={"INCLUSIVE EDUACTION IN INDIA"}
          
          titleStyle={{ color: 'black', fontWeight: 'bold' }}
          rightElement={
            <TouchableOpacity style={styles.button}
            onPress ={()=>{
              Linking.openURL("https://cpb-us-e1.wpmucdn.com/blogs.uoregon.edu/dist/e/13135/files/2012/12/INTL-UG-Thesis-Kohama.pdf         ")
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
          
          title={"DISABILITY INFORMATION RESOURCES"}
          
          titleStyle={{ color: 'black', fontWeight: 'bold' }}
          rightElement={
            <TouchableOpacity style={styles.button}
            onPress ={()=>{
              Linking.openURL("https://www.dinf.ne.jp/doc/english/asia/resource/apdrj/z13jo0300/z13jo0304.html         ")
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
          
          title={"THE ESSENTIAL GUIDE TO SPECIAL NEEDS EDUACTION IN INDIA   "}
          
          titleStyle={{ color: 'black', fontWeight: 'bold' }}
          rightElement={
            <TouchableOpacity style={styles.button}
            onPress ={()=>{
              Linking.openURL("https://blog.firstcrayon.com/the-essential-guide-to-special-needs-education-in-india-47769fc4d234          ")
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
          
          title={"EDUCATION OF DISABLED CHILDREN IN INDIA   "}
          
          titleStyle={{ color: 'black', fontWeight: 'bold' }}
          rightElement={
            <TouchableOpacity style={styles.button}
            onPress ={()=>{
              Linking.openURL("https://targetstudy.com/articles/education-of-disabled-children-in-india.html           ")
            }}
            >
            <Text style={{color:'#ffff'}}>View</Text>
          </TouchableOpacity>
            }
          bottomDivider
        />
</Card>
<Card><ListItem
          
          title={"THE CHILDREN WITH SPECIFIC LEARNING DISABILITIES - IDENTIFICATION & SUPPORT IN EDUCATION - BILL-2016 "}
          
          titleStyle={{ color: 'black', fontWeight: 'bold' }}
          rightElement={
            <TouchableOpacity style={styles.button}
            onPress ={()=>{
              Linking.openURL("http://127.0.0.1:8887/educationConnect//THE%20CHILDREN%20WITH%20SPECIFIC%20LEARNING%20DISABILITIES%20-%20IDENTIFICATION%20&%20SUPPORT%20IN%20EDUCATION%20-%20BILL-2016.pdf           ")
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