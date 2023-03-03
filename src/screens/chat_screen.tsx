import React from "react";
import { View, Text, ImageBackground } from "react-native";
import Background from "../../assets/images/BG.png";

export function ChatScreen() {
  return (
    <ImageBackground source={Background} className="flex-1">
      <Text>Chat Screen</Text>
    </ImageBackground>
  );
}
