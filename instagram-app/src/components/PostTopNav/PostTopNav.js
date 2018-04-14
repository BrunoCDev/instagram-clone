import React, { Component } from "react";
import { View, Text, Image } from "react-native";
import { styles } from "./PostTopNavStyles";

class PostTopNav extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image source={{ uri: this.props.data.image }} style={styles.avatar} />
        <Text>Hello</Text>
      </View>
    );
  }
}

export default PostTopNav;
