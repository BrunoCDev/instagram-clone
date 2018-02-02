import React from "react";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "white"
  },
  button: {
    width: 300,
    height: 55,
    marginTop: 15,
    backgroundColor: "#73beff",
    borderWidth: 0
  },
  buttonDisabled: {
    width: 300,
    height: 55,
    marginTop: 15,
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "#afdaff"
  },
  header: {
    marginTop: 40
  },
  headerText: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 17
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
  wrongPassword: {
    marginTop: 10,
    color: "red",
    fontSize: 12
  }
});
