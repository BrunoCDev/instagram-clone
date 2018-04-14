import React from "react";
import { MediaQueryStyleSheet } from "react-native-responsive";

export const styles = MediaQueryStyleSheet.create({
  mainContainer: {
    backgroundColor: "#fafafa"
  },
  container: {
    backgroundColor: "#fafafa",
    flexDirection: "row",
    justifyContent: "space-around",
    height: 45
  },
  icons: {
    height: 35,
    width: 35,
    backgroundColor: "#fafafa"
  },
  divider: {
    height: 0.5,
    backgroundColor: "#e8e8e8",
    marginBottom: 10
  }
});
