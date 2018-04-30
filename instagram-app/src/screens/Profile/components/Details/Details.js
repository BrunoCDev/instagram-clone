import React, { Component } from "react";
import { View, Text, Image } from "react-native";
import Button from "apsl-react-native-button";
import { styles } from "./DetailsStyles";

class Details extends Component {
  constructor() {
    super();
    this.state = {
      image: "https://facebook.github.io/react-native/docs/assets/favicon.png",
      fullName: "Bruno Carvalho",
      description: "21, Viseu :)",
      posts: 18,
      followers: 157,
      following: 555
    };
  }
  render() {
    return (
      <View style={styles.container}>
        {/*  */}
        <View style={styles.firstContainer}>
          {/*  */}
          <View style={styles.imageContainer}>
            <Image source={{ uri: this.state.image }} style={styles.image} />
          </View>
          <View style={styles.infoContainer}>
            <View style={styles.statsContainer}>
              <View style={styles.textContainer}>
                <Text style={styles.statsText}>{this.state.posts}</Text>
                <Text>posts</Text>
              </View>
              <View style={styles.textContainer}>
                <Text style={styles.statsText}>{this.state.followers}</Text>
                <Text>followers</Text>
              </View>
              <View style={styles.textContainer}>
                <Text style={styles.statsText}>{this.state.following}</Text>
                <Text>following</Text>
              </View>
            </View>
            <View style={styles.buttonContainer}>
              <Button style={styles.button}>
                <Text style={styles.buttonText}>Edit Profile</Text>
              </Button>
            </View>
          </View>
        </View>
        {/*  */}
        <View style={styles.thirdContainer}>
          <Text>{this.state.fullName}</Text>
          <Text>{this.state.description}</Text>
        </View>
        {/*  */}
      </View>
    );
  }
}

export default Details;
