import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  Platform,
  ScrollView
} from "react-native";

import { Avatar } from "react-native-elements";
import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";
import firebase from "firebase";
import db from "../config";
import axios from "axios";
import {RFValue} from 'react-native-responsive-fontsize'
import {Icon } from 'react-native-elements'
import MyHeader from "../components/MyHeader"
import SettingScreen from './SettingScreen'

export default class CustomSideBarMenu extends Component {
  state = {
    userId: firebase.auth().currentUser.email,
    image: "#",
    name: "",
    docId: "",
  };

  selectPicture = async () => {
    const { cancelled, uri } = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!cancelled) {
      this.uploadImage(uri, this.state.userId);
    }
  };

  uploadImage = async (uri, imageName) => {
    var response = await fetch(uri);
    var blob = await response.blob();

    var ref = firebase
      .storage()
      .ref()
      .child("user_profiles/" + imageName);

    return ref.put(blob).then((response) => {
      this.fetchImage(imageName);
    });
  };

  fetchImage = (imageName) => {
    var storageRef = firebase
      .storage()
      .ref()
      .child("user_profiles/" + imageName);

    // Get the download URL
    storageRef
      .getDownloadURL()
      .then((url) => {
        this.setState({ image: url });
      })
      .catch((error) => {
        this.setState({ image: "#" });
      });
  };

  getUserProfile() {
    db.collection("users")
      .where("email_id", "==", this.state.userId)
      .onSnapshot((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          this.setState({
            name: doc.data().first_name + " " + doc.data().last_name,
            docId: doc.id,
            image: doc.data().image,
          });
        });
      });
  }

  componentDidMount() {
    this.fetchImage(this.state.userId);
    this.getUserProfile();
  }

  render() {
    return (
      <ScrollView>
          <MyHeader title="PROFILE" navigation={this.props.navigation}/>
      <View style={{ flex: 1 }}>
        <View
          style={{
       

            alignItems: "center",
            backgroundColor: "#0099ff",
            width:200,
            height:200,
            alignSelf:'center',
            marginTop:30
          }}
        >
          <Avatar
            rounded
            source={{
              uri: this.state.image,
            }}
            size={"xlarge"}
            onPress={() => this.selectPicture()}
            containerStyle={styles.imageContainer}
            showEditButton
          />

          <Text style={{ fontWeight: "100", fontSize: 20, paddingTop: 10 }}>
            {this.state.name}
          </Text>
        </View>
<View>
    <SettingScreen/>
</View>
<View style={styles.logOutContainer}>
          <TouchableOpacity style={styles.logOutButton}
          onPress = {() => {
              this.props.navigation.navigate('WelcomeScreen')
              firebase.auth().signOut()
          }}>
            <Text style = {{color:"white", fontSize:25}}>LOGOUT</Text>
          </TouchableOpacity>
        </View>
      </View>
      </ScrollView>
    );
  }
}

var styles = StyleSheet.create({
    container : {
        flex:1
      },
      drawerItemsContainer:{
        flex:0.8
      },
      logOutContainer : {
        flex:0.2,
        justifyContent:'flex-end',
        paddingBottom:30
      },
      logOutButton : {
        width:300,
        height:50,
        marginTop:40,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:25,
        marginLeft:60,
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
      logOutText:{
        fontSize: 30,
        fontWeight:'bold'
      },
      imageContainer: {
        flex: 0.75,
        width: 100,
        height: 100,
        marginLeft: -10,
        marginTop: 40,
    
      },
  
})