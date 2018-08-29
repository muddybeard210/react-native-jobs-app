import React, { Component } from "react";
import { View, Text } from "react-native";
import Slides from "../components/Slides";

const SLIDE_DATA = [
  { text: "Welcome to JobApp", backgroundColor: "#03A9F4" },
  { text: "Use this app to find your next job!", backgroundColor: "#009688" },
  { text: "Set your location, then swipe away", backgroundColor: "#03A9F4" }
];

class WelcomeScreen extends Component {
  state = {};
  render() {
    return <Slides data={SLIDE_DATA} />;
  }
}

export default WelcomeScreen;
