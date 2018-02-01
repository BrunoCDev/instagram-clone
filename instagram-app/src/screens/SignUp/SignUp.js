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
import { TextInput, Button, View } from "react-native";
import { Divider } from "react-native-elements";
import { styles } from "./SignUpStyles";

class SignUp extends Component {
  render() {
    return (
      <Container style={styles.container}>
        <Text style={{ textAlign: "center" }}>English</Text>
        <Content>
          <Body>
            <View>
              <Text style={styles.title}>Instagram</Text>
            </View>
            <TextInput underlineColorAndroid="transparent" style={styles.input}>
              Email
            </TextInput>
            <TextInput underlineColorAndroid="transparent" style={styles.input}>
              Password
            </TextInput>
            <Button title="Log In" onPress={() => console.log("hey")} />
          </Body>
        </Content>
        <Divider style={styles.divider} />
        <Footer>
          <FooterTab style={styles.footerTab}>
            <Body>
              <Text>Don't have an account?</Text>
            </Body>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}

export default SignUp;
