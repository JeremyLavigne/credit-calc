import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

// ===================================================================================
function Button({ handlePress, content }) {
  return (
    <TouchableOpacity style={styles.button} onPress={handlePress}>
      <Text style={styles.buttonText}>{content}</Text>
    </TouchableOpacity>
  );
}

export default Button;

const styles = StyleSheet.create({
  button: {
    width: 90,
    height: 40,
    backgroundColor: "#0a1868",
    borderRadius: 5,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
    marginLeft: 10,
  },
  buttonText: {
    color: "#f1a4a9",
    fontSize: 18,
  },
});
