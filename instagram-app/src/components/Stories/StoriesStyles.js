import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    flexDirection: "row"
  },
  nameContainer: {
    flexDirection: "row"
  },
  imageActive: {
    width: 50,
    height: 50,
    borderRadius: 30,
    borderWidth: 5
  },
  imageDivider: {
    marginLeft: 15,
    borderRadius: 30,
    borderWidth: 2,
    borderColor: "red",
    padding: 2
  },
  name: {
    color: "black",
    fontSize: 12,
    marginLeft: 35
  }
});
