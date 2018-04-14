import React, { Component } from "react";
import { styles } from "./PostStyles";
import { View, Text, Image } from "react-native";
import PostTopNav from "./../PostTopNav/PostTopNav";

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.data
    };
  }
  render() {
    const { data } = this.state;
    return (
      <View style={styles.container}>
        <PostTopNav data={this.state.data} />
        <Image source={{ uri: data.image }} style={styles.image} />
      </View>
    );
  }
}

export default Post;
