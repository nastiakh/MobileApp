import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Slider from "@react-native-community/slider";

export default function FontSize({ navigation }) {
  const [fontSize, setFontSize] = useState(16); // Initial font size

  const handleFontSizeChange = (value) => {
    setFontSize(value);
  };
  return (
    <SafeAreaView style={styles.container}>
      <Text>This is font size</Text>
      {/* <View>
        <Text style={{ fontSize }}>Sample Text</Text>
        <Slider
          style={{ width: "80%", alignSelf: "center", marginTop: 20 }}
          minimumValue={12}
          maximumValue={24}
          step={2}
          value={fontSize}
          onValueChange={handleFontSizeChange}
        />
      </View> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
