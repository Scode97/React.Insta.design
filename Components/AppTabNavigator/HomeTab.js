import React from "react";
import { StyleSheet, Container, Content, View, ScrollView } from "react-native";
import { Icon } from "native-base";

import CardComponent from "../CardComponent";

class HomeTab extends React.Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <Icon name="ios-home" style={{ color: tintColor }} />
    )
  };
  render() {
    return (
      <View style={styles.container}>
        {/* <ScrollView
          horizontal={false}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            alignItems: "center",
            paddingStart: 5,
            paddingEnd: 5
          }}
        > */}
        <ScrollView vertical={true}>
          <CardComponent imageSource="first" likes="20" />
          <CardComponent imageSource="second" likes="40" />
          <CardComponent imageSource="third" likes="50" />
        </ScrollView>
      </View>
    );
  }
}
export default HomeTab;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
  }
});
