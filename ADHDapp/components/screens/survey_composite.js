import React, { useState, useContext, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTheme } from "../../theme/theme_provider";
import { LoginContext } from "../global/globalContext";
import axios from "axios";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

const Item = ({ item, onPress, backgroundColor, textColor }) => (
  <TouchableOpacity
    onPress={onPress}
    style={[styles.item, { backgroundColor }]}
  >
    <Text style={[styles.title, { color: textColor }]}>{item.answer}</Text>
  </TouchableOpacity>
);

function SurveyComposite({ navigation, SurveyTree }) {
  const globalContext = useContext(LoginContext);
  const { domain, participantCode, experimentCode, context, setIsExistQuiz } =
    globalContext;
  const [currentSurveyTree, setCurrentSurveyTree] = useState(SurveyTree);

  const [tree, setTree] = useState();
  const [error, setError] = useState("");
  const [currentQuestion, setCurrentQuestion] = useState("");
  const [answers, setAnswers] = useState("");
  const [questionId, setQuestionId] = useState();
  const [selectedId, setSelectedId] = useState();
  const [children, setChildren] = useState();

  const { colors } = useTheme();

  useEffect(() => {
    if (!currentSurveyTree) {
      setCurrentSurveyTree(SurveyTree);
    }
  }, [SurveyTree, currentSurveyTree]);

  useEffect(() => {
    if (currentSurveyTree) {
      console.log("in use effect", currentSurveyTree);
      setTree(currentSurveyTree);
      setCurrentQuestion(currentSurveyTree.description);
      setAnswers(currentSurveyTree.answers);
      setQuestionId(currentSurveyTree.id);
      setChildren(currentSurveyTree.childrens);
    }
  }, [currentSurveyTree]);
  console.log(currentQuestion);

  function postAnswers() {
    axios
      .post(`${domain}api/submission/`, {
        participant: participantCode,
        context: 4,
        question: questionId,
        answer: selectedId,
      })
      .then(function (response) {
        console.log(response);
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  function nextPressHandle() {
    if (selectedId === undefined) {
      setError("You must pick an answer");
    }
    // postAnswers();

    // find the right question to display with the correct related answer
    const keys = Object.keys(children);
    let isChildren = false;
    let rightChild = null;
    keys.forEach((key) => {
      if (tree.childrens[key].related_answer === selectedId) {
        isChildren = true;
        rightChild = { ...SurveyTree.childrens[key] };
      }
    });
    if (!isChildren) {
      navigation.navigate("Thanks");
    } else if (rightChild) {
      setCurrentSurveyTree(rightChild);
    }
  }

  const renderItem = ({ item }) => {
    const backgroundColor =
      item.id === selectedId ? colors.purpleButton : colors.greyButton;
    const color = item.id === selectedId ? "white" : "white";

    return (
      <Item
        item={item}
        onPress={() => {
          setSelectedId(item.id);
        }}
        backgroundColor={backgroundColor}
        textColor={color}
      />
    );
  };

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: colors.mainBackground }]}
    >
      <View
        style={[styles.questionView, { backgroundColor: colors.greyButton }]}
      >
        <Text style={styles.questionText}>{currentQuestion}</Text>
      </View>

      <View style={styles.answersView}>
        <FlatList
          data={answers}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          extraData={selectedId}
        />
      </View>

      <View style={styles.buttonView}>
        <TouchableOpacity
          style={[styles.buttonNext, { backgroundColor: colors.greenButton }]}
          onPress={nextPressHandle}
        >
          <View style={styles.buttonAlign}>
            <Text style={styles.ButtonText}>הבא</Text>
          </View>
        </TouchableOpacity>
      </View>
      <Text style={styles.error}>{error}</Text>
    </SafeAreaView>
  );
}

export default SurveyComposite;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  questionView: {
    flex: 2,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 20,
    elevation: 3,
    width: "96%",
    marginBottom: "15%",
    marginTop: "5%",
    backgroundColor: "#B2B3AC",
  },
  questionText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 30,
  },
  answersView: {
    flex: 6,
  },

  item: {
    padding: 20,
    marginVertical: 8,
    alignItems: "center",
    borderRadius: 20,
    elevation: 3,
    width: 350,
  },
  title: {
    color: "white",
    fontSize: 17,
    fontWeight: "bold",
  },
  buttonView: {
    flex: 2,
  },
  buttonNext: {
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 20,
    elevation: 3,
    backgroundColor: "#D1DB82",
    width: 200,
    height: 70,
    marginBottom: "15%",
  },
  ButtonText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  buttonAlign: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  error: {
    textAlign: "center",
    fontFamily: "Cocogoose",
    color: "#378EAC",
    fontSize: 15,
    marginBottom: 60,
  },
});
