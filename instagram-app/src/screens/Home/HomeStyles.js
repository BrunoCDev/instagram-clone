import React from "react";
import { MediaQueryStyleSheet } from "react-native-responsive";

export const styles = MediaQueryStyleSheet.create({
  container: {
    flex: 1,
    height: 100,
    backgroundColor: "#fafafa"
  },
  scrollview: {
    marginTop: 40
  },
  divider: {
    height: 2,
    backgroundColor: "#e8e8e8"
  },
  dividerStories: {
    height: 0.5,
    backgroundColor: "#e8e8e8",
    marginTop: 10
  },
  storiesContainer: {
    height: 100
  },
  textContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10
  },
  storiesTextContainer: {
    height: 20,
    marginLeft: 15
  },
  storiesText: {
    fontSize: 15,
    color: "black",
    fontWeight: "bold"
  },
  watchContainer: {
    height: 20,
    width: 85,
    marginRight: 15,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  watchText: {
    fontSize: 15,
    color: "black",
    fontWeight: "bold"
  },
  watchIcon: {
    height: 16,
    width: 16,
    marginTop: 3
  }
});
