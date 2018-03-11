import React, { Component } from "react";
import { View, Text, Button, AsyncStorage } from "react-native";

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
      <View>
        <Text>Hello</Text>
        <Button title="Logout" onPress={this.handleLogout} />
      </View>
    );
  }
}

export default Home;
