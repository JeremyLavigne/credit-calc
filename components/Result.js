import React from "react";
import { StyleSheet, Text, View } from "react-native";

// ===================================================================================
function Result({ right, value, label, unity }) {
  return (
    <View style={[styles.result, right && styles.resultRight]}>
      <Text style={[styles.resultText, right && styles.resultTextRight]}>
        {label}
        <Text style={styles.value}>{!right && value}</Text>
      </Text>
      <Text style={[styles.resultText, right && styles.resultTextRight]}>
        <Text style={styles.value}>{right && value}</Text> {unity}
      </Text>
    </View>
  );
}

export default Result;

const styles = StyleSheet.create({
  result: {
    width: "35%",
    height: 150,
    backgroundColor: "#0a1868",
    borderRadius: 10,
    margin: 20,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  resultRight: {
    backgroundColor: "#f1a4a9",
  },
  resultText: {
    color: "#f1a4a9",
  },
  resultTextRight: {
    color: "#0a1868",
  },
  value: {
    fontSize: 26,
  },
});
