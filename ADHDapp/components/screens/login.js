import AsyncStorage from "@react-native-async-storage/async-storage";
import { SafeAreaView } from "react-native-safe-area-context";
import React, { useContext, useState, useRef, useEffect } from "react";
import { useTheme } from "../../theme/theme_provider";
import { LoginContext } from "../global/globalContext";
import * as Notifications from "expo-notifications";
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

// This handler determines how your app handles notifications that come in while the app is foregrounded.
Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: true,
  }),
});

// async function sendPushNotification(expoPushToken) {
//   const message = {
//     to: expoPushToken,
//     sound: "default",
//     title: "Original Title",
//     body: "And here is the body!",
//     data: { someData: "goes here" },
//   };
//
//   await fetch("https://exp.host/--/api/v2/push/send", {
//     method: "POST",
//     headers: {
//       Accept: "application/json",
//       "Accept-encoding": "gzip, deflate",
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(message),
//   });
// }

// This provides the ExpoPushToken
async function registerForPushNotificationsAsync() {
  let token;
  token = (await Notifications.getExpoPushTokenAsync()).data;

  // need to send the token to back

  if (Platform.OS === "android") {
    Notifications.setNotificationChannelAsync("default", {
      name: "default",
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: "#FF231F7C",
    });
  }
  return token;
}

export default function Login({ navigation }) {
  // const [experiment, setExperiment] = useState("");
  // const [participant, setParticipant] = useState("");
  const [error, setError] = useState("");
  const [expoPushToken, setExpoPushToken] = useState("");
  const [notification, setNotification] = useState(false);

  const { dark, colors, setScheme } = useTheme();
  const globalContext = useContext(LoginContext);
  const {
    setIsLoggedIn,
    domain,
    userObj,
    setUserObj,
    setToken,
    participantCode,
    setParticipantCode,
    experimentCode,
    setExperimentCode,
    context,
  } = globalContext;

  const icon = dark
    ? require("../../assets/images/brainNight.png")
    : require("../../assets/images/brain.png");

  const notificationListener = useRef();
  const responseListener = useRef();

  useEffect(() => {
    registerForPushNotificationsAsync().then((token) =>
      setExpoPushToken(token)
    );

    // This listener is fired whenever a notification is received while the app is foregrounded.
    notificationListener.current =
      Notifications.addNotificationReceivedListener((notification) => {
        setNotification(notification);

        // need to fetch the context id
      });

    // This listener is fired whenever a user taps on or interacts with a notification
    // (works when an app is foregrounded, backgrounded, or killed).
    responseListener.current =
      Notifications.addNotificationResponseReceivedListener((response) => {
        console.log(response);

        // need to fetch context id
      });

    return () => {
      Notifications.removeNotificationSubscription(
        notificationListener.current
      );
      Notifications.removeNotificationSubscription(responseListener.current);
    };
  }, []);

  async function sendTokenToServer() {
    let body = JSON.stringify({
      token: expoPushToken,
    });
    fetch(`${domain}api/participantlogin/${participantCode}/`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: body,
    })
      .then((res) => {
        if (res.ok) {
          console.log("notification worked");
          return res.json();
        } else {
          console.log("fail");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function handleLogin() {
    setError("");
    let body = JSON.stringify({
      experiment_id: experimentCode,
      participant: participantCode,
    });
    fetch(`${domain}api/participantlogin/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: body,
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          setError("Your experiment ID or participant ID is false");
          throw res.json();
        }
      })
      .then((json) => {
        setUserObj(json);
        setToken(json.token);
        setIsLoggedIn(true);
      })
      .catch((error) => {
        console.log(error);
      });
    // setIsLoggedIn(true);
  }

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: colors.mainBackground }]}
    >
      <View style={styles.titlesView}>
        <Text style={[styles.title, { color: colors.concentrappText }]}>
          Welcome to
        </Text>
        <Text style={[styles.title, { color: colors.concentrappText }]}>
          ConcentrApp
        </Text>
        <Text style={[styles.subtitle, { color: colors.loginSubtitle }]}>
          Hope you are well today
        </Text>
      </View>
      <View style={styles.imgView}>
        <Image style={styles.img} source={icon} />
      </View>
      <View
        style={[
          styles.wrapperInput,
          {
            borderColor: colors.loginInputBorderColor,
            backgroundColor: colors.loginInputBackgroundColor,
          },
        ]}
      >
        <TextInput
          style={[styles.input, { color: colors.loginInputTextColor }]}
          placeholder="Expiriment ID"
          value={experimentCode}
          onChangeText={(text) => setExperimentCode(text)}
        />
      </View>
      <View
        style={[
          styles.wrapperInput,
          {
            borderColor: colors.loginInputBorderColor,
            backgroundColor: colors.loginInputBackgroundColor,
          },
        ]}
      >
        <TextInput
          style={[styles.input, { color: colors.loginInputTextColor }]}
          placeholder="Participant ID"
          value={participantCode}
          onChangeText={(text) => setParticipantCode(text)}
        />
      </View>
      <Text style={styles.error}>{error}</Text>
      <TouchableOpacity
        style={[styles.button, { backgroundColor: colors.greenButton }]}
        onPress={() => {
          sendTokenToServer();
          handleLogin();
          // sendTokenToServer();
        }}
      >
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  wrapperInput: {
    borderWidth: 2,
    borderRadius: 20,
    borderColor: "#AE91DA",
    backgroundColor: "white",
    marginTop: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    padding: 10,
    width: "100%",
    // fontFamily: "Cocogoose",
    fontSize: 13,
    // color: "black",
    alignItems: "center",
    fontWeight: "bold",
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
  buttonText: {
    fontFamily: "Cocogoose",
    color: "white",
  },
  titlesView: {
    alignItems: "center",
  },
  title: {
    fontSize: 40,
    fontFamily: "Cocogoose",
  },
  subtitle: {
    fontSize: 16,
    marginTop: 20,
    fontFamily: "Cocogoose",
    color: "#B4B5BF",
  },
  imgView: {
    alignItems: "center",
  },
  img: {
    height: 200,
    width: 200,
    marginTop: 20,
  },
  error: {
    textAlign: "center",
    fontFamily: "Cocogoose",
    color: "#D12121",
    fontSize: 12,
    marginTop: 10,
  },
});
