import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

// ===================================================================================
function TutoPage3({ dictionary }) {
  return (
    <View style={styles.container}>
      <Image
        source={require("../images/overview2.png")}
        style={styles.overview}
      />
      <View>
        <Text style={styles.listTitle}>{dictionary.tutoPage3}</Text>
        <Text style={styles.listItem}>{dictionary.tutoPage3Li1}</Text>
        <Text style={styles.listItem}>{dictionary.tutoPage3Li2}</Text>
      </View>
    </View>
  );
}

export default TutoPage3;

const styles = StyleSheet.create({
  container: {
    width: "80%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  overview: {
    width: 250,
    height: 150,
    borderColor: "#0a1868",
    borderWidth: 3,
    borderRadius: 5,
  },
  listTitle: {
    marginTop: 30,
    marginBottom: 10,
    fontSize: 18,
  },
  listItem: {
    marginLeft: 20,
    fontStyle: "italic",
    fontSize: 18,
    marginBottom: 5,
    paddingRight: 10,
  },
});
