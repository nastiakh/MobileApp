import React, { useEffect, useRef, useState } from "react";
import { useTheme } from "../../theme/theme_provider";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Animated,
  Easing,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ConfettiCannon from "react-native-confetti-cannon";

export default function Thanks({ navigation }) {
  const scaleAnimation = useRef(new Animated.Value(0)).current;
  const opacityAnimation = useRef(new Animated.Value(0)).current;
  const { dark, colors } = useTheme();

  const iconAmaze = dark
    ? require("../../assets/images/amazeNight.png")
    : require("../../assets/images/amaze.png");

  useEffect(() => {
    startAnimation();
  }, []);

  const startAnimation = () => {
    Animated.parallel([
      Animated.timing(scaleAnimation, {
        toValue: 1,
        duration: 1000,
        easing: Easing.elastic(1),
        useNativeDriver: true,
      }),
      Animated.timing(opacityAnimation, {
        toValue: 1,
        duration: 1000,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
    ]).start();
  };

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: colors.mainBackground }]}
    >
      <ConfettiCannon count={200} origin={{ x: -10, y: 0 }} />
      <Animated.View
        style={[
          styles.hooray,
          { backgroundColor: colors.boxcolor },
          { transform: [{ scale: scaleAnimation }], opacity: opacityAnimation },
        ]}
      >
        <Text style={styles.hoorayText}>נהדר!</Text>
        <Image style={styles.img} source={iconAmaze} />
        <Text>
          <Text style={styles.scoreText}>הנה </Text>
          <Text style={styles.scoreNum}>20 </Text>
          <Text style={styles.scoreText}>נקודות נוספות</Text>
        </Text>
        <Text style={styles.scoreText}>בשבילך</Text>
      </Animated.View>
      <View style={styles.thanksView}>
        <Text style={[styles.txt, { color: colors.noQuizText }]}>
          תודה רבה,
        </Text>
        <Text style={[styles.txt, { color: colors.noQuizText }]}>
          נתראה בפעם הבאה!
        </Text>
      </View>
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
  greatView: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  thanksView: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
  },
  buttonView: {
    alignItems: "center",
    justifyContent: "center",
  },
  txt: {
    fontSize: 20,
    fontWeight: "bold",
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
  hooray: {
    backgroundColor: "#dddddd",
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignItems: "center",
  },
  hoorayText: {
    fontSize: 24,
    color: "white",
    fontWeight: "bold",
  },
  scoreText: {
    fontSize: 18,
    marginTop: 5,
    fontWeight: "bold",
    color: "white",
    alignContent: "center",
  },
  scoreNum: {
    fontSize: 20,
    marginTop: 16,
    fontWeight: "bold",
    color: "white",
  },
  img: {
    height: 120,
    width: 120,
    marginTop: 10,
    marginBottom: 10,
  },
});
