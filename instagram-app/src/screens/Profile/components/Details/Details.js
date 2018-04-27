import React, { Component } from "react";
import { View, Text, Image } from "react-native";
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
        <Image source={{ uri: this.state.image }} style={styles.avatar} />
        <Text>{this.state.posts}</Text>
        <Text>{this.state.followers}</Text>
        <Text>{this.state.following}</Text>
        <Text>{this.state.name}</Text>
        <Text>{this.state.description}</Text>
      </View>
    );
  }
}

export default Details;
