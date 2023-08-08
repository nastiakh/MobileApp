import React, { useContext } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useTheme } from "../../theme/theme_provider";
import { LoginContext } from "../global/globalContext";

import Settings from "../screens/settings";
import HomePage from "../screens/home";
import Score from "../screens/score";
import Login from "../screens/login";
import Mode from "../screens/mode";
import Contact from "../screens/contact";
import Thanks from "../screens/thanks";
import Quiz from "../screens/quiz";
import NoQuiz from "../screens/no_avalibale_quiz";
import Countdown from "../screens/countdown";
import Survey from "../screens/survey";

const Stack = createNativeStackNavigator();

function Navigator(props) {
  const { colors } = useTheme();

  const globalContext = useContext(LoginContext);
  const { isLoggedIn, userObj } = globalContext;

  return (
    <Stack.Navigator initialRouteName="Login">
      {!isLoggedIn || !userObj ? (
        <>
          <Stack.Screen
            name="Login"
            component={Login}
            options={{ headerShown: false }}
          />
        </>
      ) : (
        <>
          <Stack.Screen
            name="Home"
            component={HomePage}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Settings"
            component={Settings}
            options={{
              title: "Settings",
              headerStyle: {
                backgroundColor: colors.header,
                alignItems: "center",
              },
              headerTintColor: "white",
              headerTitleStyle: {
                fontFamily: "Cocogoose",
              },
            }}
          />
          <Stack.Screen
            name="Score"
            component={Score}
            options={{
              title: "Score",
              headerStyle: {
                backgroundColor: colors.header,
                alignItems: "center",
              },
              headerTintColor: "white",
              headerTitleStyle: {
                fontFamily: "Cocogoose",
              },
            }}
          />
          <Stack.Screen
            name="Contact"
            component={Contact}
            options={{
              title: "Contact us",
              headerStyle: {
                backgroundColor: colors.header,
                alignItems: "center",
              },
              headerTintColor: "white",
              headerTitleStyle: {
                fontFamily: "Cocogoose",
              },
            }}
          />
          <Stack.Screen
            name="Mode"
            component={Mode}
            options={{
              title: "Apperance",
              headerStyle: {
                backgroundColor: colors.header,
                alignItems: "center",
              },
              headerTintColor: "white",
              headerTitleStyle: {
                fontFamily: "Cocogoose",
              },
            }}
          />
          <Stack.Screen
            name="Thanks"
            component={Thanks}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Quiz"
            component={Quiz}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Survey"
            component={Survey}
            options={{ headerShown: false }}
          />
          {/* <Stack.Screen name="Splash" component={Splash}></Stack.Screen> */}
          <Stack.Screen
            name="NoQuiz"
            component={NoQuiz}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Countdown"
            component={Countdown}
            options={{ headerShown: false }}
          />
        </>
      )}
    </Stack.Navigator>
  );
}

export default Navigator;
