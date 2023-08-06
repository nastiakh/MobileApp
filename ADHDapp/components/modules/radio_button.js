import { useState } from "react";
import React from "react";
import { View, Text, Pressable } from "react-native";
import radio from "../../styles/radio_style";

export default function RadioButton({ data, onSelect }) {
  const [userOption, setUserOption] = useState(null);

  const selectHandler = (value) => {
    onSelect(value);
    setUserOption(value);
  };

  return (
    <View>
      {data.map((item) => {
        return (
          <Pressable
            style={
              item.value === userOption ? radio.selected : radio.unselected
            }
            onPress={() => selectHandler(item.value)}
          >
            <Text style={radio.txt}> {item.value}</Text>
          </Pressable>
        );
      })}
    </View>
  );
}
