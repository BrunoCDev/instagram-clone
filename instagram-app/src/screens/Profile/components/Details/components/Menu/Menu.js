import React, { Component } from "react";
import { View, Image } from "react-native";
import { styles } from "./MenuStyles";

import defaultDisplayActive from "./assets/images/defaultDisplayActive.png";
import seperateDisplay from "./assets/images/seperateDisplay.png";
import taggedDisplay from "./assets/images/taggedDisplay.png";
import bookmarkDisplay from "./assets/images/bookmarkDisplay.png";

class Menu extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          source={defaultDisplayActive}
          style={{
            height: 50,
            width: 50,
            marginBottom: 3.5
          }}
        />
        <Image source={seperateDisplay} style={styles.icon} />
        <Image source={taggedDisplay} style={styles.icon} />
        <Image source={bookmarkDisplay} style={styles.icon} />
      </View>
    );
  }
}

export default Menu;
