import React,{Component} from 'react';
import {View, Text, ScrollView, TouchableOpacity,Linking, StyleSheet} from 'react-native'
import{Card,ListItem} from 'react-native-elements'
import MyHeader from '../../components/MyHeader'
export default class EyeCare extends React.Component{


   
    render(){
        return(
            <ScrollView>
            <MyHeader title='EYE CARE' navigation={this.props.navigation}/>


       <View style={{flex:1}}>
<Card>
<ListItem
          
          title={"TOI RANKED OPTHALMOLOGY"}
          
          titleStyle={{ color: 'black', fontWeight: 'bold' }}
          rightElement={
            <TouchableOpacity style={styles.button}
            onPress ={()=>{
              Linking.openURL("https://timesofindia.indiatimes.com/health-survey/lifestyle/opthalmology              ")
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
          
          title={"MEDLIFE RANKED OPTHALMOLOGY          "}
          
          titleStyle={{ color: 'black', fontWeight: 'bold' }}
          rightElement={
            <TouchableOpacity style={styles.button}
            onPress ={()=>{
              Linking.openURL("https://www.medlife.com/blog/10-best-eye-hospitals-donation-procedure-india/              ")
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
          
          title={"INDIA TV NEWS RANKED OPTHALMOLOGY"        }
          
          titleStyle={{ color: 'black', fontWeight: 'bold' }}
          rightElement={
            <TouchableOpacity style={styles.button}
            onPress ={()=>{
              Linking.openURL("https://www.indiatvnews.com/news/india/top-10-eye-care-hospitals-in-india-32456.html              ")
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
          
          title={"CENTRE FOR SIGHT RANKED OPTHALMOLOGY          "}
          
          titleStyle={{ color: 'black', fontWeight: 'bold' }}
          rightElement={
            <TouchableOpacity style={styles.button}
            onPress ={()=>{
              Linking.openURL(" https://www.centreforsight.net/eye-hospitals-in-india              ")
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
          
          title={"BEL INDIA RANKED OPTHALMOLOGY            "}
          
          titleStyle={{ color: 'black', fontWeight: 'bold' }}
          rightElement={
            <TouchableOpacity style={styles.button}
            onPress ={()=>{
              Linking.openURL("https://bel-india.com/best-eye-care-hospitals-in-india/              ")
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
          
          title={"ESSENCZ RANKED OPTHALMOLOGY          "}
          
          titleStyle={{ color: 'black', fontWeight: 'bold' }}
          rightElement={
            <TouchableOpacity style={styles.button}
            onPress ={()=>{
              Linking.openURL("https://essencz.com/hospitals/eye-hospitals/top-10-best-eye-care-hospitals-in-india/              ")
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
          
          title={"VAIDAM RANKED OPTHALMOLOGY          "}
          
          titleStyle={{ color: 'black', fontWeight: 'bold' }}
          rightElement={
            <TouchableOpacity style={styles.button}
            onPress ={()=>{
              Linking.openURL("https://www.vaidam.com/best-eye-hospitals-in-india              ")
            }}
            >
            <Text style={{color:'#ffff'}}>View</Text>
          </TouchableOpacity>
            }
          bottomDivider
        />
</Card>
<Card><ListItem
          
          title={"EYE Q INDIA RANKED OPTHALMOLOGY          "}
          
          titleStyle={{ color: 'black', fontWeight: 'bold' }}
          rightElement={
            <TouchableOpacity style={styles.button}
            onPress ={()=>{
              Linking.openURL("https://www.eyeqindia.com/              ")
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