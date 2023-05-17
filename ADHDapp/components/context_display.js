import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";

export default function Context() {
  return (
    <View style={styles.container}>
      <Text>this is the context question</Text>
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
