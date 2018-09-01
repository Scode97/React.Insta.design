import React, { Component } from "react";
import { StyleSheet, Platform } from "react-native";

import { Icon } from "native-base";

import { TabNavigator } from "react-navigation";

import HomeTab from "./AppTabNavigator/HomeTab";
import SearchTab from "./AppTabNavigator/SearchTab";
import AddMediaTab from "./AppTabNavigator/AddMediaTab";
import LikesTab from "./AppTabNavigator/LikesTab";
import ProfileTab from "./AppTabNavigator/ProfileTab";

class MainScreen extends Component {
  static navigationOptions = {
    headerLeft: <Icon name="ios-camera-outline" style={{ paddingLeft: 10 }} />,
    title: "Instagram",
    headerRight: <Icon name="ios-send-outline" style={{ paddingRight: 10 }} />
  };

  render() {
    return <AppTabNavigator />;
  }
}

export default MainScreen;

const AppTabNavigator = TabNavigator(
  {
    HomeTab: {
      screen: HomeTab
    },
    SearchTab: {
      screen: SearchTab
    },
    AddMediaTab: {
      screen: AddMediaTab
    },
    LikesTab: {
      screen: LikesTab
    },
    ProfileTab: {
      screen: ProfileTab
    }
  },
  {
    animationEnabled: true,
    swipeEnabled: true,
    tabBarPosition: "bottom",
    tabBarOptions: {
      style: {
        //requires for android
        ...Platform.select({
          android: {
            backgroundColor: "white"
          }
        })
      },
      gesturesEnabled: false,
      activeTintColor: "#000",
      inactiveTintColor: "#d1cece",
      showLabel: false, //removes the text
      showIcon: true //requires for android
    }
  },
  {
    cardStack: {
      gesturesEnabled: true
    }
  }
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
