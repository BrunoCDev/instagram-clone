import React, { Component } from "react";
import { styles } from "./NavStyles";

import { View, Text } from "react-native";

class Nav extends Component {
  render() {
    return (
      <View style={styles.navContainer}>
        <Text>Hello</Text>
      </View>
    );
  }
}

export default Nav;
