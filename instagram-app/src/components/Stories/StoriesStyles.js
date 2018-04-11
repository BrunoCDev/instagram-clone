import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-around"
  },
  nameContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginLeft: 25
  },
  imageActive: {
    width: 50,
    height: 50,
    borderRadius: 30,
    borderWidth: 5
  },
  imageDivider: {
    borderRadius: 30,
    borderWidth: 2,
    borderColor: "red",
    padding: 2,
    marginLeft: 15
  },
  name: {
    color: "#3b3b3b",
    fontSize: 12,
    textAlign: "center",
    marginLeft: 12
  }
});
