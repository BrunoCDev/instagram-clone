import React, { Component } from "react";
import {
  View,
  Text,
  Button,
  AsyncStorage,
  Image,
  ScrollView
} from "react-native";
import { styles } from "./HomeStyles";
import Nav from "./../../components/Nav/Nav";

import { Divider } from "react-native-elements";
import BottomNav from "./../../components/BottomNav/BottomNav";
import watchIcon from "./../../assets/images/watchIcon.png";
import Stories from "./../../components/Stories/Stories";
import Post from "./../../components/Post/Post";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          image:
            "https://facebook.github.io/react-native/docs/assets/favicon.png",
          name: "testname",
          postImage:
            "https://facebook.github.io/react-native/docs/assets/favicon.png",
          likes: 22,
          description: "this is a test description",
          when: "2 Hours Ago"
        }
      ]
    };
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout() {
    const { navigate } = this.props.navigation;
    AsyncStorage.setItem("user", "").then(res => {
      navigate("LogIn");
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Nav />
        <Divider style={styles.divider} />
        <View style={styles.storiesContainer}>
          <View style={styles.textContainer}>
            <View style={styles.storiesTextContainer}>
              <Text style={styles.storiesText}>Stories</Text>
            </View>
            <View style={styles.watchContainer}>
              <Image source={watchIcon} style={styles.watchIcon} />
              <Text style={styles.watchText}>Watch All</Text>
            </View>
          </View>
          <View>
            <Stories />
          </View>
          <Divider style={styles.dividerStories} />
        </View>
        {/* <Button title="Logout" onPress={this.handleLogout} /> */}
        <ScrollView style={styles.scrollview}>
          {this.state.data.map((post, i) => {
            return <Post key={i} data={post} />;
          })}
        </ScrollView>
        <BottomNav />
      </View>
    );
  }
}

export default Home;
