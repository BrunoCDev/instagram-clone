import React from "react";
import { AsyncStorage } from "react-native";

import { createRootNavigator, signedOut } from "./router";

import { Provider } from "react-redux";
import store from "./store";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      signedIn: false
    };
  }

  async componentDidMount() {
    try {
      let value = await AsyncStorage.getItem("user");
      if (value !== null) {
        this.setState({ signedIn: value, loading: false });
      }
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    const Layout = createRootNavigator(this.state.signedIn);
    return (
      <Provider store={store}>
        <Layout />
      </Provider>
    );
  }
}
