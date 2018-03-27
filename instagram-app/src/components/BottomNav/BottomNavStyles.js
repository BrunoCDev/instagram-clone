import React from "react";
import { MediaQueryStyleSheet } from "react-native-responsive";

export const styles = MediaQueryStyleSheet.create({
  container: {
    backgroundColor: "#fafafa",
    flexDirection: "row",
    justifyContent: "space-around",
    height: 45
  },
  icons: {
    height: 35,
    width: 35
  }
});
