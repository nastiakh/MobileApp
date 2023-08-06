import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";

export default function Question() {
  return (
    <View style={styles.container}>
      <Text style={styles.txt}>this is question </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  txt: {
    // color: "black",
    fontFamily: "Cocogoose",
    fontSize: 20,
  },
});
