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
  Pressable,
  ScrollView,
} from "react-native";

const Item = ({ item, onPress, backgroundColor, textColor }) => (
  <TouchableOpacity
    onPress={onPress}
    style={[styles.item, { backgroundColor }]}
  >
    <Text style={[styles.title, { color: textColor }]}>{item.answer}</Text>
  </TouchableOpacity>
);

function SurveyComposite({ SurveyTree, navigation }) {
  const globalContext = useContext(LoginContext);
  const { domain, participantCode, experimentCode, context, score, setScore } =
    globalContext;
  const [tree, setTree] = useState();
  const [error, setError] = useState("");
  const [currentQuestion, setCurrentQuestion] = useState("");
  const [answers, setAnswers] = useState("");
  const [questionId, setQuestionId] = useState();
  const [selectedId, setSelectedId] = useState();
  const [children, setChildren] = useState();
  const [rightChild, setRightChild] = useState(null);
  const [isChildren, setIsChildren] = useState(false);
  const { colors } = useTheme();

  useEffect(() => {
    if (SurveyTree) {
      setTree(SurveyTree);
      setCurrentQuestion(SurveyTree.description);
      setAnswers(SurveyTree.answers);
      setQuestionId(SurveyTree.id);
      setChildren(SurveyTree.childrens);
    }
  }, [SurveyTree]);

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
    let newRightChild = null;
    let newIsChildren = false;

    const keys = Object.keys(children);
    keys.forEach((key) => {
      if (tree.childrens[key].related_answer === selectedId) {
        // setRightChild(SurveyTree.childrens[key]);
        // console.log(rightChild);
        // setIsChildren(true);
        newRightChild = SurveyTree.childrens[key];
        newIsChildren = true;
        // newIsChildren =
      }
    });

    setRightChild(newRightChild);
    setIsChildren(newIsChildren);

    // {
    //   isChildren ? (
    //     <SurveyComposite SurveyTree={rightChild} navigation={navigation} />
    //   ) : (
    //     navigation.navigate("Thanks")
    //   );
    // }
    navigation.navigate("Survey");
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
            <Text style={styles.ButtonText}>Next</Text>
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
    // fontFamily: "Cocogoose",
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
    // fontFamily: "Cocogoose",
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
    fontFamily: "Cocogoose",
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
