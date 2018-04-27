import React, { Component } from "react";
import { styles } from "./NavStyles";
import camera from "./../../../../assets/images/cameraIcon.png";
import instagramIcon from "./../../../../assets/images/instagramIcon.png";
import dm from "./../../../../assets/images/dm.png";

import { View, Text, Image } from "react-native";

class Nav extends Component {
  render() {
    return (
      <View style={styles.navContainer}>
        <View>
          <Image source={camera} style={styles.camera} />
        </View>
        <View>
          <Image source={instagramIcon} style={styles.instagramIcon} />
        </View>
        <View>
          <Image source={dm} style={styles.dm} />
        </View>
      </View>
    );
  }
}

export default Nav;
