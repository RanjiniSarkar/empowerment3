import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  ScrollView,
  Image,
  TouchableOpacity,
  Linking
} from "react-native";
import MyHeader from "../components/MyHeader";
import { RFValue } from "react-native-responsive-fontsize";
import { Card } from "react-native-elements";

import { Notifications } from "expo";
import * as Permissions from "expo-permissions";
import Constants from "expo-constants";
import db from "../config";

export default class ListScreen extends React.Component {
  componentDidMount() {
    //Push Notification
    // Expert Id
    this.registerForPushNotifications("XYZ");

    this._notificationSubscription = Notifications.addListener(
      this._handleNotification
    );
  }

  askPermissions = async () => {
    const { status: existingStatus } = await Permissions.getAsync(
      Permissions.NOTIFICATIONS
    );

    let finalStatus = existingStatus;
    if (existingStatus !== "granted") {
      const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
      finalStatus = status;
    }
    if (finalStatus !== "granted") {
      return false;
    }
    return true;
  };

  registerForPushNotifications = async expertId => {
    const enabled = await this.askPermissions();
    if (!enabled) {
      return Promise.resolve();
    }

    // Get the token that uniquely identifies this device
    let token = await Notifications.getExpoPushTokenAsync();

    db.collection("device_notification_ids")
      .doc(token)
      .set({
        notification_token: token,
        student_id: expertId
      });

    if (Platform.OS === "android") {
      Notifications.createChannelAndroidAsync("default", {
        name: "default",
        sound: true,
        priority: "max",
        vibrate: [0, 250, 250, 250]
      });
    }
  };

  _handleNotification = notification => {
    Vibration.vibrate();
  };

  render() {
    return (
      <ScrollView>
        <MyHeader
          title="THE ACCESSIBLE INDIA"
          navigation={this.props.navigation}
        />
        <View style={{ flex: 1 }}>
          <Image
            source={require("../assets/calendar.png")}
            style={{
              width: 430,
              height: 350,
              alignSelf: "center",
              marginTop: RFValue(60)
            }}
          />
          <Card>
            <TouchableOpacity
              onPress={() => {
                Linking.openURL(
                  "https://www.disabilitytalent.org/single-post/2019/12/31/2020-Diversity-Inclusion-Disability-Awareness-2020Calendar                         "
                );
              }}
            >
              <Image
                source={require("../assets/event.png")}
                style={{
                  width: RFValue(350),
                  height: RFValue(320),
                  marginTop: RFValue(40),
                  marginLeft: RFValue(15)
                }}
              />
            </TouchableOpacity>
          </Card>
          <Card>
            <TouchableOpacity
              onPress={() => {
                Linking.openURL("https://specialolympicsbharat.org/calendar/ ");
              }}
            >
              <Image
                source={require("../assets/sports.png")}
                style={{
                  width: RFValue(350),
                  height: RFValue(400),
                  marginTop: RFValue(40),
                  marginLeft: RFValue(5)
                }}
              />
            </TouchableOpacity>
          </Card>
        </View>
      </ScrollView>
    );
  }
}
