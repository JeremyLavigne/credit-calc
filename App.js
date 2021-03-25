import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";
import Range from "./components/Range";
import Result from "./components/Result";

export default function App() {
  const [amount, setAmount] = useState(100000);
  const [years, setYears] = useState(8);
  const [rate, setRate] = useState(4);
  const [monthly, setMonthly] = useState(0);
  const [cost, setCost] = useState(0);
  const [displaySettings, setDisplaySetings] = useState(false);

  useEffect(() => {
    const realRate = rate / 100;
    const byMonth =
      (amount * (realRate / 12)) /
      (1 - Math.pow(1 + realRate / 12, -12 * years));

    const totalCost = 12 * years * byMonth - amount;
    setMonthly(Math.round(byMonth));
    setCost(Math.round(totalCost));
  }, [amount, years, rate]);

  if (!displaySettings) {
    return (
      <View style={styles.container}>
        <Range
          label="Amount"
          unity="SEK"
          min={0}
          max={200000}
          step={1000}
          handleChange={setAmount}
          value={amount}
        />
        <Range
          label="Time"
          unity="years"
          min={1}
          max={20}
          step={1}
          handleChange={setYears}
          value={years}
        />
        <Range
          label="Rate"
          unity="%"
          min={2}
          max={10}
          step={0.1}
          handleChange={setRate}
          value={rate}
        />

        <View style={styles.results}>
          <Result right={false} value={monthly} label="" unity="SEK / Month" />
          <Result right={true} value={cost} label="Total Cost" unity="SEK" />
        </View>

        <TouchableOpacity
          activeOpacity={0.5}
          onPress={() => setDisplaySetings(true)}
        >
          <Image
            source={require("./images/settings.png")}
            style={styles.settings}
          />
        </TouchableOpacity>

        <StatusBar style="auto" />
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={() => setDisplaySetings(false)}>
          <Text>Back</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  results: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  settings: {
    marginTop: 30,
    width: 40,
    height: 40,
  },
});
