import React, { Component } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import {
  Card,
  CardItem,
  Thumbnail,
  Body,
  Left,
  Right,
  Button,
  Icon,
  Content
} from "native-base";

class CardComponent extends Component {
  render() {
    const images = {
      first: require("../Images/num2.jpeg"),
      second: require("../Images/num3.jpeg"),
      third: require("../Images/num4.jpeg")
    };
    return (
      <Card>
        <CardItem>
          <Left>
            <Thumbnail source={require("../Images/num1.jpeg")} />

            <Body>
              <Text>Positive Affirmations</Text>
              <Text note>March 20, 2018</Text>
            </Body>
          </Left>
        </CardItem>

        <CardItem cardBody>
          <Image
            // source={require("../Images/num2.jpeg")}
            source={images[this.props.imageSource]}
            style={{ height: 200, width: null, flex: 1 }}
          />
        </CardItem>

        <CardItem style={{ height: 45 }}>
          <Left>
            <Button transparent>
              <Icon name="ios-heart-outline" style={{ color: "black" }} />
            </Button>
            <Button transparent>
              <Icon name="ios-chatbubbles-outline" style={{ color: "black" }} />
            </Button>
            <Button transparent>
              <Icon name="ios-send-outline" style={{ color: "black" }} />
            </Button>
          </Left>
        </CardItem>

        <CardItem style={{ height: 20 }}>
          <Text> {this.props.likes}</Text>
        </CardItem>

        <CardItem>
          <Body>
            <Text>
              <Text style={{ fontWeight: "900" }}>positive affirmations </Text>
              “You cannot be protected from the things that frighten you and
              hurt you, but if you identify with the part of your being that is
              responsible for transformation, then you aare always the equal, or
              more than the equal of the things that frighten you.” ― Jordan B.
              Peterson
            </Text>
          </Body>
        </CardItem>
      </Card>
    );
  }
}
export default CardComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
