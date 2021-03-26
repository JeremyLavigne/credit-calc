import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

// ===================================================================================
function TutoPage2({ dictionary }) {
  return (
    <View style={styles.container}>
      <Image
        source={require("../images/overview1.png")}
        style={styles.overview}
      />
      <View>
        <Text style={styles.listTitle}>{dictionary.tutoPage2}</Text>
        <Text style={styles.listItem}>{dictionary.tutoPage2Li1}</Text>
        <Text style={styles.listItem}>{dictionary.tutoPage2Li2}</Text>
        <Text style={styles.listItem}>{dictionary.tutoPage2Li3}</Text>
      </View>
    </View>
  );
}

export default TutoPage2;

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
  },
});
