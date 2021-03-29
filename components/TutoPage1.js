import React from "react";
import { StyleSheet, Text, View } from "react-native";

import Item from "./Item";

// ===================================================================================
function TutoPage1({ dictionary, handleChangeLanguage }) {
  const languagesChoices = [
    dictionary.Swedish,
    dictionary.English,
    dictionary.French,
  ];
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.welcome}>{dictionary.welcome}</Text>
        <Text style={styles.intro}>{dictionary.intro}</Text>
      </View>
      <Text style={styles.listHeader}>{dictionary.pickLang}</Text>
      <View style={styles.list}>
        {languagesChoices.map((c) => (
          <Item
            key={c}
            content={c}
            handlePress={handleChangeLanguage}
            isActive={c === dictionary[dictionary.name]}
          />
        ))}
      </View>
    </View>
  );
}

export default TutoPage1;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
  },
  welcome: {
    fontSize: 26,
    marginBottom: 20,
    textAlign: "center",
    color: "#0a1868",
    fontWeight: "bold",
  },
  intro: {
    fontSize: 16,
    padding: 10,
    textAlign: "justify",
    marginBottom: 50,
  },
  listHeader: {
    textAlign: "center",
    marginBottom: 20,
    fontSize: 18,
    fontWeight: "700",
  },
  list: {
    maxHeight: 300,
    overflow: "scroll",
    display: "flex",
    flexDirection: "row",
  },
});
