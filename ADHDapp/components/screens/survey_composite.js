import React, { useState, useContext } from "react";
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
    <Text style={[styles.title, { color: textColor }]}>{item.title}</Text>
  </TouchableOpacity>
);

function SurveyComposite({ SurveyTree, navigation }) {
  const globalContext = useContext(LoginContext);
  const { domain, participantCode, experimentCode, context, score, setScore } =
    globalContext;

  const currentTree = SurveyTree;
  const currentQuestion = currentTree.description;
  const answers = currentTree.answers;
  const allChildren = currentTree.childrens;
  const [rightChild, setRightChild] = useState([]);
  const [realatedAns, setRelatedAns] = useState(-1);
  const [questionId, setQuestionId] = useState();
  const [selectedId, setSelectedId] = useState();
  const [isChildren, setIsChildren] = useState(false);
  // const [question]
  const [error, setError] = useState("");

  const { dark, colors, setScheme } = useTheme();

  function getQuestionsAndAnswers() {
    // setError("");
    // Axios.get(`${domain}api/questionsforparticipant/`, {
    //     experiment_id: 2,
    //     context_id: 1,
    //     participant: "slut1cB7oX9bH4u",
    //   )},
    // }).then((response) => {
    //   console.log(response.data);
    // });
    debugger;
    axios
      .get(`${domain}api/questionsforparticipant/`, {
        headers: {
          experiment_id: 2,
          context_id: 1,
          participant: "slut1cB7oX9bH4u",
        },
      })
      .then((response) => {
        console.log(response.data);
      });
    // let body = JSON.stringify({
    // experiment_id: experimentCode,
    // context_id: context,
    // participant: participantCode,
    // });
    // let body = JSON.stringify({
    //   experiment_id: 2,
    //   context_id: 1,
    //   participant: "slut1cB7oX9bH4u",
    // });
    // fetch(`${domain}api/questionsforparticipant/`, {
    //   method: "GET",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: body,
    // })
    //   .then((res) => {
    //     if (res.ok) {
    //       console.log(res);
    //       return res.json();
    //     } else {
    //       setError("cant get question and answers");
    //       throw res.json();
    //     }
    //   })
    //   .then((json) => {
    //     /////////////////
    //     console.log(json);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  }

  function postAnswers() {
    setError("");
    // let body = JSON.stringify({
    //   participant: participantCode,
    //   context_id: context,
    //   qusetion: questionId,
    //   answer: selectedId,
    // });
    let body = JSON.stringify({
      participant: "slut1cB7oX9bHu",
      context_id: 4,
      qusetion: questionId,
      answer: selectedId,
    });
    fetch(`${domain}api/submission/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: body,
    })
      .then((res) => {
        if (res.ok) {
          console.log(res);
          return res.json();
        } else {
          setError("cant post question");
          throw res.json();
        }
      })
      .then((json) => {
        ///////////////////////////
        console.log(json);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function nextPressHandle() {
    setScore(score + 10);
    // postAnswers();
    getQuestionsAndAnswers();
    // // console.log(allChildren);
    // console.log(selectedId);
    {
      isChildren ? (
        <SurveyComposite SurveyTree={rightChild} navigation={navigation} />
      ) : (
        navigation.navigate("Thanks")
      );
    }
  }

  function answerPressHandle() {
    console.log(selectedId);
    // setRightChild(allChildren.map((child) => child.related_ans == selectedId));
    console.log(rightChild);
  }

  // function arrayIsEmpty(array) {
  //   if (!Array.isArray(array)) {
  //     return false;
  //   }
  //   if (array.length == 0) {
  //     return true;
  //   }
  //   return false;
  // }

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

  // const answerPressHandle = ({ item }) => {
  // setRightChild(allChildren.map((child) => child.related_ans == selectedId));
  // console.log(rightChild);

  // return (
  //   <View>
  //     <Item
  //       item={item}
  //       onPress={() => setSelectedId(item.id)}
  //       backgroundColor={backgroundColor}
  //       textColor={color}
  //     />
  //   </View>
  // );
  // };

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
          onPress={answerPressHandle()}
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
    fontFamily: "Cocogoose",
    fontSize: 20,
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
    fontFamily: "Cocogoose",
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
});
