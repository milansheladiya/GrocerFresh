import React from "react";
import { TouchableOpacity, Text } from "react-native";

export default function Button({ label, onPress }) {
  return (
    <TouchableOpacity
      style={{
        borderRadius: 8,
        height: 50,
        width: 150,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "lightblue",
        margin: 5,
        borderWidth: 1,
      }}
      activeOpacity={0.7}
      onPress={onPress}
    >
      <Text
        style={{
          fontSize: 15,
          color: "black",
          textTransform: "uppercase",
          
        }}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );
}
