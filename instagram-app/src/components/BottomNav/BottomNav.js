import React, { Component } from "react";
import { TouchableWithoutFeedback, View, Image } from "react-native";
import { styles } from "./BottomNavStyles";
import { Divider } from "react-native-elements";

import homeIcon from "./../../assets/images/homeIcon.png";
import homeIconActive from "./../../assets/images/homeIconActive.png";

import searchIcon from "./../../assets/images/searchIcon.png";
import createIcon from "./../../assets/images/createIcon.png";
import activityIcon from "./../../assets/images/activityIcon.png";

import profileIcon from "./../../assets/images/profileIcon.png";
import profileIconActive from "./../../assets/images/profileIconActive.png";

class BottomNav extends Component {
  render() {
    const { page } = this.props;
    return (
      <View style={styles.mainContainer}>
        <Divider style={styles.divider} />
        <View style={styles.container}>
          <View>
            <TouchableWithoutFeedback
              onPress={() => this.props.navigate("Home")}
            >
              <Image
                source={page === "Home" ? homeIconActive : homeIcon}
                style={styles.icons}
              />
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
            <TouchableWithoutFeedback
              onPress={() => this.props.navigate("Profile")}
            >
              <Image
                source={page === "Profile" ? profileIconActive : profileIcon}
                style={styles.icons}
              />
            </TouchableWithoutFeedback>
          </View>
        </View>
      </View>
    );
  }
}

export default BottomNav;
