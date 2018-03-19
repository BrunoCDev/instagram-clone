import React, { Component } from "react";
import { View, Text, Button, AsyncStorage, Image } from "react-native";
import { styles } from "./HomeStyles";
import Nav from "./components/nav/Nav";

import { Divider } from "react-native-elements";
import watchIcon from "./../../assets/images/watchIcon.png";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
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
            <Text>Placeholder for Stories</Text>
          </View>
        </View>
        <Button title="Logout" onPress={this.handleLogout} />
      </View>
    );
  }
}

export default Home;
