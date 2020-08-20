import React,{Component} from 'react';
import {View, Text, TouchableOpacity, Image,StyleSheet,ScrollView,Linking} from 'react-native';
import MyHeader from '../components/MyHeader'
import {Card} from 'react-native-elements';
import {RFValue} from 'react-native-responsive-fontsize'
export default class DisabilityAndType extends React.Component{
    render(){

        return(
            <ScrollView>
            <View style={{flex:1}}>
        <MyHeader title="Disability Encyclopedia" navigation={this.props.navigation}/>
        
            <View>
                <Card style = {styles.card}>
                    <Card>
                <TouchableOpacity onPress={()=>{
                    Linking.openURL("https://en.wikipedia.org/wiki/Visual_impairment")
                }}>
                    <Image 
                    source ={require("../assets/disabilityEncyclopedia/1.png")}
                    style = {styles.image}
                    />
                </TouchableOpacity>
                </Card>
                <Card>
                <Text style= {styles.text}>Disability Name: BLINDNESS</Text>
                </Card>
                </Card>
                </View>
                <View>
                    <Card style = {styles.card}>
                        <Card>
                <TouchableOpacity onPress={()=>{
                    Linking.openURL("https://en.wikipedia.org/wiki/Visual_impairment")
                }}>
                <Image 
                    source ={require("../assets/disabilityEncyclopedia/2.png")}
                    style = {styles.image}
                    />
                    
                </TouchableOpacity>
                </Card>
                <Card>
                <Text style={styles.text}> Disability Name: LOW VISION</Text>
                </Card>
                </Card>
                </View>
                <View>
                    <Card style = {styles.card}>
                         <Card>
                <TouchableOpacity onPress={()=>{
                    Linking.openURL("https://en.wikipedia.org/wiki/Leprosy")
                }}>
                <Image 
                    source ={require("../assets/disabilityEncyclopedia/3.png")}
                    style = {styles.image}
                    />
                    
                </TouchableOpacity >
                </Card>
                <Card>
                <Text style={styles.text}> Disability Name: LEPROSY</Text>
                </Card>
                </Card>
                </View>
                <View>
                    <Card style = {styles.card}>
                        <Card>
                <TouchableOpacity onPress={()=>{
                    Linking.openURL("https://en.wikipedia.org/wiki/Hearing_loss")
                }}>
                <Image 
                    source ={require("../assets/disabilityEncyclopedia/4.png")}
                    style = {styles.image}
                    />
                    
                </TouchableOpacity>
                </Card>
                <Card>
                <Text style={styles.text}> Disability Name: DEAF</Text>
                  </Card>
                </Card>
                </View>
                <View>
                    <Card style = {styles.card}>
                        <Card>
                <TouchableOpacity onPress={()=>{
                    Linking.openURL("https://wecapable.com/locomotor-disability-meaning/")
                }}>
                <Image 
                    source ={require("../assets/disabilityEncyclopedia/5.png")}
                    style = {styles.image}
                    />
                    
                </TouchableOpacity>
                </Card>
                <Card>
                <Text style={styles.text}>Disability Name: LOCOMOTOR</Text>
                  </Card>
                </Card>
                </View>
                <View>
                    <Card style = {styles.card}>
                        <Card>
                <TouchableOpacity onPress={()=>{
                    Linking.openURL("https://en.wikipedia.org/wiki/Dwarfism")
                }}>
                <Image 
                    source ={require("../assets/disabilityEncyclopedia/6.png")}
                    style = {styles.image}
                    />
                    
                </TouchableOpacity>
                </Card>
                <Card>
                <Text style={styles.text}>Disability Name: DWARFISM</Text>
                  </Card>
                </Card>
                </View>
                <View>
                    <Card style = {styles.card}>
                        <Card>
                <TouchableOpacity onPress={()=>{
                    Linking.openURL("https://en.wikipedia.org/wiki/Intellectual_disability ")
                }}>
                <Image 
                    source ={require("../assets/disabilityEncyclopedia/7.png")}
                    style = {styles.image}
                    />
                    
                </TouchableOpacity>
                </Card>
                <Card>
                <Text style={styles.text}>Disability Name: INTELLECTUAL DISABILITY</Text>
                  </Card>
                </Card>
                </View>
                <View>
                    <Card style = {styles.card}>
                        <Card>
                <TouchableOpacity onPress={()=>{
                    Linking.openURL("https://en.wikipedia.org/wiki/Mental_disorder")
                }}>
                <Image 
                    source ={require("../assets/disabilityEncyclopedia/8.png")}
                    style = {styles.image}
                    />
                    
                </TouchableOpacity>
                </Card>
                <Card>
                <Text style={styles.text}>Disability Name: MENTAL DISORDER</Text>
                  </Card>
                </Card>
                </View>
                <View>
                    <Card style = {styles.card}>
                        <Card>
                <TouchableOpacity onPress={()=>{
                    Linking.openURL("https://en.wikipedia.org/wiki/Autism_spectrum")
                }}>
                <Image 
                    source ={require("../assets/disabilityEncyclopedia/9.png")}
                    style = {styles.image}
                    />
                    
                </TouchableOpacity>
                </Card>
                <Card>
                <Text style={styles.text}>Disability Name: AUTISM</Text>
                  </Card>
                </Card>
                </View>
                <View>
                    <Card style = {styles.card}>
                        <Card>
                <TouchableOpacity onPress={()=>{
                    Linking.openURL("https://en.wikipedia.org/wiki/Cerebral_palsy ")
                }}>
                <Image 
                    source ={require("../assets/disabilityEncyclopedia/10.png")}
                    style = {styles.image}
                    />
                    
                </TouchableOpacity>
                </Card>
                <Card>
                <Text style={styles.text}>Disability Name: CEREBRAL PALSY</Text>
                  </Card>
                </Card>
                </View>
                <View>
                    <Card style = {styles.card}>
                        <Card>
                <TouchableOpacity onPress={()=>{
                    Linking.openURL("https://en.wikipedia.org/wiki/Muscular_dystrophy  ")
                }}>
                <Image 
                    source ={require("../assets/disabilityEncyclopedia/11.png")}
                    style = {styles.image}
                    />
                    
                </TouchableOpacity>
                </Card>
                <Card>
                <Text style={styles.text}>Disability Name: MUSCULAR DYSTROPHY</Text>
                  </Card>
                </Card>
                </View>
                <View>
                    <Card style = {styles.card}>
                        <Card>
                <TouchableOpacity onPress={()=>{
                    Linking.openURL("https://en.wikipedia.org/wiki/Neurological_disorder")
                }}>
                <Image 
                    source ={require("../assets/disabilityEncyclopedia/12.png")}
                    style = {styles.image}
                    />
                    
                </TouchableOpacity>
                </Card>
                <Card>
                <Text style={styles.text}>Disability Name: NEUROLOGICAL DISORDER</Text>
                  </Card>
                </Card>
                </View>
                <View>
                    <Card style = {styles.card}>
                        <Card>
                <TouchableOpacity onPress={()=>{
                    Linking.openURL("https://en.wikipedia.org/wiki/Learning_disability   ")
                }}>
                <Image 
                    source ={require("../assets/disabilityEncyclopedia/13.png")}
                    style = {styles.image}
                    />
                    
                </TouchableOpacity>
                </Card>
                <Card>
                <Text style={styles.text}>Disability Name: LEARNING DISABILITY</Text>
                  </Card>
                </Card>
                </View>
                <View>
                    <Card style = {styles.card}>
                        <Card>
                <TouchableOpacity onPress={()=>{
                    Linking.openURL("https://en.wikipedia.org/wiki/Multiple_sclerosis   ")
                }}>
                <Image 
                    source ={require("../assets/disabilityEncyclopedia/14.png")}
                    style = {styles.image}
                    />
                    
                </TouchableOpacity>
                </Card>
                <Card>
                <Text style={styles.text}>Disability Name: MULTIPLE SCLEROSIS</Text>
                  </Card>
                </Card>
                </View>
                <View>
                    <Card style = {styles.card}>
                        <Card>
                <TouchableOpacity onPress={()=>{
                    Linking.openURL("  https://en.wikipedia.org/wiki/Speech_and_language_impairment")
                }}>
                <Image 
                    source ={require("../assets/disabilityEncyclopedia/15.png")}
                    style = {styles.image}
                    />
                    
                </TouchableOpacity>
                </Card>
                <Card>
                <Text style={styles.text}>Disability Name: SPEECH AND LANGUAGE IMPAIRMENT</Text>
                  </Card>
                </Card>
                </View>
                <View>
                    <Card style = {styles.card}>
                        <Card>
                <TouchableOpacity onPress={()=>{
                    Linking.openURL("https://en.wikipedia.org/wiki/Thalassemia")
                }}>
                <Image 
                    source ={require("../assets/disabilityEncyclopedia/16.png")}
                    style = {styles.image}
                    />
                    
                </TouchableOpacity>
                </Card>
                <Card>
                <Text style={styles.text}>Disability Name: THALASSEMIA</Text>
                  </Card>
                </Card>
                </View>
                <View>
                    <Card style = {styles.card}>
                        <Card>
                <TouchableOpacity onPress={()=>{
                    Linking.openURL("https://en.wikipedia.org/wiki/Haemophilia")
                }}>
                <Image 
                    source ={require("../assets/disabilityEncyclopedia/17.png")}
                    style = {styles.image}
                    />
                    
                </TouchableOpacity>
                </Card>
                <Card>
                <Text style={styles.text}>Disability Name: HAEMOPHILIA</Text>
                  </Card>
                </Card>
                </View>
                <View>
                    <Card style = {styles.card}>
                        <Card>
                <TouchableOpacity onPress={()=>{
                    Linking.openURL("https://en.wikipedia.org/wiki/Sickle_cell_disease ")
                }}>
                <Image 
                    source ={require("../assets/disabilityEncyclopedia/18.png")}
                    style = {styles.image}
                    />
                    
                </TouchableOpacity>
                </Card>
                <Card>
                <Text style={styles.text}>Disability Name: SICKLE CELL DISABILITY</Text>
                  </Card>
                </Card>
                </View>
                <View>
                    <Card style = {styles.card}>
                        <Card>
                <TouchableOpacity onPress={()=>{
                    Linking.openURL("https://en.wikipedia.org/wiki/Deafblindness ")
                }}>
                <Image 
                    source ={require("../assets/disabilityEncyclopedia/19.png")}
                    style = {styles.image}
                    />
                    
                </TouchableOpacity>
                </Card>
                <Card>
                <Text style={styles.text}>Disability Name:DEAF AND BLINDNESS</Text>
                  </Card>
                </Card>
                </View>
                <View>
                    <Card style = {styles.card}>
                        <Card>
                <TouchableOpacity onPress={()=>{
                    Linking.openURL("https://en.wikipedia.org/wiki/Acid_attack   ")
                }}>
                <Image 
                    source ={require("../assets/disabilityEncyclopedia/20.png")}
                    style = {styles.image}
                    />
                    
                </TouchableOpacity>
                </Card>
                <Card>
                <Text style={styles.text}>Disability Name: ACID ATTACK VICTIM</Text>
                  </Card>
                </Card>
                </View>
                <View>
                    <Card style = {styles.card}>
                        <Card>
                <TouchableOpacity onPress={()=>{
                    Linking.openURL("https://en.wikipedia.org/wiki/Parkinson%27s_disease  ")
                }}>
                <Image 
                    source ={require("../assets/disabilityEncyclopedia/21.png")}
                    style = {styles.image}
                    />
                    
                </TouchableOpacity>
                </Card>
                <Card>
                <Text style={styles.text}>Disability Name: PARKINSON'S DISEASE</Text>
                  </Card>
                </Card>
                </View>
                <View>
                    <Card style = {styles.card}>
                        <Card>
                <TouchableOpacity onPress={()=>{
                    Linking.openURL("https://en.wikipedia.org/wiki/Dyslexia  ")
                }}>
                <Image 
                    source ={require("../assets/disabilityEncyclopedia/22.png")}
                    style = {styles.image}
                    />
                    
                </TouchableOpacity>
                </Card>
                <Card>
                <Text style={styles.text}>Disability Name:DYSLEXIA</Text>
                  </Card>
                </Card>
                </View>

            </View>
            </ScrollView>
        )
    }}
    const styles = StyleSheet.create({
        image:{
            width:RFValue(120),
            height:RFValue(90),
            marginTop:RFValue(30),
            alignSelf:'center'
        },
        text:{
            fontSize:RFValue(20),
            marginTop:RFValue(10),
            marginLeft:RFValue(20),
            textAlign:"center",

        },
        text1:{
            marginLeft:RFValue(240),
            fontSize:RFValue(20),
            marginTop:RFValue(-30)
        },
        card:{
            padding:RFValue(10),
            margin:RFValue(10),
        }

    })