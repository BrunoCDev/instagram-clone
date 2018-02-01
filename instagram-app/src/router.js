import { StackNavigator, TabNavigator } from "react-navigation";

import SignUp from "./screens/SignUp/SignUp";
import Home from "./screens/Home/Home";

export const createRootNavigator = (signedIn = false) => {
  return StackNavigator(
    {
      SignedIn: {
        screen: SignedIn,
        navigationOptions: {
          gesturesEnabled: false
        },
        initialRouteName: signedIn ? "Home" : "SignUp"
      },
      SignedOut: {
        screen: SignedOut,
        navigationOptions: {
          gesturesEnabled: false
        },
        initialRouteName: !signedIn ? "SignUp" : "Home"
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
  SignUp: {
    screen: SignUp,
    navigationOptions: {
      headerStyle: { height: 0 }
    }
  }
});

export const SignedIn = StackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      title: "Home"
    }
  }
});
