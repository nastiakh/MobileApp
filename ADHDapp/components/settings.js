import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Switch } from "react-native";

const Sections = [
  {
    header: "1",
    items: [{ id: "bug", icon: "flag", label: "Report Bug", type: "link" }],
  },
  {
    header: "2",
    items: [{ id: "save", icon: "flag", label: "Report Bug", type: "link" }],
  },
];

export default function SettingsPage({ navigation }) {
  return <View style={styles.container}></View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});

// import React, { useState } from "react";
// import { View, Text, TouchableOpacity, StyleSheet, Switch } from "react-native";

// const SettingsPage = ({ navigation }) => {
//   const [fontSize, setFontSize] = useState(16);
//   const [language, setLanguage] = useState("English");
//   const [showScore, setShowScore] = useState(false);

//   const handleFontSizeChange = (value) => {
//     setFontSize(value);
//   };

//   const handleLanguageChange = () => {
//     setLanguage(language === "English" ? "Hebrew" : "English");
//   };

//   const handleShowScoreChange = () => {
//     setShowScore(!showScore);
//   };

//   return (
//     <View style={styles.container}>
//       <View style={styles.sectionContainer}>
//         <Text style={styles.optionTitle}>Font Size</Text>
//         <TouchableOpacity
//           style={styles.optionButton}
//           onPress={() => handleFontSizeChange(14)}
//         >
//           <Text style={styles.optionButtonText}>Small</Text>
//         </TouchableOpacity>
//         <TouchableOpacity
//           style={styles.optionButton}
//           onPress={() => handleFontSizeChange(16)}
//         >
//           <Text style={styles.optionButtonText}>Medium</Text>
//         </TouchableOpacity>
//         <TouchableOpacity
//           style={styles.optionButton}
//           onPress={() => handleFontSizeChange(18)}
//         >
//           <Text style={styles.optionButtonText}>Large</Text>
//         </TouchableOpacity>
//       </View>

//       <View style={styles.sectionContainer}>
//         <Text style={styles.optionTitle}>Language</Text>
//         <TouchableOpacity
//           style={styles.optionButton}
//           onPress={handleLanguageChange}
//         >
//           <Text style={styles.optionButtonText}>{language}</Text>
//         </TouchableOpacity>
//       </View>

//       <View style={styles.sectionContainer}>
//         <Text style={styles.optionTitle}>Dark mode</Text>
//         <Switch
//           value={showScore}
//           onValueChange={handleShowScoreChange}
//           trackColor={{ false: "#767577", true: "#81b0ff" }}
//           thumbColor={showScore ? "#f5dd4b" : "#f4f3f4"}
//         />
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 16,
//   },
//   sectionContainer: {
//     marginBottom: 24,
//   },
//   optionTitle: {
//     fontSize: 18,
//     marginBottom: 12,
//   },
//   optionButton: {
//     backgroundColor: "#f2f2f2",
//     padding: 12,
//     borderRadius: 8,
//     marginBottom: 8,
//   },
//   optionButtonText: {
//     fontSize: 16,
//   },
// });

// export default SettingsPage;
