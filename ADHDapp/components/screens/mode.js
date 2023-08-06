import React, { useState } from "react";
import {
  Text,
  StyleSheet,
  View,
  useColorScheme,
  Switch,
  Image,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTheme } from "../../theme/theme_provider";

export default function Mode({ Navigation }) {
  const { dark, colors, setScheme } = useTheme();

  const toggleTheme = () => {
    dark ? setScheme("light") : setScheme("dark");
  };

  const iconDark = dark
    ? require("../../assets/images/moon.png")
    : require("../../assets/images/sun.png");

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: colors.mainBackground }]}
    >
      <Text style={[styles.title, { color: colors.mainTitle }]}>
        Choose your preferable Appearance
      </Text>
      <View
        style={[
          styles.secondContainer,
          { backgroundColor: colors.subBackground },
        ]}
      >
        <View style={styles.alignment}>
          <Text style={[styles.text, { color: colors.text }]}>
            The appearance now is in {dark ? "dark" : "light"} mode
          </Text>
          <Image
            style={styles.img}
            // source={require("../../assets/images/sun.png")}
            source={iconDark}
          />
          <Text style={[styles.text, { color: colors.text }]}>
            {dark
              ? "Toggle to change to light mode"
              : "toggle to change to dark mode"}
          </Text>
          <Switch value={dark} onValueChange={toggleTheme} />
        </View>
        {/* <View style={styles.alignment}>
          <Image
            style={styles.img}
            source={require("../../assets/images/moon.png")}
          />
          <Text style={[styles.text, { color: colors.text }]}>Dark</Text>
        </View> */}
      </View>
    </SafeAreaView>
  );
}
// const { dark, colors, setScheme } = useTheme();
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontFamily: "Cocogoose",
    fontSize: 17,
    marginBottom: 50,
  },
  secondContainer: {
    flexDirection: "row",
    // backgroundColor: "#B8AFAF",
    borderRadius: 20,
  },
  text: {
    fontFamily: "Cocogoose",
    fontSize: 15,
    margin: 20,
  },
  alignment: {
    // flexDirection: "column",
    alignItems: "center",
    // margin: 30,
  },
  img: {
    height: 100,
    width: 100,
    marginTop: 20,
  },
});
