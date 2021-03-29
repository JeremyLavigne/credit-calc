import React, { useEffect, useState } from "react";
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
  dictionary,
  handleChangeLanguage,
}) {
  // ---------------------------- Variables -------------------------------------
  const currencyChoices = ["SEK", "€", "$"];
  const loanTypeChoices = [dictionary.personal, dictionary.home];
  const languagesChoices = [
    dictionary.Swedish,
    dictionary.English,
    dictionary.French,
  ];

  // ----------------------- Rendering -------------------------------------------
  return (
    <>
      <View>
        <Text style={styles.reminderText}>{dictionary.reminder}</Text>
      </View>

      <View style={styles.listContainer}>
        <Text style={styles.listHeader}>{dictionary.language}</Text>
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
        <Text style={styles.listHeader}>{dictionary.loanType}</Text>
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
        <Text style={styles.listHeader}>{dictionary.currency}</Text>
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

      <Button handlePress={handleBack} content={dictionary.back} />
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
    marginBottom: 5,
    fontSize: 20,
    fontWeight: "700",
  },
  list: {
    maxHeight: 300,
    overflow: "scroll",
    display: "flex",
    flexDirection: "row",
  },
});
