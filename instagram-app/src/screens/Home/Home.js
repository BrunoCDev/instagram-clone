import React, { Component } from "react";
import { View, Text, Button, AsyncStorage } from "react-native";
import { styles } from "./HomeStyles";
import Nav from "./components/nav/Nav";

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
        <Button title="Logout" onPress={this.handleLogout} />
      </View>
    );
  }
}

export default Home;
