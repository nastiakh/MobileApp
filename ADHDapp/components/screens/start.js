// import React, { useState } from "react";
// import Question from "../modules/question";
// import Answer from "../modules/answer";
// import RadioButton from "../modules/radio_button";
// import {
//   StyleSheet,
//   Text,
//   View,
//   FlatList,
//   TouchableOpacity,
// } from "react-native";
// import { SafeAreaView } from "react-native-safe-area-context";
// import axios from "axios";
// import { DecisionTree } from "../../data";

// export default function Start({ navigation }) {
//   const data = [
//     {
//       value: "answer one",
//     },
//     {
//       value: "answer two",
//     },
//     {
//       value: "answer three",
//     },
//   ];

//   const [description, setDescription] = useState("");
//   const [relatedAnswers, setRelatrdAnswers] = useState("-1");
//   const [answersTime, setAnswersTime] = useState("");
//   const [answerID, setAnswerID] = useState("");

//   const [option, setOption] = useState(null);
//   const baseURL = "https://localhost/8000/api";

//   // fetching the decision tree from the DB and storing it in a map
//   const getDecisionTree = async () => {
//     try {
//       // const response = await axios.get(`${baseURL}/decisionTree`);
//       const response = await axios.get(DecisionTree);
//       const jsonData = response.data;
//       const data = JSON.parse(jsonData); // Parse the JSON data

//       // Store the data in a Map
//       const decisionTreeMap = new Map();
//       data.forEach((item) => {
//         decisionTreeMap.set(item.id, item.description);
//       });

//       // Access the data by key
//       console.log(decisionTreeMap.get(1)); // Access the item with key 1

//       // Iterate over the Map
//       for (const [key, value] of decisionTreeMap) {
//         console.log(key, value);
//       }

//       // Manipulate the Map as needed
//       decisionTreeMap.set(3, "New Item");
//       decisionTreeMap.delete(2);

//       // ... Other Map operations
//     } catch (error) {
//       console.error(error);
//       // Handle errors
//     }
//   };

//   return (
//     <SafeAreaView style={styles.container}>
//       <View style={styles.questionView}>
//         <Question />
//       </View>
//       <View style={styles.answerView}>
//         <RadioButton data={data} onSelect={(value) => setOption(value)} />
//       </View>

//       <TouchableOpacity
//         style={styles.buttonNext}
//         onPress={() => navigation.navigate("Thanks")}
//       >
//         <View style={styles.buttonAlign}>
//           <Text style={styles.ButtonText}>Next</Text>
//         </View>
//       </TouchableOpacity>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   questionView: {
//     flex: 1,
//     alignItems: "center",
//     justifyContent: "center",
//     paddingVertical: 12,
//     paddingHorizontal: 32,
//     borderRadius: 20,
//     elevation: 3,
//     width: "90%",
//     height: "10%",
//     marginBottom: "15%",
//     backgroundColor: "#B2B3AC",
//   },
//   answerView: {
//     flex: 4,
//   },
//   buttonNext: {
//     justifyContent: "center",
//     paddingVertical: 12,
//     paddingHorizontal: 32,
//     borderRadius: 20,
//     elevation: 3,
//     backgroundColor: "#D1DB82",
//     width: "90%",
//     height: "10%",
//     // marginBottom: "15%",
//   },
//   ButtonText: {
//     color: "white",
//     fontSize: 30,
//     fontWeight: "bold",
//     fontFamily: "Cocogoose",
//   },
//   buttonAlign: {
//     flexDirection: "row",
//     alignItems: "center",
//     justifyContent: "space-around",
//   },
// });
