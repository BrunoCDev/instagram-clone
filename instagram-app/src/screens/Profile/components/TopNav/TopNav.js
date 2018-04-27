import React, { Component } from "react";
import { View, Text, Image } from "react-native";
import { styles } from "./TopNavStyles";

import MenuIcon from "./../../../../assets/images/menuIcon.png";

class TopNav extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.subContainer}>
          <Text style={styles.textName}>{this.props.name}</Text>
          <Image style={styles.menuIcon} source={MenuIcon} />
        </View>
      </View>
    );
  }
}

export default TopNav;
