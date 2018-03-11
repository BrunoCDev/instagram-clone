import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  background: {
    backgroundColor: "white",
    flex: 1
  },
  button: {
    width: 300,
    height: 55,
    marginTop: 20,
    backgroundColor: "#73beff",
    borderWidth: 0
  },
  buttonText: {
    color: "white"
  },
  header: {
    color: "black",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18,
    marginTop: 200,
    marginBottom: 10
  },
  input: {
    marginTop: 15,
    width: 300,
    height: 55,
    backgroundColor: "#f9f9f9",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#cecece",
    paddingLeft: 20
  },
  inputWrong: {
    marginTop: 15,
    width: 300,
    height: 55,
    backgroundColor: "#f9f9f9",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "red",
    paddingLeft: 20
  },
  text: {
    color: "black",
    fontSize: 14
  }
});

export default styles;
