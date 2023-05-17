import React, { useEffect, useRef } from "react";
import { View, Text, Animated, TouchableOpacity } from "react-native";

const PoppingNumbers = () => {
  const animationValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    startAnimation();
  }, []);

  const startAnimation = () => {
    Animated.sequence([
      Animated.timing(animationValue, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }),
      Animated.timing(animationValue, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const renderNumber = (number) => {
    const scale = animationValue.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: [1, 1.5, 1],
    });

    return (
      <Animated.Text style={[styles.number, { transform: [{ scale }] }]}>
        {number}
      </Animated.Text>
    );
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={startAnimation}>
        {renderNumber(3)}
        {renderNumber(2)}
        {renderNumber(1)}
      </TouchableOpacity>
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  number: {
    fontSize: 32,
    fontWeight: "bold",
    marginVertical: 10,
  },
};

export default PoppingNumbers;
