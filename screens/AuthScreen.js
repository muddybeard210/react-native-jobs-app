import React, { Component } from "react";
import { View, Text } from "react-native";
import { connect } from "react-redux";
import * as actions from "../actions";

class AuthScreen extends Component {
  componentDidMount() {
    this.props.facebookLogin();
  }
  state = {};
  render() {
    return (
      <View>
        <Text>Hello from AuthScreen</Text>
      </View>
    );
  }
}

export default connect(
  null,
  actions
)(AuthScreen);
