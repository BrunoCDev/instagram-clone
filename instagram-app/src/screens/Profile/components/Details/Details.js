import React, { Component } from "react";
import { View, ScrollView, Text, Image, FlatList } from "react-native";
import Button from "apsl-react-native-button";
import { Divider } from "react-native-elements";
import { styles } from "./DetailsStyles";

import Menu from "./components/Menu/Menu";

class Details extends Component {
  constructor() {
    super();
    this.state = {
      image: "https://facebook.github.io/react-native/docs/assets/favicon.png",
      fullName: "Bruno Carvalho",
      description: "21, Viseu :)",
      posts: 18,
      followers: 157,
      following: 555,
      images: [
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
      ]
    };
  }
  render() {
    return (
      <View style={styles.container}>
        {/*  */}
        <View style={styles.mainContainer}>
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
        <View style={styles.nameContainer}>
          <Text style={styles.nameText}>{this.state.fullName}</Text>
          <Text style={styles.descriptionText}>{this.state.description}</Text>
        </View>
        {/*  */}
        <Divider style={styles.divider} />
        <Menu />
        <ScrollView showsVerticalScrollIndicator={false}>
          <FlatList
            numColumns={3}
            data={this.state.images}
            renderItem={(image, index) => (
              <View style={styles.postContainer}>
                <Image style={styles.postImage} source={{ uri: image.item }} />
              </View>
            )}
            keyExtractor={(image, index) => index}
          />
        </ScrollView>
      </View>
    );
  }
}

export default Details;
