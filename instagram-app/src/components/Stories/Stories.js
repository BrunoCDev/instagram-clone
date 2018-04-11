import React, { Component } from "react";
import { View, Text, Image, TouchableWithoutFeedback } from "react-native";
// import LinearGradient from "react-native-linear-gradient";
import { styles } from "./StoriesStyles";

class Stories extends Component {
  constructor() {
    super();
    this.state = {
      data: [
        "https://facebook.github.io/react-native/docs/assets/favicon.png",
        "https://facebook.github.io/react-native/docs/assets/favicon.png"
      ]
    };
  }

  render() {
    return (
      <View style={styles.container}>
        {this.state.data
          ? this.state.data.map((el, i) => {
              return (
                <Image
                  key={i}
                  style={styles.imageActive}
                  source={{
                    uri: el
                  }}
                />
              );
            })
          : null}
      </View>
    );
  }
}

export default Stories;
