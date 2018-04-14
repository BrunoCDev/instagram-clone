import React, { Component } from "react";
import { styles } from "./PostStyles";
import { View, Text, Image } from "react-native";
import PostTopNav from "./../PostTopNav/PostTopNav";
import PostBottomNav from "./../PostBottomNav/PostBottomNav";

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
      <View
        style={
          this.props.index === 0 ? styles.firstContainer : styles.container
        }
      >
        <PostTopNav data={this.state.data} />
        <Image source={{ uri: data.image }} style={styles.image} />
        <PostBottomNav />
        <View>
          <Text style={styles.likes}>{data.likes} likes</Text>
        </View>
        {this.state.data.description ? (
          <View style={styles.textContainer}>
            <Text style={styles.nameText}>{data.name}</Text>
            <Text style={styles.description}>{data.description}</Text>
          </View>
        ) : null}
        <View style={styles.textContainer}>
          <Text style={styles.timeText}>{data.when} HOURS AGO</Text>
        </View>
      </View>
    );
  }
}

export default Post;
