import React, { Component } from "react";
import { View, Text, ScrollView, Dimensions } from "react-native";
import { Button } from "react-native-elements";

const SCREEN_WIDTH = Dimensions.get("window").width;

class Slides extends Component {
  state = {};

  renderLastSlide = index => {
    if (index === this.props.data.length - 1) {
      return (
        //   react-native-elements uses props for styling instead of tradish styles
        <Button
          buttonStyle={styles.buttonStyle}
          title="Onwards!"
          raised
          onPress={this.props.onSlidesComplete}
        />
      );
    }
  };

  renderSlides = () => {
    return this.props.data.map((slide, index) => {
      return (
        <View
          key={slide.text}
          style={[
            styles.slideStyle,
            { backgroundColor: slide.backgroundColor }
          ]}
        >
          <Text style={styles.slideText}>{slide.text}</Text>
          {this.renderLastSlide(index)}
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
    color: "white",
    textAlign: "center"
  },
  slideStyle: {
    flex: 1,
    width: SCREEN_WIDTH,
    justifyContent: "center",
    alignItems: "center"
  },
  buttonStyle: {
    backgroundColor: "#0288D1",
    marginTop: 15
  }
};

export default Slides;
