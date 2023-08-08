import React, { useEffect, useState, useRef } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import Navigator from "./components/navigation/navigator";
import { LoginContext, LoginProvider } from "./components/global/globalContext";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Platform, Appearance, useColorScheme, StyleSheet } from "react-native";
import * as Notifications from "expo-notifications";
import { StatusBar } from "expo-status-bar"; // automatically switches bar style based on theme!
import { ThemeProvider } from "./theme/theme_provider";

const App = () => {
  const [fontsLoaded] = useFonts({
    Cocogoose: require("./assets/fonts/Cocogoose.ttf"),
    Cocogoose_light: require("./assets/fonts/Cocogoose_light.ttf"),
  });

  // const isDarkMode = useColorScheme() === "dark";

  return (
    <SafeAreaProvider>
      <LoginProvider>
        <ThemeProvider>
          <NavigationContainer>
            <Navigator />
          </NavigationContainer>
        </ThemeProvider>
      </LoginProvider>
    </SafeAreaProvider>
  );
};

export default App;
