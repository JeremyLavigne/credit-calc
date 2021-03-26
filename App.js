import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { StyleSheet, View, TouchableOpacity, Image } from "react-native";

// Components
import Range from "./components/Range";
import Result from "./components/Result";
import Settings from "./components/Settings";

import dictionaries from "./utils/dictionaries.json";

// ===================================================================================
export default function App() {
  // ---------------------------- Variables -------------------------------------
  const [dictionary, setDictionary] = useState(dictionaries.Swedish);
  const [amount, setAmount] = useState(100000);
  const [maxAmount, setMaxAmount] = useState(200000);
  const [stepAmount, setStepAmount] = useState(1000);
  const [years, setYears] = useState(8);
  const [rate, setRate] = useState(4);
  const [maxRate, setMaxRate] = useState(10);
  const [minRate, setMinRate] = useState(2);
  const [monthly, setMonthly] = useState(0); // monthly paiement
  const [cost, setCost] = useState(0); // Total cost for credit
  const [currency, setCurrency] = useState("SEK"); // SEK, €, $
  const [loanType, setLoanType] = useState(dictionary.personal); // Personal, Home
  const [firstUse, setFirstUse] = useState(true);
  const [displaySettings, setDisplaySetings] = useState(false);

  // --------------------------- Variables updating -------------------------------
  // Change range details regarding settings
  useEffect(() => {
    if (currency !== "SEK") {
      setYears(8);
      if (loanType === dictionary.personal) {
        setMaxAmount(20000);
        setAmount(10000);
        setStepAmount(100);
        setMinRate(2);
        setMaxRate(10);
        setRate(4);
      } else {
        setMaxAmount(400000);
        setAmount(200000);
        setStepAmount(1000);
        setMinRate(1);
        setMaxRate(5);
        setRate(2);
      }
    } else {
      if (loanType === dictionary.personal) {
        setMaxAmount(200000);
        setAmount(100000);
        setStepAmount(1000);
        setMinRate(2);
        setMaxRate(10);
        setRate(4);
      } else {
        setMaxAmount(4000000);
        setAmount(2000000);
        setStepAmount(10000);
        setMinRate(1);
        setMaxRate(5);
        setRate(2);
      }
    }
  }, [currency, loanType]);

  // Do the maths when user move slider(s)
  useEffect(() => {
    const realRate = rate / 100;
    const byMonth =
      (amount * (realRate / 12)) /
      (1 - Math.pow(1 + realRate / 12, -12 * years));

    const totalCost = 12 * years * byMonth - amount;
    setMonthly(Math.round(byMonth));
    setCost(Math.round(totalCost));
  }, [amount, years, rate]);

  // Deal with language changes
  useEffect(() => {
    if (
      loanType === "Personal" ||
      loanType === "Privat" ||
      loanType === "Personnel"
    ) {
      setLoanType(dictionary.personal);
    }
    if (
      loanType === "Home" ||
      loanType === "Bolån" ||
      loanType === "Immobilier"
    ) {
      setLoanType(dictionary.home);
    }
  }, [dictionary]);

  const handleChangeLanguage = (lang) => {
    if (lang === "Anglais" || lang === "Engelska" || lang === "English") {
      setDictionary(dictionaries.English);
    }
    if (lang === "Francais" || lang === "Franska" || lang === "French") {
      setDictionary(dictionaries.French);
    }
    if (lang === "Suédois" || lang === "Svenska" || lang === "Swedish") {
      setDictionary(dictionaries.Swedish);
    }
  };

  // ----------------------- Rendering -------------------------------------------
  if (!displaySettings) {
    // Main page
    return (
      <View style={styles.container}>
        <View style={styles.rangeContainer}>
          <Range
            label={dictionary.amount}
            unity={currency}
            min={0}
            max={maxAmount}
            step={stepAmount}
            handleChange={setAmount}
            value={amount}
          />
          <Range
            label={dictionary.time}
            unity={dictionary.years}
            min={1}
            max={20}
            step={1}
            handleChange={setYears}
            value={years}
          />
          <Range
            label={dictionary.rate}
            unity="%"
            min={minRate}
            max={maxRate}
            step={0.1}
            handleChange={setRate}
            value={rate}
          />
        </View>

        <View style={styles.results}>
          <Result
            right={false}
            value={monthly}
            label=""
            unity={`${currency} / ${dictionary.month}`}
          />
          <Result
            right={true}
            value={cost}
            label={dictionary.totalCost}
            unity={currency}
          />
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
    // Setting page
    return (
      <View style={styles.container}>
        <Settings
          handleBack={setDisplaySetings}
          currency={currency}
          setCurrency={setCurrency}
          loanType={loanType}
          setLoanType={setLoanType}
          dictionary={dictionary}
          handleChangeLanguage={handleChangeLanguage}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-around",
  },
  rangeContainer: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 50,
  },
  results: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  settings: {
    marginBottom: 30,
    marginTop: 10,
    width: 40,
    height: 40,
  },
});
