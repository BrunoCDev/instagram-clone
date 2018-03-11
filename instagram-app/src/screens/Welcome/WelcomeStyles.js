import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  background: {
    backgroundColor: "white",
    flex: 1
  },
  header: {
    marginTop: 180
  },
  headerText: {
    color: "black",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center"
  },
  text: {
    textAlign: "center",
    fontSize: 15,
    color: "black"
  },
  button: {
    width: 300,
    height: 55,
    marginTop: 30,
    marginLeft: 30,
    backgroundColor: "#73beff",
    borderWidth: 0
  },
  buttonText: {
    color: "white"
  },
  change: {
    color: "#73beff",
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 15
  },
  termsView: {
    alignItems: "flex-start",
    flexDirection: "row",
    marginLeft: 17.5,
    marginTop: 170
  },
  termsText: {
    fontSize: 12.5
  },
  termsBoldText: {
    fontSize: 13.5,
    fontWeight: "bold",
    color: "black"
  }
});
