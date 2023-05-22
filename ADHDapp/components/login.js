import { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Alert,
  Pressable,
  Image,
} from "react-native";

export default function Login({ navigation }) {
  const [experiment, setExperiment] = useState("");
  const [password, setPassword] = useState("");

  const auth = () => {
    Alert.prompt("HEY");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to</Text>
      <Text style={styles.title}>ConcentrApp</Text>
      <Text style={styles.subtitle}>Hope you are well today</Text>

      <Image style={styles.img} source={require("../assets/brain3.png")} />

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
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  headings: {
    flex: 2,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  title: {
    fontWeight: "bold",
    fontSize: 40,
    fontFamily: "Cocogoose",
  },
  subtitle: {
    fontWeight: "bold",
    fontSize: 16,
    marginTop: 20,
    fontFamily: "Cocogoose",
    color: "#B4B5BF",
  },
  inputs: {
    flex: 2,
  },
  placeHold: {
    marginTop: 16,
    paddingVertical: 10,
    borderWidth: 2,
    borderColor: "#E7F571",
    borderRadius: 20,
    backgroundColor: "#E7F571",
    textAlign: "center",
    fontSize: 15,
    width: 300,
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
    backgroundColor: "#AE91DA",
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
    fontFamily: "Cocogoose",
  },
  img: {
    height: 200,
    width: 200,
    marginTop: 20,
  },
});
