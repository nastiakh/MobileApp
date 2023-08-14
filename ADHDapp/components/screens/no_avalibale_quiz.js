import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTheme } from "../../theme/theme_provider";

export default function NoQuiz({ navigation }) {
  const { dark, colors, setScheme } = useTheme();
  const iconSad = dark
    ? require("../../assets/images/sadNight.png")
    : require("../../assets/images/sad.png");

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: colors.mainBackground }]}
    >
      <Text style={[styles.txt, { color: colors.noQuizText }]}>
        כרגע לא קיים{" "}
      </Text>
      <Text style={[styles.txt, { color: colors.noQuizText }]}>
        שאלון זמין{" "}
      </Text>
      <Image style={styles.img} source={iconSad} />
      <View style={styles.buttonView}>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: colors.greenButton }]}
          onPress={() => navigation.navigate("Home")}
        >
          <Text style={styles.ButtonText}>חזרה למסך הבית</Text>
        </TouchableOpacity>
      </View>
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
  img: {
    height: 120,
    width: 120,
    marginTop: 10,
    marginBottom: 10,
  },
  txt: {
    fontSize: 20,
    fontWeight: "bold",
  },
  buttonView: {
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 16,
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 20,
    elevation: 3,
  },
  ButtonText: {
    fontSize: 16,
    lineHeight: 21,
    letterSpacing: 0.25,
    color: "white",
    fontWeight: "bold",
  },
});
