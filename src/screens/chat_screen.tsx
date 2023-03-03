import React from "react";
import {
  View,
  Text,
  ImageBackground,
  FlatList,
  Platform,
  KeyboardAvoidingView,
} from "react-native";
import Background from "../../assets/images/BG.png";
import { InputBox, Message } from "../components";
import messages from "../../assets/data/messages.json";

export function ChatScreen() {
  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      keyboardVerticalOffset={Platform.OS === "android" ? 180 : 0}
      behavior={Platform.OS === "ios" ? "padding" : "height"}>
      <ImageBackground source={Background} className="flex-1">
        <FlatList
          className="p-4"
          inverted
          data={messages}
          renderItem={({ item }) => <Message message={item} />}
        />
        <InputBox />
      </ImageBackground>
    </KeyboardAvoidingView>
  );
}
