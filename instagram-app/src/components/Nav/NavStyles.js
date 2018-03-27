import React from "react";
import { MediaQueryStyleSheet } from "react-native-responsive";

export const styles = MediaQueryStyleSheet.create({
  navContainer: {
    height: 50,
    backgroundColor: "#fafafa",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  camera: {
    height: 30,
    width: 40,
    marginTop: 10,
    marginLeft: 10
  },
  instagramIcon: {
    height: 30,
    width: 120,
    marginTop: 10
  },
  dm: {
    height: 30,
    width: 40,
    marginTop: 10,
    marginRight: 10
  }
});
