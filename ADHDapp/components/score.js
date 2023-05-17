import React, { useEffect, useRef } from "react";
import { View, Text, StyleSheet, Animated, Easing } from "react-native";

const Score = ({ navigation }) => {
  const scaleAnimation = useRef(new Animated.Value(0)).current;
  const opacityAnimation = useRef(new Animated.Value(0)).current;

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
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.hooray,
          { transform: [{ scale: scaleAnimation }], opacity: opacityAnimation },
        ]}
      >
        <Text style={styles.hoorayText}>Hooray!</Text>
      </Animated.View>
      <Text style={styles.scoreText}>Your Score is 90</Text>
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
    backgroundColor: "orange",
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  hoorayText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
  scoreText: {
    fontSize: 18,
    marginTop: 16,
    fontWeight: "bold",
  },
});

export default Score;
