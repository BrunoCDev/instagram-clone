import React, { Component } from "react";
import { View, Image, Text } from "react-native";
import { styles } from "./PostBottomNavStyles";
import like from "./../../assets/images/like.png";
import commentIcon from "./../../assets/images/commentIcon.png";
import directIcon from "./../../assets/images/postDirectIcon.png";
import bookmarkIcon from "./../../assets/images/bookmarkIcon.png";

class PostBottomNav extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image source={like} style={styles.image} />
        <Image source={commentIcon} style={styles.image} />
        <Image source={directIcon} style={styles.image} />
        <Image source={bookmarkIcon} style={styles.imageBookmark} />
      </View>
    );
  }
}

export default PostBottomNav;
