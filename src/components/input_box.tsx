import { View, Text, TextInput } from "react-native";
import React from "react";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";

export function InputBox() {
  return (
    <View
      className="flex-row p-2 flex items-center"
      style={{ backgroundColor: "whitesmoke" }}>
      <AntDesign name="plus" size={20} color="royalblue" />
      <TextInput
        className="flex-1 border border-gray-200 placeholder-gray-500 rounded-xl p-2 text-black bg-white mx-2"
        placeholder="type"
      />
      <MaterialIcons
        name="send"
        size={16}
        color="white"
        style={{
          backgroundColor: "royalblue",
          borderRadius: 15,
          padding: 5,
          overflow: "hidden",
        }}
      />
    </View>
  );
}
