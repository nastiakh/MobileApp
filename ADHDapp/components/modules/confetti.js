import React from "react";
import { View, TouchableOpacity, StyleSheet, Text } from "react-native";
import ConfettiCannon from "react-native-confetti-cannon";
export default function ConfettiScreen() {
  let cannonRef = null;

  const shootConfetti = () => {
    cannonRef.start();
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={shootConfetti}>
        <Text>press</Text>
      </TouchableOpacity>
      <ConfettiCannon
        ref={(ref) => (cannonRef = ref)}
        colors={["#ff0000", "#00ff00", "#0000ff"]} // Customize the confetti colors
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
