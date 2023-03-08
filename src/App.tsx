import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import { Navigation } from "./navigation";
import { ChatScreen } from "./screens";

export function Application() {
  return (
    <View
      style={{ backgroundColor: "whitesmoke" }}
      className="flex-1 justify-center py-16">
      <StatusBar style="auto" />
      <Navigation />
    </View>
  );
}
