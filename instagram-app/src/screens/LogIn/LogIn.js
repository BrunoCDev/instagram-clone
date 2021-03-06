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
import { styles } from "./LogInStyles";
import instagramLogo from "./../../assets/images/instagramLogo.png";
import { connect } from "react-redux";
import { handleLogin } from "./../../ducks/user";

class LogIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
    this.handleEmail = this.handleEmail.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }

  handleEmail(val) {
    this.setState({ email: val });
  }

  handlePassword(val) {
    this.setState({ password: val });
  }

  handleLogin() {
    const { email, password } = this.state;
    const { navigate } = this.props.navigation;
    this.props.handleLogin(email, password).then(res => {
      if (res.value) {
        try {
          AsyncStorage.setItem("user", res.value.id.toString());
          navigate("Home");
        } catch (error) {
          console.log(error);
          Alert.alert("Something went wrong", "Please try again!");
        }
      } else {
        Alert.alert("Something went wrong", "Username/Password not found!");
      }
    });
  }

  render(props) {
    const { password, email } = this.state;
    return (
      <Container style={styles.container}>
        <Text style={{ textAlign: "center", color: "#bababa", paddingTop: 20 }}>
          English
        </Text>
        <Content>
          <Body>
            <View>
              <Image
                source={instagramLogo}
                resizeMode="contain"
                style={styles.image}
              />
            </View>
            <TextInput
              underlineColorAndroid="transparent"
              placeholder="Phone number, email or username"
              style={styles.input}
              onChangeText={this.handleEmail}
            />
            <TextInput
              underlineColorAndroid="transparent"
              placeholder="Password"
              secureTextEntry={true}
              style={styles.input}
              onChangeText={this.handlePassword}
            />
            <Button
              style={
                email.length && password.length
                  ? styles.loginButtonEnabled
                  : styles.loginButton
              }
              onPress={this.handleLogin}
              isDisabled={email.length && password.length ? false : true}
            >
              <Text
                style={
                  email.length && password.length
                    ? styles.loginTextEnabled
                    : styles.loginText
                }
              >
                Log in
              </Text>
            </Button>
            <View style={styles.loginTextStyle}>
              <Text style={styles.text}>Forgot your login details?</Text>
              <TouchableWithoutFeedback>
                <Text style={styles.helpButton}>Get help signing in.</Text>
              </TouchableWithoutFeedback>
            </View>
          </Body>
        </Content>
        <Divider style={styles.divider} />
        <Footer>
          <FooterTab style={styles.footerTab}>
            <Body>
              <View style={styles.textStyle}>
                <Text style={styles.text}>Don't have an account?</Text>
                <TouchableWithoutFeedback
                  onPress={() => this.props.navigation.navigate("SignUp")}
                >
                  <Text style={styles.helpButton}>Sign up.</Text>
                </TouchableWithoutFeedback>
              </View>
            </Body>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps, { handleLogin })(LogIn);
