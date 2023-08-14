import React from "react";
import { Text, StyleSheet, View, Switch, Image } from "react-native";
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
        בחרו בתצוגה המועדפת עליכם
      </Text>
      <View
        style={[
          styles.secondContainer,
          { backgroundColor: colors.subBackground },
        ]}
      >
        <View style={styles.alignment}>
          <Text style={[styles.text, { color: colors.text }]}>
            התצוגה היא כעת במצב {dark ? "לילה" : "יום"}
          </Text>
          <Image style={styles.img} source={iconDark} />
          <Text style={[styles.text, { color: colors.text }]}>
            {dark
              ? "הזז את המתג כדי לשנות למצב יום"
              : "הזז את המתג כדי לשנות למצב לילה"}
          </Text>
          <Switch value={dark} onValueChange={toggleTheme} />
        </View>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: 25,
    marginBottom: 50,
  },
  secondContainer: {
    flexDirection: "row",
    borderRadius: 20,
  },
  text: {
    fontWeight: "bold",
    fontSize: 15,
    margin: 20,
  },
  alignment: {
    alignItems: "center",
  },
  img: {
    height: 100,
    width: 100,
    marginTop: 20,
  },
});
