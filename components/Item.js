import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

// ===================================================================================
function Item({ content, handlePress, isActive }) {
  return (
    <TouchableOpacity
      style={[styles.item, isActive && styles.active]}
      onPress={() => handlePress(content)}
    >
      <Text>{content}</Text>
    </TouchableOpacity>
  );
}

export default Item;

const styles = StyleSheet.create({
  item: {
    margin: 10,
    paddingVertical: 8,
    paddingHorizontal: 14,
    backgroundColor: "#ddd",
    borderRadius: 5,
  },
  active: {
    backgroundColor: "#f1a4a9",
  },
});
