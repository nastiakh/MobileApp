import React, { useEffect, useRef, useState } from "react";
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

  const [score, setScore] = useState(20);

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
    <SafeAreaView style={styles.container}>
      <ConfettiCannon count={200} origin={{ x: -10, y: 0 }} />
      <Animated.View
        style={[
          styles.hooray,
          { transform: [{ scale: scaleAnimation }], opacity: opacityAnimation },
        ]}
      >
        <Text style={styles.hoorayText}>Great!</Text>
        <Image
          style={styles.img}
          source={require("../../assets/images/amaze.png")}
        />
        <Text>
          <Text style={styles.scoreText}>Here </Text>
          <Text style={styles.scoreNum}>20 </Text>
          <Text style={styles.scoreText}>more points </Text>
        </Text>
        <Text style={styles.scoreText}>for you</Text>
      </Animated.View>
      <View style={styles.thanksView}>
        <Text style={styles.txt}>Thank you,</Text>
        <Text style={styles.txt}>and see you next time!</Text>
      </View>
      <View style={styles.buttonView}>
        <TouchableOpacity
          style={styles.button}
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
  greatView: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  thanksView: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
  },
  buttonView: {
    backgroundColor: "#fff",
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
    backgroundColor: "#D1DB82",
  },
  ButtonText: {
    fontSize: 16,
    lineHeight: 21,
    letterSpacing: 0.25,
    color: "white",
    fontFamily: "Cocogoose",
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
    fontFamily: "Cocogoose",
  },
  scoreText: {
    fontSize: 18,
    marginTop: 5,
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
  img: {
    height: 120,
    width: 120,
    marginTop: 10,
    marginBottom: 10,
  },
});
