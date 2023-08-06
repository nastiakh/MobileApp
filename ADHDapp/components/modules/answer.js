import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";

export default function Answer() {
  return (
    <View style={styles.container}>
      <Text>this is answer</Text>
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
