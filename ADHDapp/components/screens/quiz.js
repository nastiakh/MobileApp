import React, { useState, useContext } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { DecisionTree } from "../../data.js";
import SurveyComposite from "./survey_composite";
import { useTheme } from "../../theme/theme_provider";
import { LoginContext } from "../global/globalContext";
import NoQuiz from "./no_avalibale_quiz.js";

export default function Quiz({ navigation }) {
  const { dark, colors, setScheme } = useTheme();
  const globalContext = useContext(LoginContext);
  const { isExistQuiz } = globalContext;

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: colors.mainBackground }]}
    >
      {isExistQuiz ? (
        <SurveyComposite SurveyTree={DecisionTree} navigation={navigation} />
      ) : (
        <NoQuiz navigation={navigation} />
      )}
      {/* <SurveyComposite SurveyTree={DecisionTree} navigation={navigation} /> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
