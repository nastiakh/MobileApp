import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import FadeInView from "../modules/popping_numbers";

export default function Countdown({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <FadeInView />
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
});
