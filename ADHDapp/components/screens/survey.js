import React, { useState, useContext, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTheme } from "../../theme/theme_provider";
import { LoginContext } from "../global/globalContext";
import { DecisionTree } from "../../data";
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
    <Text style={[styles.title, { color: textColor }]}>{item.title}</Text>
  </TouchableOpacity>
);

export default function Survey({ navigation }) {
  const answers = DecisionTree.answers;
  const globalContext = useContext(LoginContext);
  const { setIsExistQuiz } = globalContext;
  const [tree, setTree] = useState();
  const [error, setError] = useState("");
  const [currentQuestion, setCurrentQuestion] = useState(
    "What was the level of your concentration?"
  );
  // const [answers, setAnswers] = useState("");
  const [questionId, setQuestionId] = useState();
  const [selectedId, setSelectedId] = useState();
  const [children, setChildren] = useState();
  const [rightChild, setRightChild] = useState(null);
  const [isChildren, setIsChildren] = useState(false);
  const { colors } = useTheme();

  function nextPressHandle() {
    navigation.navigate("Thanks");
    setIsExistQuiz(false);
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
    fontWeight: "bold",
    fontSize: 17,
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
