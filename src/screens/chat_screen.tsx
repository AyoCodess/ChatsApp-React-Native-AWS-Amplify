import React from "react";
import { View, Text, ImageBackground, FlatList } from "react-native";
import Background from "../../assets/images/BG.png";
import { Message } from "../components";
import messages from "../../assets/data/messages.json";

export function ChatScreen() {
  return (
    <ImageBackground source={Background} className="flex-1">
      <FlatList
        className="p-4"
        inverted
        data={messages}
        renderItem={({ item }) => <Message message={item} />}
      />
    </ImageBackground>
  );
}
