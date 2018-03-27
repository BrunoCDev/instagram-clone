import React, { Component } from "react";
import { TouchableWithoutFeedback, View, Image } from "react-native";
import { styles } from "./BottomNavStyles";

import homeIcon from "./../../assets/images/homeIcon.png";
import searchIcon from "./../../assets/images/searchIcon.png";
import createIcon from "./../../assets/images/createIcon.png";
import activityIcon from "./../../assets/images/activityIcon.png";
import profileIcon from "./../../assets/images/profileIcon.png";

class BottomNav extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View>
          <TouchableWithoutFeedback>
            <Image source={homeIcon} style={styles.icons} />
          </TouchableWithoutFeedback>
        </View>
        <View>
          <TouchableWithoutFeedback>
            <Image source={searchIcon} style={styles.icons} />
          </TouchableWithoutFeedback>
        </View>
        <View>
          <TouchableWithoutFeedback>
            <Image source={createIcon} style={styles.icons} />
          </TouchableWithoutFeedback>
        </View>
        <View>
          <TouchableWithoutFeedback>
            <Image source={activityIcon} style={styles.icons} />
          </TouchableWithoutFeedback>
        </View>
        <View>
          <TouchableWithoutFeedback>
            <Image source={profileIcon} style={styles.icons} />
          </TouchableWithoutFeedback>
        </View>
      </View>
    );
  }
}

export default BottomNav;
