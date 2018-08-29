import React, { Component } from "react";
import { View, Text, Platform } from "react-native";
import { Button } from "react-native-elements";

class ReviewScreen extends Component {
  state = {};
  //'navigationOptions' is a very specific name used for react navigation to pull out route specific customizations.  If you name this prop something else, it will not know to pull this data
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: "Review Jobs",
      headerRight: (
        <Button
          title="Settings"
          onPress={() => {
            navigation.navigate("settings");
          }}
          backgroundColor="transparent"
          color="rgba(0, 122, 255, 1)"
        />
      ),
      style: {
        marginTop: Platform.OS === "android" ? 24 : 0
      }
    };
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
