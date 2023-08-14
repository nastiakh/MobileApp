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
import SurveyComposite from "../screens/survey_composite";

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
              title: "הגדרות",
              headerStyle: {
                backgroundColor: colors.header,
                alignItems: "center",
              },
              headerTintColor: "white",
              headerTitleStyle: {
                fontWeight: "bold",
              },
            }}
          />
          <Stack.Screen
            name="Score"
            component={Score}
            options={{
              title: "ניקוד",
              headerStyle: {
                backgroundColor: colors.header,
                alignItems: "center",
              },
              headerTintColor: "white",
              headerTitleStyle: {
                fontWeight: "bold",
              },
            }}
          />
          <Stack.Screen
            name="Contact"
            component={Contact}
            options={{
              title: "צרו קשר",
              headerStyle: {
                backgroundColor: colors.header,
                alignItems: "center",
              },
              headerTintColor: "white",
              headerTitleStyle: {
                fontWeight: "bold",
              },
            }}
          />
          <Stack.Screen
            name="Mode"
            component={Mode}
            options={{
              title: "תצוגה",
              headerStyle: {
                backgroundColor: colors.header,
                alignItems: "center",
              },
              headerTintColor: "white",
              headerTitleStyle: {
                fontWeight: "bold",
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
            name="NoQuiz"
            component={NoQuiz}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="SurveyComposite"
            component={SurveyComposite}
            options={{ headerShown: false }}
          />
        </>
      )}
    </Stack.Navigator>
  );
}

export default Navigator;
