import React, { Component } from "react";
import { View, Text, TouchableWithoutFeedback } from "react-native";
import Button from "apsl-react-native-button";
import { styles } from "./WelcomeStyles";
import { connect } from "react-redux";

class Welcome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: this.props.user.username
    };

    this.handleSave = this.handleSave.bind(this);
    this.changeUsername = this.changeUsername.bind(this);
  }

  componentDidMount() {
    if (!this.props.user.username) {
      this.props.navigation.navigate("UsernameChange");
    }
  }

  handleSave() {
    this.props.navigation.navigate("Home");
  }

  changeUsername() {
    this.props.navigation.navigate("UsernameChange");
  }

  render() {
    const { username } = this.state;
    return (
      <View style={styles.background}>
        <View style={styles.header}>
          <Text style={styles.headerText}>WELCOME TO INSTAGRAM,</Text>
          <Text style={styles.headerText}>{username}</Text>
        </View>
        <View>
          <Text style={styles.text}>
            Find people to follow and start sharing photos.
          </Text>
          <Text style={styles.text}>You can change your username anytime.</Text>
        </View>
        <View>
          <Button style={styles.button} onPress={this.handleSave}>
            <Text style={styles.buttonText}>Next</Text>
          </Button>
        </View>
        <TouchableWithoutFeedback onPress={this.changeUsername}>
          <View>
            <Text style={styles.change}>Change username</Text>
          </View>
        </TouchableWithoutFeedback>
        <View style={styles.termsView}>
          <Text style={styles.termsText}>By signing up, you agree to our </Text>
          <Text style={styles.termsBoldText}>Terms </Text>
          <Text style={styles.termsText}>& </Text>
          <Text style={styles.termsBoldText}>Privacy Policy.</Text>
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps)(Welcome);
