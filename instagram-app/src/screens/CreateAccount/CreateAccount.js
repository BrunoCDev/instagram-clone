import React, { Component } from "react";
import {
  Container,
  Header,
  Title,
  Content,
  Footer,
  FooterTab,
  Left,
  Right,
  Body,
  Icon,
  Text
} from "native-base";

import {
  TextInput,
  View,
  TouchableWithoutFeedback,
  Image,
  AsyncStorage,
  Alert
} from "react-native";
import Button from "apsl-react-native-button";
import { Divider } from "react-native-elements";
import { connect } from "react-redux";
import { styles } from "./CreateAccountStyles";
import { createAccount } from "./../../ducks/user";

class CreateAccount extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: "",
      password: "",
      wrongFullName: false,
      wrongPassword: false
    };
    this.handleFullName = this.handleFullName.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.handleCreate = this.handleCreate.bind(this);
  }

  handleFullName(val) {
    this.setState({ fullName: val });
  }

  handlePassword(val) {
    this.setState({ password: val });
  }

  handleCreate() {
    const { fullName, password, wrongPassword, wrongFullName } = this.state;
    const { navigate } = this.props.navigation;
    if (fullName.length === 0) {
      this.setState({ wrongFullName: true });
    } else if (password.length < 7) {
      this.setState({ wrongPassword: true });
    } else {
      this.setState({ wrongPassword: false, wrongFullName: false });
      this.props
        .createAccount(fullName, password, this.props.email)
        .then(res => {
          res.value.id > -1
            ? AsyncStorage.setItem("user", res.value.id.toString())
                .then(() => navigate("Welcome"))
                .catch(console.log)
            : Alert.alert("Problem", "Something went wrong!");
        })
        .catch(console.log);
    }
  }

  render() {
    const { fullName, password, wrongFullName, wrongPassword } = this.state;
    return (
      <Container style={styles.container}>
        <Content>
          <View style={styles.header}>
            <Text style={styles.headerText}>ENTER NAME AND PASSWORD</Text>
          </View>
          <Body style={{ marginTop: 15 }}>
            <View>
              <TextInput
                placeholder="Full name"
                style={wrongFullName ? styles.inputWrong : styles.input}
                underlineColorAndroid="transparent"
                onChangeText={this.handleFullName}
              />
              {wrongFullName ? (
                <Text style={styles.wrongPassword}>
                  Please provide a valid Full Name.
                </Text>
              ) : null}
            </View>
            <View>
              <TextInput
                placeholder="Password"
                secureTextEntry
                style={wrongPassword ? styles.inputWrong : styles.input}
                underlineColorAndroid="transparent"
                onChangeText={this.handlePassword}
              />
              {wrongPassword ? (
                <Text style={styles.wrongPassword}>
                  Passwords must be at least 6 characters.
                </Text>
              ) : null}
            </View>
            <View>
              <Button
                style={styles.button}
                onPress={this.handleCreate}
                isDisabled={
                  fullName.length === 0 || password.length === 0 ? true : false
                }
                disabledStyle={styles.buttonDisabled}
              >
                <Text
                  style={
                    fullName.length === 0 || password.length === 0
                      ? { color: "#afdaff" }
                      : { color: "white" }
                  }
                  onPress={this.handleCreate}
                >
                  Next
                </Text>
              </Button>
            </View>
          </Body>
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps, { createAccount })(CreateAccount);
