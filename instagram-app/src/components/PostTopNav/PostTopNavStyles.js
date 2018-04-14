import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    height: 40,
    flexDirection: "row",
    marginLeft: 12,
    marginTop: 5
  },
  avatar: {
    height: 28,
    width: 28,
    borderRadius: 30
  },
  name: {
    color: "black",
    marginLeft: 5,
    marginTop: 3
  },
  menu: {
    height: 25,
    width: 15,
    position: "absolute",
    right: 15
  }
});
