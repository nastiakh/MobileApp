import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useTheme } from "../../theme/theme_provider";

const HomePage = ({ navigation }) => {
  const { dark, colors, setScheme } = useTheme();
  const icon = dark
    ? require("../../assets/images/brainNight.png")
    : require("../../assets/images/brain.png");

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: colors.mainBackground }]}
    >
      <View style={styles.top}>
        <Text style={[styles.title, { color: colors.concentrappText }]}>
          ConcentrApp
        </Text>
        <Image style={styles.imgTop} source={icon} />
      </View>
      <View style={styles.content}>
        <TouchableOpacity
          style={[styles.ButtonStart, { backgroundColor: colors.greenButton }]}
          onPress={() => navigation.navigate("Quiz")}
        >
          <View style={styles.buttonAlign}>
            <Text style={[styles.ButtonText, { color: colors.text }]}>
              התחל
            </Text>
            <Image
              style={styles.img}
              source={require("../../assets/icons/play.png")}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.ButtonScore, { backgroundColor: colors.purpleButton }]}
          onPress={() => navigation.navigate("Score")}
        >
          <View style={styles.buttonAlign}>
            <Text style={[styles.ButtonText, { color: colors.text }]}>
              ניקוד
            </Text>

            <Image
              style={styles.img2}
              source={require("../../assets/icons/score.png")}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.ButtonSettings,
            { backgroundColor: colors.greyButton },
          ]}
          onPress={() => navigation.navigate("Settings")}
        >
          <View style={styles.buttonAlign}>
            <Text style={[styles.ButtonText, { color: colors.text }]}>
              הגדרות
            </Text>
            <Image
              style={styles.img3}
              source={require("../../assets/icons/settings.png")}
            />
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,

    alignItems: "center",
    justifyContent: "center",
  },
  top: {
    alignItems: "center",
    flex: 2,
  },
  content: {
    alignItems: "center",
    justifyContent: "center",
    flex: 3,
  },
  ButtonStart: {
    justifyContent: "center",
    marginTop: 20,
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 20,
    elevation: 3,
    width: "90%",
    height: "20%",
  },
  ButtonScore: {
    justifyContent: "center",
    marginTop: 16,
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 20,
    elevation: 3,
    width: "90%",
    height: "20%",
  },
  ButtonSettings: {
    justifyContent: "center",
    marginTop: 16,
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 20,
    elevation: 3,
    width: "90%",
    height: "20%",
  },
  ButtonText: {
    color: "white",
    fontSize: 30,
    fontWeight: "bold",
  },
  img: {
    height: 60,
    width: 60,
    marginRight: 120,
  },
  img2: {
    height: 60,
    width: 60,
    marginRight: 125,
  },
  img3: {
    height: 60,
    width: 60,
    marginRight: 100,
  },
  buttonAlign: {
    flexDirection: "row-reverse",
    alignItems: "center",
    justifyContent: "space-around",
  },
  imgTop: {
    height: 200,
    width: 200,
    marginTop: 15,
  },
  title: {
    fontSize: 40,
    fontFamily: "Cocogoose",
    marginTop: 100,
  },
});

export default HomePage;
