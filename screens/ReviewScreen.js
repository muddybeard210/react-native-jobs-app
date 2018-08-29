import React, { Component } from "react";
import { View, Text } from "react-native";

class ReviewScreen extends Component {
  state = {};
  //'navigationOptions' is a very specific name used for react navigation to pull out route specific customizations.  If you name this prop something else, it will not know to pull this data
  static navigationOptions = {
    title: "Review Jobs"
  };
  render() {
    return (
      <View>
        <Text>Hello from ReviewScreen</Text>
      </View>
    );
  }
}

export default ReviewScreen;
