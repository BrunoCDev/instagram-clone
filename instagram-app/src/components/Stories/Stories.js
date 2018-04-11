import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  TouchableWithoutFeedback,
  ScrollView
} from "react-native";
// import LinearGradient from "react-native-linear-gradient";
import { styles } from "./StoriesStyles";

class Stories extends Component {
  constructor() {
    super();
    this.state = {
      data: [
        "https://facebook.github.io/react-native/docs/assets/favicon.png",
        "https://facebook.github.io/react-native/docs/assets/favicon.png",
        "https://facebook.github.io/react-native/docs/assets/favicon.png",
        "https://facebook.github.io/react-native/docs/assets/favicon.png",
        "https://facebook.github.io/react-native/docs/assets/favicon.png",
        "https://facebook.github.io/react-native/docs/assets/favicon.png",
        "https://facebook.github.io/react-native/docs/assets/favicon.png",
        "https://facebook.github.io/react-native/docs/assets/favicon.png",
        "https://facebook.github.io/react-native/docs/assets/favicon.png",
        "https://facebook.github.io/react-native/docs/assets/favicon.png",
        "https://facebook.github.io/react-native/docs/assets/favicon.png",
        "https://facebook.github.io/react-native/docs/assets/favicon.png",
        "https://facebook.github.io/react-native/docs/assets/favicon.png",
        "https://facebook.github.io/react-native/docs/assets/favicon.png",
        "https://facebook.github.io/react-native/docs/assets/favicon.png",
        "https://facebook.github.io/react-native/docs/assets/favicon.png",
        "https://facebook.github.io/react-native/docs/assets/favicon.png",
        "https://facebook.github.io/react-native/docs/assets/favicon.png"
      ],
      names: [
        "You",
        "testname",
        "larry",
        "You",
        "testname",
        "larry",
        "You",
        "testname",
        "larry",
        "You",
        "testname",
        "larry",
        "You",
        "testname",
        "larry",
        "You",
        "testname",
        "larry"
      ]
    };
  }

  render() {
    return (
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <View>
          <View style={styles.container}>
            {this.state.data
              ? this.state.data.map((el, i) => {
                  return (
                    <View key={i} style={styles.imageDivider}>
                      <Image
                        style={styles.imageActive}
                        source={{
                          uri: el
                        }}
                      />
                    </View>
                  );
                })
              : null}
          </View>
          <View style={styles.nameContainer}>
            {this.state.names
              ? this.state.names.map((el, i) => {
                  return (
                    <View key={i}>
                      <Text style={styles.name}>{el}</Text>
                    </View>
                  );
                })
              : null}
          </View>
        </View>
      </ScrollView>
    );
  }
}

export default Stories;
