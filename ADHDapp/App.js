// import * as React from "react";
// import { NavigationContainer } from "@react-navigation/native";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import Login from "./components/login";
// import HomePage from "./components/home";

// const Stack = createNativeStackNavigator();

// const MyStack = () => {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen
//           name="Login"
//           component={Login}
//           options={{ title: "Welcome" }}
//         />
//         <Stack.Screen name="Home" component={HomePage} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Settings from "./components/settings";
import HomePage from "./components/home";
import Score from "./components/score";
import Login from "./components/login";
import PoppingNumbers from "./components/popping_numbers";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ title: "Login" }}
        />
        <Stack.Screen
          name="Home"
          component={HomePage}
          options={{ title: "Home" }}
        />
        <Stack.Screen
          name="Settings"
          component={Settings}
          options={{ title: "Settings" }}
        />
        <Stack.Screen
          name="Score"
          component={Score}
          options={{ title: "Score" }}
        />
        <Stack.Screen
          name="PoppingNumbers"
          component={PoppingNumbers}
          options={{ title: "Popping" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

// // this is the multiple choice page
// // import React from 'react';
// // import { View, StyleSheet } from 'react-native';
// // import MultipleChoiceQuestion from './components/multiple_choice_question';

// // const App = () => {
// //   return (
// //     <View style={styles.container}>
// //       <MultipleChoiceQuestion
// //         question="What is the capital of France?"
// //         options={['Paris', 'London', 'Berlin', 'Rome']}
// //       />
// //     </View>
// //   );
// // };

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     justifyContent: 'center',
// //     alignItems: 'center',
// //   },
// // });

// // export default App;

// // this needs to be the real app page
// // import { StatusBar } from 'expo-status-bar';
// // import { StyleSheet, Text, View } from 'react-native';
// // import Login from './components/login';

// // export default function App() {
// //   return (
// //   <Login />
// //   );
// // }

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     backgroundColor: '#fff',
// //     alignItems: 'center',
// //     justifyContent: 'center',
// //   },
// // });
