import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";

export default function Attention() {
  const [questions, setQuestions] = useState([
    {
      1: {
        title: "attention question num 1",
        type: "american",
        attention_answers: {
          1: "answer1",
          2: "answer1",
          3: "answer1",
          4: "answer1",
        },
      },
      2: {
        title: "attention question num 2",
        type: "5-rank",
        attention_answers: {
          1: "answer1",
          2: "answer1",
          3: "answer1",
          4: "answer1",
        },
      },
      3: {
        title: "attention question num 3",
        type: "10-rank",
        attention_answers: {
          1: "answer1",
          2: "answer1",
          3: "answer1",
          4: "answer1",
        },
      },
      4: {
        title: "attention question num 4",
        type: "image",
        attention_answers: {
          1: "answer1",
          2: "answer1",
          3: "answer1",
          4: "answer1",
        },
      },
      5: {
        title: "attention question num 5",
        type: "american",
        attention_answers: {
          1: "answer1",
          2: "answer1",
          3: "answer1",
          4: "answer1",
        },
      },
    },
  ]);

  //   useEffect(() => fetch(), {
  //     method: "GET",
  //   });

  return (
    <View style={styles.container}>
      <FlatList
        date={questions}
        renderItem={({ item }) => <Text>{item.title}</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
