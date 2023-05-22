import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  SafeAreaView,
} from "react-native";
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
      <Text style={styles.title}>ConcentrApp</Text>
      <Image style={styles.imgTop} source={require("../assets/brain3.png")} />
      <View style={styles.content}>
        <TouchableOpacity
          style={styles.ButtonStart}
          onPress={() => navigation.navigate("Settings")}
        >
          <View style={styles.buttonAlign}>
            <Text style={styles.ButtonText}>Start</Text>
            <Image style={styles.img} source={require("../assets/play2.png")} />
          </View>
        </TouchableOpacity>
        {/* ////////////////////////////////////////// */}
        <TouchableOpacity
          style={styles.ButtonScore}
          onPress={() => navigation.navigate("Score")}
        >
          <View style={styles.buttonAlign}>
            <Text style={styles.ButtonText}>Score</Text>

            <Image
              style={styles.img2}
              source={require("../assets/score2.png")}
            />
          </View>
        </TouchableOpacity>

        {/* ////////////////////////////////////////////// */}
        <TouchableOpacity
          style={styles.ButtonSettings}
          onPress={() => navigation.navigate("Settings")}
        >
          <View style={styles.buttonAlign}>
            <Text style={styles.ButtonText}>Settings</Text>
            <Image
              style={styles.img3}
              source={require("../assets/settings2.png")}
            />
          </View>
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
  },
  ButtonStart: {
    justifyContent: "center",
    // marginTop: 16,
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 20,
    elevation: 3,
    backgroundColor: "#D1DB82",
    width: 350,
    height: 100,
  },
  ButtonScore: {
    justifyContent: "center",
    marginTop: 16,
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 20,
    elevation: 3,
    backgroundColor: "#AE91DA",
    width: 350,
    height: 100,
  },
  ButtonSettings: {
    justifyContent: "center",
    marginTop: 16,
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 20,
    elevation: 3,
    backgroundColor: "#B2B3AC",
    width: 350,
    height: 100,
  },
  ButtonText: {
    color: "white",
    fontSize: 30,
    fontWeight: "bold",
    fontFamily: "Cocogoose",
  },
  img: {
    height: 80,
    width: 80,
    marginLeft: 145,
  },
  img2: {
    height: 80,
    width: 80,
    marginLeft: 130,
  },
  img3: {
    height: 80,
    width: 80,
    marginLeft: 90,
  },
  buttonAlign: {
    flexDirection: "row",
    alignItems: "center",
  },
  imgTop: {
    height: 200,
    width: 200,
    marginTop: 20,
  },
  title: {
    fontWeight: "bold",
    fontSize: 40,
    fontFamily: "Cocogoose",
  },
});

export default HomePage;
