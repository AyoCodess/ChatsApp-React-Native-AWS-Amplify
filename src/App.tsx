import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import { ChatScreen, ChatScreens } from "./screens";

export function Application() {
  return (
    <View className="flex-1 justify-center bg-white py-16">
      <StatusBar style="auto" />
      {/* <ChatScreens /> */}
      <ChatScreen />
    </View>
  );
}
