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
import { styles } from "./SignUpStyles";
import SignUpLogo from "./../../assets/images/SignUpLogo.png";
import { saveEmail } from "./../../ducks/user";
import { connect } from "react-redux";

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      phoneCheck: false,
      emailCheck: true,
      email: "",
      wrongEmail: false
    };
    this.handlePhoneCheck = this.handlePhoneCheck.bind(this);
    this.handleEmailCheck = this.handleEmailCheck.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    this.submitEmail = this.submitEmail.bind(this);
  }

  handlePhoneCheck() {
    this.setState({ phoneCheck: true, emailCheck: false });
  }

  handleEmailCheck() {
    this.setState({ phoneCheck: false, emailCheck: true });
  }

  handleEmail(val) {
    this.setState({ email: val });
  }

  submitEmail() {
    const { email } = this.state;
    const { navigate } = this.props.navigation;
    if (email.includes("@") === false) {
      this.setState({ wrongEmail: true });
    } else {
      this.setState({ wrongEmail: false });
      this.props.saveEmail(email);
      navigate("CreateAccount");
    }
  }

  render() {
    const { phoneCheck, emailCheck, footer, email, wrongEmail } = this.state;
    return (
      <Container style={styles.container}>
        <Image source={SignUpLogo} resizeMode="contain" style={styles.logo} />
        <Content>
          <Body>
            <View style={styles.options}>
              <TouchableWithoutFeedback onPress={this.handlePhoneCheck}>
                <Text
                  style={
                    phoneCheck
                      ? styles.phoneButtonActive
                      : styles.phoneButtonInactive
                  }
                >
                  PHONE
                </Text>
              </TouchableWithoutFeedback>
              <TouchableWithoutFeedback onPress={this.handleEmailCheck}>
                <Text
                  style={
                    emailCheck
                      ? styles.emailButtonActive
                      : styles.emailButtonInactive
                  }
                >
                  EMAIL
                </Text>
              </TouchableWithoutFeedback>
            </View>
            <View style={styles.dividerView}>
              <Divider
                style={
                  phoneCheck
                    ? { backgroundColor: "black", width: 150, height: 2 }
                    : { backgroundColor: "#cecece", width: 150 }
                }
              />
              <Divider
                style={
                  emailCheck
                    ? { backgroundColor: "black", width: 150, height: 2 }
                    : { backgroundColor: "#cecece", width: 150 }
                }
              />
            </View>
            <View>
              {emailCheck ? (
                <TextInput
                  placeholder="Email"
                  style={wrongEmail ? styles.inputWrong : styles.input}
                  underlineColorAndroid="transparent"
                  onChangeText={this.handleEmail}
                />
              ) : (
                <TextInput
                  placeholder="Phone Number"
                  style={styles.input}
                  underlineColorAndroid="transparent"
                />
              )}
              {emailCheck && wrongEmail ? (
                <Text style={styles.wrongEmail}>
                  Please enter a valid email.
                </Text>
              ) : null}
            </View>
            {phoneCheck ? (
              <Text style={{ marginTop: 30, fontSize: 25 }}>Comming Soon!</Text>
            ) : (
              <View>
                <Button
                  style={styles.button}
                  onPress={this.submitEmail}
                  isDisabled={email.length === 0 ? true : false}
                  disabledStyle={styles.buttonDisabled}
                >
                  <Text
                    style={
                      email.length === 0
                        ? { color: "#afdaff" }
                        : { color: "white" }
                    }
                  >
                    Next
                  </Text>
                </Button>
              </View>
            )}
          </Body>
        </Content>
        <Divider style={styles.divider} />
        <Footer>
          <FooterTab style={styles.footerTab}>
            <Body>
              <View style={styles.textStyle}>
                <Text style={styles.text}>Already have an account?</Text>
                <TouchableWithoutFeedback
                  onPress={() => this.props.navigation.navigate("LogIn")}
                >
                  <Text style={styles.helpButton}>Log in.</Text>
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

export default connect(mapStateToProps, { saveEmail })(SignUp);
