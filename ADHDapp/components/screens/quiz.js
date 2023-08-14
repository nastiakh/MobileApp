import React, { useState, useContext, useEffect } from "react";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import SurveyComposite from "./survey_composite";
import { useTheme } from "../../theme/theme_provider";
import { LoginContext } from "../global/globalContext";
import NoQuiz from "./no_avalibale_quiz.js";
import axios from "axios";

export default function Quiz({ navigation }) {
  const { colors } = useTheme();
  const globalContext = useContext(LoginContext);
  const { domain, participantCode, experimentCode, context, isExistQuiz } =
    globalContext;
  const [decisionTree, setDecisionTree] = useState();

  // getting the questionary from the DB
  const getData = async () => {
    try {
      await axios
        .get(
          `${domain}api/questionsforparticipant/?context_id=${context}&experiment_id=${experimentCode}`,
          {
            headers: {
              participant: participantCode,
            },
          }
        )
        .then((response) => {
          console.log("res", response);
          setDecisionTree(response.data.data[0]);
        });
    } catch {
      console.log("fail in fetching decision tree");
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: colors.mainBackground }]}
    >
      {isExistQuiz ? (
        <SurveyComposite SurveyTree={decisionTree} navigation={navigation} />
      ) : (
        <NoQuiz navigation={navigation} />
      )}

      {/* {isExistQuiz && decisionTree
        ? navigation.navigate("SurveyComposite", decisionTree)
        : navigation.navigate("NoQuiz")} */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
