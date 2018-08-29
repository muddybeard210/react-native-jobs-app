import React, { Component } from "react";
import { View, Text, ScrollView, Dimensions } from "react-native";

const SCREEN_WIDTH = Dimensions.get("window").width;

class Slides extends Component {
  state = {};
  renderSlides = () => {
    return this.props.data.map(slide => {
      return (
        <View
          key={slide.text}
          style={[
            styles.slideStyle,
            { backgroundColor: slide.backgroundColor }
          ]}
        >
          <Text style={styles.slideText}>{slide.text}</Text>
        </View>
      );
    });
  };
  render() {
    return (
      <ScrollView horizontal style={{ flex: 1 }} pagingEnabled>
        {this.renderSlides()}
      </ScrollView>
    );
  }
}

const styles = {
  slideText: {
    fontSize: 30,
    color: "white"
  },
  slideStyle: {
    flex: 1,
    width: SCREEN_WIDTH,
    justifyContent: "center",
    alignItems: "center"
  }
};

export default Slides;
