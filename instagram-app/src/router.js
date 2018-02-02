import { StackNavigator, TabNavigator } from "react-navigation";

import LogIn from "./screens/LogIn/LogIn";
import Home from "./screens/Home/Home";

export const createRootNavigator = (signedIn = false) => {
  return StackNavigator(
    {
      SignedIn: {
        screen: SignedIn,
        navigationOptions: {
          gesturesEnabled: false
        },
        initialRouteName: signedIn ? "Home" : "LogIn"
      },
      SignedOut: {
        screen: SignedOut,
        navigationOptions: {
          gesturesEnabled: false
        },
        initialRouteName: !signedIn ? "LogIn" : "Home"
      }
    },
    {
      headerMode: "none",
      mode: "modal",
      initialRouteName: signedIn ? "SignedIn" : "SignedOut"
    }
  );
};

export const SignedOut = StackNavigator({
  LogIn: {
    screen: LogIn,
    navigationOptions: {
      headerStyle: { height: 0 }
    }
  }
});

export const SignedIn = StackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      headerStyle: { height: 0 }
    }
  }
});
