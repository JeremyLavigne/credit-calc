import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import Button from "./Button";

// Components
import TutoPage1 from "./TutoPage1";
import TutoPage2 from "./TutoPage2";
import TutoPage3 from "./TutoPage3";

// ===================================================================================
function Tutorial({ dictionary, handleChangeLanguage, setFirstUse }) {
  const [activePage, setActivePage] = useState(1);

  return (
    <View style={styles.container}>
      {activePage === 1 ? (
        <TutoPage1
          dictionary={dictionary}
          handleChangeLanguage={handleChangeLanguage}
        />
      ) : activePage === 2 ? (
        <TutoPage2 dictionary={dictionary} />
      ) : (
        <TutoPage3 dictionary={dictionary} />
      )}
      <View style={styles.buttonsContainer}>
        {activePage > 1 && (
          <Button
            handlePress={() => setActivePage(activePage - 1)}
            content={dictionary.previous}
          />
        )}
        {activePage < 3 && (
          <Button
            handlePress={() => setActivePage(activePage + 1)}
            content={dictionary.next}
          />
        )}
        {activePage === 3 && (
          <Button
            handlePress={() => setFirstUse(false)}
            content={dictionary.gotIt}
          />
        )}
      </View>
    </View>
  );
}

export default Tutorial;

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    width: "80%",
    height: "80%",
    backgroundColor: "#ccc",
    marginTop: 30,
    zIndex: 1,
    borderRadius: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
  },
  buttonsContainer: {
    display: "flex",
    flexDirection: "row",
  },
});
