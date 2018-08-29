import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createBottomTabNavigator } from "react-navigation";
import WelcomeScreen from "./screens/WelcomeScreen";
import AuthScreen from "./screens/AuthScreen";

export default class App extends React.Component {
  render() {
    const MainNavigator = createBottomTabNavigator({
      Auth: { screen: AuthScreen },
      Welcome: { screen: WelcomeScreen }
    });

    return <MainNavigator />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
