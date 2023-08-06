import React, { useEffect, useRef, useState, useContext } from "react";
import { View, Text, StyleSheet, Animated, Easing } from "react-native";
import { useTheme } from "../../theme/theme_provider";
import { LoginContext } from "../global/globalContext";
import Axios from "axios";

const Score = ({ navigation }) => {
  const { dark, colors, setScheme } = useTheme();
  const scaleAnimation = useRef(new Animated.Value(0)).current;
  const opacityAnimation = useRef(new Animated.Value(0)).current;
  const globalContext = useContext(LoginContext);
  const { domain, participantCode, score, setScore } = globalContext;

  useEffect(() => {
    startAnimation();
  }, []);

  useEffect(() => {
    Axios.get(`${domain}api/participantlogin/?code=${participantCode}`).then(
      (response) => {
        setScore(response.data.data);
      }
    );
  });

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

  // async function showScore() {
  //   fetch(`${domain}api/participantlogin/?code=${participantCode}`, {
  //     method: "GET",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   })
  //     .then((res) => {
  //       if (res.ok) {
  //         console.log("score");
  //         return res.json();
  //       } else {
  //         console.log("fail");
  //       }
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }

  return (
    <View
      style={[styles.container, { backgroundColor: colors.mainBackground }]}
    >
      <Animated.View
        style={[
          styles.hooray,
          { backgroundColor: colors.purpleButton },
          { transform: [{ scale: scaleAnimation }], opacity: opacityAnimation },
        ]}
      >
        <Text style={styles.hoorayText}>Hooray!</Text>
        <Text>
          <Text style={styles.scoreText}>Your Score is </Text>
          <Text style={styles.scoreNum}>{score}</Text>
        </Text>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  hooray: {
    // backgroundColor: "#AE91DA",
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignItems: "center",
  },
  hoorayText: {
    fontSize: 24,
    color: "white",
    fontFamily: "Cocogoose",
  },
  scoreText: {
    fontSize: 18,
    marginTop: 16,
    fontFamily: "Cocogoose",
    color: "white",
    alignContent: "center",
  },
  scoreNum: {
    fontSize: 20,
    marginTop: 16,
    fontWeight: "bold",
    color: "white",
  },
});

export default Score;
