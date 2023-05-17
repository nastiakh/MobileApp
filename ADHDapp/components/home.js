import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const HomePage = ({ navigation }) => {
  const handleSettingsPress = () => {
    // Handle the settings button press
    // For example, navigate to the settings screen
    navigation.navigate("Settings");
  };

  const handleStartQuestionaryPress = () => {
    // Handle the start quiz button press
    // For example, navigate to the quiz screen
    navigation.navigate("Questionary");
  };

  const handleScorePress = () => {
    // Handle the start quiz button press
    // For example, navigate to the quiz screen
    navigation.navigate("Questionary");
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <TouchableOpacity
          style={styles.startButton}
          onPress={() => navigation.navigate("Settings")}
        >
          <Text style={styles.startButtonText}>Start Questionary</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.scoreButton}
          onPress={() => navigation.navigate("Score")}
        >
          <Text style={styles.scoreButtonText}>Score</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.settingsButton}
          onPress={() => navigation.navigate("Settings")}
        >
          <Text style={styles.settingsButtonText}>Settings</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.settingsButton}
          onPress={() => navigation.navigate("PoppingNumbers")}
        >
          <Text style={styles.settingsButtonText}>pop</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  content: {
    alignItems: "center",
    justifyContent: "center",
    flex: 20,
    fontFamily: "italic",
  },
  startButton: {
    backgroundColor: "#19A7CE",
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
    marginVertical: 20,
  },
  startButtonText: {
    color: "white",
    fontSize: 30,
    fontWeight: "bold",
  },
  scoreButton: {
    backgroundColor: "#19A7CE",
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
    marginVertical: 20,
  },
  scoreButtonText: {
    color: "white",
    fontSize: 30,
    fontWeight: "bold",
  },
  settingsButton: {
    backgroundColor: "#19A7CE",
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
    marginVertical: 20,
  },
  settingsButtonText: {
    color: "white",
    fontSize: 30,
    fontWeight: "bold",
  },
});

export default HomePage;
