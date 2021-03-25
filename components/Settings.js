import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";

function Item({ content, setCurrency, isActive }) {
  return (
    <TouchableOpacity
      style={[styles.item, isActive && styles.active]}
      onPress={() => setCurrency(content)}
    >
      <Text>{content}</Text>
    </TouchableOpacity>
  );
}

function Settings({ handleBack, currency, setCurrency }) {
  const currencyChoices = ["SEK", "€", "$"];

  return (
    <>
      <View>
        <Text style={styles.listHeader}>Currency</Text>
        <View style={styles.list}>
          {currencyChoices.map((c) => (
            <Item
              key={c}
              content={c}
              setCurrency={setCurrency}
              isActive={c === currency}
            />
          ))}
        </View>
      </View>

      <TouchableOpacity
        style={styles.backButton}
        onPress={() => handleBack(false)}
      >
        <Text style={styles.backButtonText}>Back</Text>
      </TouchableOpacity>
    </>
  );
}

export default Settings;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  listHeader: {
    textAlign: "center",
  },
  list: {
    maxHeight: 300,
    overflow: "scroll",
    display: "flex",
    flexDirection: "row",
  },
  item: {
    margin: 10,
    paddingVertical: 8,
    paddingHorizontal: 14,
    backgroundColor: "#ddd",
    borderRadius: 5,
  },
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
  active: {
    backgroundColor: "#f1a4a9",
  },
});
