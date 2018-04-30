import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white"
  },
  firstContainer: {
    flexDirection: "row",
    backgroundColor: "white"
  },
  infoContainer: {
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center"
  },
  statsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    marginLeft: 25
  },
  imageContainer: {
    alignItems: "center",
    marginTop: 20,
    marginLeft: 20
  },
  textContainer: {
    marginLeft: 20
  },
  image: {
    height: 80,
    width: 80,
    borderRadius: 50
  },
  statsText: {
    fontWeight: "bold",
    color: "black",
    textAlign: "center",
    fontSize: 25
  },
  buttonContainer: {
    marginTop: 10,
    marginLeft: 15
  },
  button: {
    width: 230,
    height: 34,
    borderColor: "#e8e8e8",
    borderWidth: 1.5
  },
  buttonText: {
    fontWeight: "bold",
    color: "black",
    fontSize: 16
  }
});
