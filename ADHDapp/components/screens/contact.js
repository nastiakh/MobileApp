import { View, Text, StyleSheet, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTheme } from "../../theme/theme_provider";

export default function Contact({ navigation }) {
  const { dark, colors, setScheme } = useTheme();
  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: colors.mainBackground }]}
    >
      <Text style={styles.title}>If you have any questions,</Text>
      <Text style={styles.title}>please mail us to</Text>
      <Image
        style={styles.img}
        source={require("../../assets/icons/help.png")}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  img: {
    height: 200,
    width: 200,
    marginTop: 20,
  },
  title: {
    fontWeight: "bold",
    fontSize: 23,
    marginTop: 20,
    fontFamily: "Cocogoose",
    color: "#B4B5BF",
  },
});
