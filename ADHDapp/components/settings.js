import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Switch,
  Image,
} from "react-native";

export default function Settings({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.smallTitle1}>Preferences</Text>
      <TouchableOpacity
        style={styles.Button}
        onPress={() => navigation.navigate("Appearance")}
      >
        <View style={styles.buttonAlign}>
          <Text style={styles.ButtonText}>Appearance</Text>

          <Image
            style={styles.img1}
            source={require("../assets/icons/night-mode.png")}
          />
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.Button}
        onPress={() => navigation.navigate("Text Size")}
      >
        <View style={styles.buttonAlign}>
          <Text style={styles.ButtonText}>Text Size</Text>

          <Image
            style={styles.img2}
            source={require("../assets/icons/text-size.png")}
          />
        </View>
      </TouchableOpacity>
      <Text style={styles.smallTitle2}> Help</Text>
      <TouchableOpacity
        style={styles.Button}
        onPress={() => navigation.navigate("Contact")}
      >
        <View style={styles.buttonAlign}>
          <Text style={styles.ButtonText}>Contact us</Text>

          <Image
            style={styles.img3}
            source={require("../assets/icons/contact.png")}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  smallTitle1: {
    // fontWeight: "bold",
    fontSize: 16,
    // marginTop: 20,
    fontFamily: "Cocogoose_light",
    color: "#B4B5BF",
  },
  smallTitle2: {
    // fontWeight: "bold",
    fontSize: 16,
    marginTop: 20,
    fontFamily: "Cocogoose_light",
    color: "#B4B5BF",
  },
  Button: {
    justifyContent: "center",
    marginTop: 16,
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 20,
    elevation: 3,
    backgroundColor: "#B2B3AC",
    width: "98%",
    height: "15%",
  },
  buttonAlign: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  ButtonText: {
    color: "white",
    fontSize: 30,
    fontWeight: "bold",
    fontFamily: "Cocogoose",
  },
  img1: {
    height: 60,
    width: 60,
    marginLeft: 27,
  },
  img2: {
    height: 60,
    width: 60,
    marginLeft: 95,
  },
  img3: {
    height: 60,
    width: 60,
    marginLeft: 55,
  },
});
