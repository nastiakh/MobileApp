import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Alert,
  Pressable,
} from "react-native";

export default function Login({ navigation }) {
  const [experiment, setExperiment] = useState("");
  const [password, setPassword] = useState("");

  const auth = () => {
    Alert.prompt("HEY");
  };

  return (
    <View style={styles.login}>
      <Text style={styles.heading1}>Hello</Text>
      <Text style={styles.heading2}>Welcome to ADHD survey app</Text>
      {/* <Icon name="email" size={30} color={"#9BE6DE"} /> */}
      <TextInput
        style={styles.placeHold}
        placeholder="Experiment number"
        onChangeText={(text) => setExperiment(text)}
      />
      <TextInput
        style={styles.placeHold}
        placeholder="Password"
        onChangeText={(text) => setPassword(text)}
      />
      <Pressable style={styles.button} onPress={() => auth()} title="Login">
        <Text style={styles.text}>Login</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  login: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",

    // backgroundColor: "#EFF2AE",
  },
  heading1: {
    fontWeight: "bold",
    fontSize: 40,
  },
  heading2: {
    fontWeight: "bold",
    fontSize: 23,
    marginTop: 10,
  },
  placeHold: {
    marginTop: 16,
    paddingVertical: 10,
    borderWidth: 2,
    borderColor: "#D3F2AE",
    borderRadius: 6,
    backgroundColor: "#D3F2AE",
    color: "#20232a",
    textAlign: "center",
    fontSize: 15,
    paddingHorizontal: 16,
    alignContent: "center",
    width: 300,
    letterSpacing: 0.25,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 16,
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "#AE91DA",
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
});
