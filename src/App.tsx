import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import { ChatScreen } from "./screens";

export function Application() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <StatusBar style="auto" />
      <ChatScreen />
    </View>
  );
}
