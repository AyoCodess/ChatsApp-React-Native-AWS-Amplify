import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { ChatListItem } from "./components/chat_list_item";

export function Application() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <StatusBar style="auto" />
      <ChatListItem />
    </View>
  );
}
