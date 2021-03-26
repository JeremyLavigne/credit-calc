import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Slider from "@react-native-community/slider";

import formatNumber from "../utils/formatNumber";

function Range({ label, unity, min, max, step, handleChange, value }) {
  return (
    <>
      <View style={styles.label}>
        <Text style={styles.labelText}>
          {label} : <Text style={styles.value}>{formatNumber(value)}</Text>{" "}
          {unity}
        </Text>
      </View>
      <Slider
        style={styles.slider}
        minimumValue={min}
        maximumValue={max}
        minimumTrackTintColor="#0a1868"
        thumbTintColor="#f1a4a9"
        step={step}
        value={value}
        onValueChange={(val) => handleChange(val)}
      />
    </>
  );
}

export default Range;

const styles = StyleSheet.create({
  label: {
    textAlign: "left",
  },
  labelText: {
    fontSize: 16,
    fontStyle: "italic",
  },
  value: {
    fontSize: 18,
    fontWeight: "bold",
  },
  slider: {
    width: "80%",
    marginTop: 10,
    marginBottom: 30,
  },
});
