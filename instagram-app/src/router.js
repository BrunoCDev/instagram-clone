import { StackNavigator, TabNavigator } from "react-navigation";

import LogIn from "./screens/LogIn/LogIn";
import SignUp from "./screens/SignUp/SignUp";
import CreateAccount from "./screens/CreateAccount/CreateAccount";
import Home from "./screens/Home/Home";
import Welcome from "./screens/Welcome/Welcome";
import UsernameChange from "./screens/UsernameChange/UsernameChange";
import Profile from "./screens/Profile/Profile";

export const createRootNavigator = (signedIn = false) => {
  return StackNavigator(
    {
      SignedIn: {
        screen: SignedIn,
        navigationOptions: {
          gesturesEnabled: false
        },
        initialRouteName: signedIn ? "Profile" : "LogIn"
      },
      SignedOut: {
        screen: SignedOut,
        navigationOptions: {
          gesturesEnabled: false
        },
        initialRouteName: !signedIn ? "LogIn" : "Profile"
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
  },
  SignUp: {
    screen: SignUp,
    navigationOptions: {
      headerStyle: { height: 0 }
    }
  },
  CreateAccount: {
    screen: CreateAccount,
    navigationOptions: {
      headerStyle: { height: 0 }
    }
  },
  Welcome: {
    screen: Welcome,
    navigationOptions: {
      headerStyle: { height: 0 }
    }
  },
  UsernameChange: {
    screen: UsernameChange,
    navigationOptions: {
      headerStyle: { height: 0 }
    }
  }
});

export const SignedIn = StackNavigator({
  Profile: {
    screen: Profile,
    navigationOptions: {
      headerStyle: { height: 0 }
    }
  },
  Home: {
    screen: Home,
    navigationOptions: {
      headerStyle: { height: 0 }
    }
  }
});
