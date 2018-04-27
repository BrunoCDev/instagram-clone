import React, { Component } from "react";
import { ScrollView, View, Text } from "react-native";
import { Divider } from "react-native-elements";

import { styles } from "./ProfileStyles";
import BottomNav from "./../../components/BottomNav/BottomNav";
import TopNav from "./components/TopNav/TopNav";
import Details from "./components/Details/Details";

class Profile extends Component {
  constructor() {
    super();
    this.state = {
      name: "brunorcarvalho96"
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <TopNav name={this.state.name} />
          <Divider style={styles.divider} />
          <Details />
        </ScrollView>
        <BottomNav page={"Profile"} navigate={this.props.navigation.navigate} />
      </View>
    );
  }
}

export default Profile;
