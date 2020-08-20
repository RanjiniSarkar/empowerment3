import React,{Component} from 'react';
import {View, Text, ScrollView, TouchableOpacity,Linking, StyleSheet} from 'react-native'
import{Card,ListItem} from 'react-native-elements'
import MyHeader from '../../components/MyHeader'
export default class Psychiatric extends React.Component{


   
    render(){
        return(
            <ScrollView>
            <MyHeader title='PSYCHIATRIC' navigation={this.props.navigation}/>


       <View style={{flex:1}}>
<Card>
<ListItem
          
          title={"INDIAN PSYCHIATRIC SOCIETY"}
          
          titleStyle={{ color: 'black', fontWeight: 'bold' }}
          rightElement={
            <TouchableOpacity style={styles.button}
            onPress ={()=>{
              Linking.openURL("https://indianpsychiatricsociety.org/              ")
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
          
          title={"LIST OF PSYCHIATRIC HOSPITALS IN INDIA"}
          
          titleStyle={{ color: 'black', fontWeight: 'bold' }}
          rightElement={
            <TouchableOpacity style={styles.button}
            onPress ={()=>{
              Linking.openURL("https://en.wikipedia.org/wiki/List_of_psychiatric_hospitals_in_India              ")
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
          
          title={"INDIAN PSYCHIATRISTS"}
          
          titleStyle={{ color: 'black', fontWeight: 'bold' }}
          rightElement={
            <TouchableOpacity style={styles.button}
            onPress ={()=>{
              Linking.openURL("https://en.wikipedia.org/wiki/Category:Indian_psychiatrists              ")
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
          
          title={"BEST PSYCHIATRISTS IN INDIA"}
          
          titleStyle={{ color: 'black', fontWeight: 'bold' }}
          rightElement={
            <TouchableOpacity style={styles.button}
            onPress ={()=>{
              Linking.openURL("https://www.medifee.com/best-doctors/psychiatrist-in-india/              ")
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
          
          title={"NARYANA HEALTH"}
          
          titleStyle={{ color: 'black', fontWeight: 'bold' }}
          rightElement={
            <TouchableOpacity style={styles.button}
            onPress ={()=>{
              Linking.openURL("https://www.narayanahealth.org/find-a-doctor/psychiatrists              ")
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
          
          title={"MEDMONKS        "}
          
          titleStyle={{ color: 'black', fontWeight: 'bold' }}
          rightElement={
            <TouchableOpacity style={styles.button}
            onPress ={()=>{
              Linking.openURL("https://medmonks.com/blog/top-10-psychiatrists-in-india              ")
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
              Linking.openURL("https://www.askapollo.com/physical-appointment/psychiatrist            ")
            }}
            >
            <Text style={{color:'#ffff'}}>View</Text>
          </TouchableOpacity>
            }
          bottomDivider
        />
</Card>
<Card><ListItem
          
          title={"PRACTO  "}
          
          titleStyle={{ color: 'black', fontWeight: 'bold' }}
          rightElement={
            <TouchableOpacity style={styles.button}
            onPress ={()=>{
              Linking.openURL("https://www.practo.com/psychiatrist-in-india/listing            ")
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