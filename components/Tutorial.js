import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import Button from "./Button";

// Components
import TutoPage1 from "./TutoPage1";
import TutoPage2 from "./TutoPage2";
import TutoPage3 from "./TutoPage3";

// ===================================================================================
function Tutorial({ dictionary, handleChangeLanguage, handleEndTuto }) {
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
          <Button handlePress={handleEndTuto} content={dictionary.gotIt} />
        )}
      </View>
    </View>
  );
}

export default Tutorial;

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    width: "100%",
    height: "100%",
    backgroundColor: "#eee",
    zIndex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
  },
  buttonsContainer: {
    display: "flex",
    flexDirection: "row",
  },
});
