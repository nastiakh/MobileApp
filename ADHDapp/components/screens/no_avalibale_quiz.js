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
        There is no available{" "}
      </Text>
      <Text style={[styles.txt, { color: colors.noQuizText }]}>
        quiz at the moment{" "}
      </Text>
      <Image style={styles.img} source={iconSad} />
      <View style={styles.buttonView}>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: colors.greenButton }]}
          onPress={() => navigation.navigate("Home")}
        >
          <Text style={styles.ButtonText}>Back to home screen</Text>
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
    fontFamily: "Cocogoose",
  },
  buttonView: {
    // flex: 1,
    // backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  txt: {
    fontSize: 20,
    fontFamily: "Cocogoose",
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 16,
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 20,
    elevation: 3,
    // backgroundColor: "#D1DB82",
  },
  ButtonText: {
    fontSize: 16,
    lineHeight: 21,
    letterSpacing: 0.25,
    color: "white",
    fontFamily: "Cocogoose",
  },
});
