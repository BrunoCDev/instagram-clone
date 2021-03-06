import React, { Component } from "react";
import styles from "./UsernameChangeStyles";
import { connect } from "react-redux";

import { View, Text, TextInput } from "react-native";
import Button from "apsl-react-native-button";
import { Container, Content, Body, Left, Right, Icon } from "native-base";
import { checkUsername, updateUsername } from "../../ducks/user";

class UsernameChange extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      wrongUsername: false
    };
    this.handleUsername = this.handleUsername.bind(this);
    this.updateUsername = this.updateUsername.bind(this);
  }

  componentDidMount() {
    if (this.props.user.username) {
      this.setState({ username: this.props.user.username });
    }
  }

  handleUsername(val) {
    this.setState({ wrongUsername: true });
    setTimeout(
      () =>
        this.props
          .checkUsername(val)
          .then(res => {
            if (res.value.username) {
              this.setState({
                wrongUsername: true
              });
            } else {
              this.setState({ wrongUsername: false, username: val });
            }
          })
          .catch(console.log),
      100
    );
  }

  updateUsername() {
    const { username } = this.state;
    const { navigate } = this.props.navigation;
    const { id } = this.props.user;
    this.props.updateUsername(username, id).then(() => navigate("Welcome"));
  }

  render() {
    const { wrongUsername } = this.state;
    return (
      <Container style={styles.background}>
        <Content>
          <Body>
            <Text style={styles.header}>CHANGE USERNAME</Text>
            <Text style={styles.text}>
              Pick username for your account. You can
            </Text>
            <Text style={styles.text}>always change it later.</Text>
            <View>
              <TextInput
                placeholder="Username"
                onChangeText={e => this.handleUsername(e)}
                style={wrongUsername ? styles.inputWrong : styles.input}
                underlineColorAndroid="transparent"
              />
              {wrongUsername ? null : (
                <Icon
                  name="checkmark"
                  style={{
                    elevation: 1,
                    marginLeft: 260,
                    position: "absolute",
                    marginTop: 28,
                    color: "#44c153"
                  }}
                />
              )}
            </View>
            <Button
              style={styles.button}
              isDisabled={this.state.wrongUsername}
              onPress={() => this.updateUsername()}
            >
              <Text style={styles.buttonText}>Next</Text>
            </Button>
          </Body>
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps, { checkUsername, updateUsername })(
  UsernameChange
);
