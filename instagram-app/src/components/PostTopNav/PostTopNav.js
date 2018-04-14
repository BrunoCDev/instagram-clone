import React, { Component } from "react";
import { View, Text, Image } from "react-native";
import menu from "./../../assets/images/menuIcon.png";
import { styles } from "./PostTopNavStyles";

class PostTopNav extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image source={{ uri: this.props.data.image }} style={styles.avatar} />
        <Text style={styles.name}>{this.props.data.name}</Text>
        <Image source={menu} style={styles.menu} />
      </View>
    );
  }
}

export default PostTopNav;
