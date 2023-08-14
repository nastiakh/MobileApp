import { Text, StyleSheet, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTheme } from "../../theme/theme_provider";

export default function Contact({ navigation }) {
  const { colors } = useTheme();
  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: colors.mainBackground }]}
    >
      <Text style={styles.title}>אם יש לכם שאלות</Text>
      <Text style={styles.title}>בבקשה שלחו למייל</Text>
      <Text style={styles.title}>EMAquiz@gmail.com</Text>
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
    marginTop: 50,
  },
  title: {
    fontWeight: "bold",
    fontSize: 23,
    marginTop: 20,
    color: "#B4B5BF",
  },
});
