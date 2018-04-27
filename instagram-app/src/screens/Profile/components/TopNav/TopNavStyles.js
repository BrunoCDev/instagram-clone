import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    height: 50
  },
  subContainer: {
    height: 50,
    flexDirection: "row",
    justifyContent: "space-around"
  },
  textName: {
    color: "black",
    fontWeight: "bold",
    fontSize: 18,
    position: "absolute",
    left: 15,
    top: 13
  },
  menuIcon: {
    height: 25,
    width: 17,
    position: "absolute",
    right: 15,
    top: 13
  }
});
