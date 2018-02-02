import React from "react";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "white"
  },
  options: {
    alignItems: "flex-start",
    flexDirection: "row",
    marginTop: 20
  },
  logo: {
    width: 370,
    height: 250
  },
  phoneButtonInactive: {
    marginRight: 50,
    color: "#cecece",
    fontWeight: "bold"
  },
  phoneButtonActive: {
    marginRight: 50,
    color: "black",
    fontWeight: "bold"
  },
  emailButtonInactive: {
    marginLeft: 50,
    color: "#cecece",
    fontWeight: "bold"
  },
  emailButtonActive: {
    marginLeft: 50,
    color: "black",
    fontWeight: "bold"
  },
  dividerView: {
    alignItems: "flex-start",
    flexDirection: "row",
    marginTop: 10
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
  divider: {
    backgroundColor: "#cecece",
    height: 1
  },
  footerTab: {
    backgroundColor: "white"
  },
  textStyle: {
    alignItems: "flex-start",
    flexDirection: "row"
  },
  text: {
    color: "#bababa",
    fontSize: 14
  },
  helpButton: {
    marginLeft: 5,
    color: "black",
    fontSize: 14,
    fontWeight: "bold"
  },
  wrongEmail: {
    marginTop: 10,
    color: "red",
    fontSize: 12
  }
});
