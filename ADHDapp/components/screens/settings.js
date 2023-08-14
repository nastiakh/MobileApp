import React, { useState, useContext } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useTheme } from "../../theme/theme_provider";
import { LoginContext } from "../global/globalContext";

export default function Settings({ navigation }) {
  const { dark, colors, setScheme } = useTheme();
  const globalContext = useContext(LoginContext);
  const { setIsLoggedIn } = globalContext;
  const handleLogout = () => {
    // AsyncStorage.clear();
    setIsLoggedIn(false);
    // navigation.navigate("Login");
  };

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: colors.mainBackground }]}
    >
      <Text style={styles.smallTitle1}>העדפות</Text>
      <TouchableOpacity
        style={[styles.greenButton, { backgroundColor: colors.greenButton }]}
        onPress={() => navigation.navigate("Mode")}
      >
        <View style={styles.buttonAlign}>
          <Text style={styles.ButtonText}>תצוגה</Text>

          <Image
            style={styles.img1}
            source={require("../../assets/icons/night-mode.png")}
          />
        </View>
      </TouchableOpacity>
      <Text style={styles.smallTitle2}> עזרה</Text>
      <TouchableOpacity
        style={[styles.purpleButton, { backgroundColor: colors.purpleButton }]}
        onPress={() => navigation.navigate("Contact")}
      >
        <View style={styles.buttonAlign}>
          <Text style={styles.ButtonText}>צרו קשר</Text>

          <Image
            style={styles.img3}
            source={require("../../assets/icons/contact.png")}
          />
        </View>
      </TouchableOpacity>
      <Text style={styles.smallTitle2}>אפשרויות</Text>
      <TouchableOpacity
        style={[styles.greyButton, { backgroundColor: colors.greyButton }]}
        onPress={handleLogout}
      >
        <View style={styles.buttonAlign}>
          <Text style={styles.ButtonText}>התנתקות</Text>

          <Image
            style={styles.img4}
            source={require("../../assets/icons/logout.png")}
          />
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  smallTitle1: {
    fontSize: 18,
    color: "#B4B5BF",
    marginRight: 10,
  },
  smallTitle2: {
    fontSize: 18,
    marginTop: 20,
    color: "#B4B5BF",
    marginRight: 10,
  },
  purpleButton: {
    justifyContent: "center",
    marginTop: 16,
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 20,
    elevation: 3,
    width: "98%",
    height: "15%",
  },
  greenButton: {
    justifyContent: "center",
    marginTop: 16,
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 20,
    elevation: 3,
    width: "98%",
    height: "15%",
  },
  greyButton: {
    justifyContent: "center",
    marginTop: 16,
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 20,
    elevation: 3,
    width: "98%",
    height: "15%",
  },
  buttonAlign: {
    flexDirection: "row-reverse",
    alignItems: "center",
    justifyContent: "space-around",
  },
  ButtonText: {
    color: "white",
    fontSize: 30,
    fontWeight: "bold",
  },
  img1: {
    height: 60,
    width: 60,
    marginRight: 160,
  },
  // img2: {
  //   height: 60,
  //   width: 60,
  //   marginRight: 100,
  // },
  img3: {
    height: 60,
    width: 60,
    marginRight: 120,
  },
  img4: {
    height: 60,
    width: 60,
    marginRight: 110,
  },
});
