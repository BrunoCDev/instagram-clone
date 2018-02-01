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

  componentDidMount() {
    AsyncStorage.getItem("user").then(result => {
      this.setState({ signedIn: result, loading: false });
    });
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
