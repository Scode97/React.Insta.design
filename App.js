import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

import { StackNavigator } from "react-navigation";

import MainScreen from "./Components/MainScreen";
import { defaultIfEmpty } from "./node_modules/rxjs/operators";

class App extends Component {
  render() {
    return <AppStackNavigator />;
  }
}
export default App;

const AppStackNavigator = StackNavigator({
  Main: {
    screen: MainScreen
  }
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
