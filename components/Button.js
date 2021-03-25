import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

// ===================================================================================
function Button({ handleBack, content }) {
  return (
    <TouchableOpacity
      style={styles.backButton}
      onPress={() => handleBack(false)}
    >
      <Text style={styles.backButtonText}>{content}</Text>
    </TouchableOpacity>
  );
}

export default Button;

const styles = StyleSheet.create({
  backButton: {
    width: 70,
    height: 30,
    backgroundColor: "#0a1868",
    borderRadius: 5,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  backButtonText: {
    color: "#f1a4a9",
  },
});
