import React from "react";
import { StyleSheet, Text, View } from "react-native";

// Components
import Item from "./Item";
import Button from "./Button";

// ===================================================================================
function Settings({
  handleBack,
  currency,
  setCurrency,
  loanType,
  setLoanType,
}) {
  // ---------------------------- Variables -------------------------------------
  const currencyChoices = ["SEK", "€", "$"];
  const loanTypeChoices = ["Personal", "Home"];
  const languagesChoices = ["Swedish", "English", "French"];

  // ----------------------- Rendering -------------------------------------------
  return (
    <>
      <View>
        <Text style={styles.reminderText}>
          *Reminder : Simulations are the result of mathematical calculations
          and might not reflected reality.
        </Text>
      </View>

      <View style={styles.listContainer}>
        <Text style={styles.listHeader}>Language</Text>
        <View style={styles.list}>
          {languagesChoices.map((c) => (
            <Item
              key={c}
              content={c}
              handlePress={() => {}}
              isActive={c === ""}
            />
          ))}
        </View>
        <Text style={styles.listHeader}>Loan type</Text>
        <View style={styles.list}>
          {loanTypeChoices.map((c) => (
            <Item
              key={c}
              content={c}
              handlePress={setLoanType}
              isActive={c === loanType}
            />
          ))}
        </View>
        <Text style={styles.listHeader}>Currency</Text>
        <View style={styles.list}>
          {currencyChoices.map((c) => (
            <Item
              key={c}
              content={c}
              handlePress={setCurrency}
              isActive={c === currency}
            />
          ))}
        </View>
      </View>

      <Button handleBack={handleBack} />
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
  reminderText: {
    fontSize: 12,
    padding: 10,
  },
  listContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  listHeader: {
    textAlign: "center",
    marginTop: 30,
    fontSize: 18,
    textDecorationLine: "underline",
  },
  list: {
    maxHeight: 300,
    overflow: "scroll",
    display: "flex",
    flexDirection: "row",
  },
});
