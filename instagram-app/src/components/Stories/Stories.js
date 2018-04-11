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
        {
          image:
            "https://facebook.github.io/react-native/docs/assets/favicon.png",
          name: "you"
        },
        {
          image:
            "https://facebook.github.io/react-native/docs/assets/favicon.png",
          name: "name"
        },
        {
          image:
            "https://facebook.github.io/react-native/docs/assets/favicon.png",
          name: "testname"
        },
        {
          image:
            "https://facebook.github.io/react-native/docs/assets/favicon.png",
          name: "anothertestl"
        },
        {
          image:
            "https://facebook.github.io/react-native/docs/assets/favicon.png",
          name: "you"
        },
        {
          image:
            "https://facebook.github.io/react-native/docs/assets/favicon.png",
          name: "you"
        },
        {
          image:
            "https://facebook.github.io/react-native/docs/assets/favicon.png",
          name: "you"
        }
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
                    <View key={i}>
                      <View style={styles.imageDivider}>
                        <Image
                          style={styles.imageActive}
                          source={{
                            uri: el.image
                          }}
                        />
                      </View>
                      <Text style={styles.name}>
                        {el.name.length > 9
                          ? el.name.slice(0, 8) + ".."
                          : el.name}
                      </Text>
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
