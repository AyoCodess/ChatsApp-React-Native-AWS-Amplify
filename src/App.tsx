import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export function Application() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-red-500">
        Open up App.tsx to start working on your app!
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}
