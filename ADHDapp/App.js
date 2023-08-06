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

// // // This handler determines how your app handles notifications that come in while the app is foregrounded.
// Notifications.setNotificationHandler({
//   handleNotification: async () => ({
//     shouldShowAlert: true,
//     shouldPlaySound: false,
//     shouldSetBadge: false,
//   }),
// });

// // This provides the ExpoPushToken
// async function registerForPushNotificationsAsync() {
//   let token;
//   token = (await Notifications.getExpoPushTokenAsync()).data;

//   // need to send the token to back

//   if (Platform.OS === "android") {
//     Notifications.setNotificationChannelAsync("default", {
//       name: "default",
//       importance: Notifications.AndroidImportance.MAX,
//       vibrationPattern: [0, 250, 250, 250],
//       lightColor: "#FF231F7C",
//     });
//   }
//   return token;
// }

const App = () => {
  const [fontsLoaded] = useFonts({
    Cocogoose: require("./assets/fonts/Cocogoose.ttf"),
    Cocogoose_light: require("./assets/fonts/Cocogoose_light.ttf"),
  });

  // const [expoPushToken, setExpoPushToken] = useState("");
  // const [notification, setNotification] = useState(false);
  // const notificationListener = useRef();
  // const responseListener = useRef();

  // useEffect(() => {
  //   registerForPushNotificationsAsync().then((token) =>
  //     setExpoPushToken(token)
  //   );

  // //   // This listener is fired whenever a notification is received while the app is foregrounded.
  //   notificationListener.current =
  //     Notifications.addNotificationReceivedListener((notification) => {
  //       setNotification(notification);
  //     });

  // //   // This listener is fired whenever a user taps on or interacts with a notification
  // //   // (works when an app is foregrounded, backgrounded, or killed).
  //   responseListener.current =
  //     Notifications.addNotificationResponseReceivedListener((response) => {
  //       console.log(response);
  //     });

  //   return () => {
  //     Notifications.removeNotificationSubscription(
  //       notificationListener.current
  //     );
  //     Notifications.removeNotificationSubscription(responseListener.current);
  //   };
  // }, []);

  const isDarkMode = useColorScheme() === "dark";

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: "center",
    justifyContent: "center",
  },
});

export default App;
