import React, { ReactNode } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { View, Text } from "react-native";
import { ChatScreen, ChatScreens } from "../screens";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackParamList } from "./types";

export function Navigation() {
  const Stack = createNativeStackNavigator<RootStackParamList>();
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="chat_screens" component={ChatScreens} />
        <Stack.Screen name="chat_screen" component={ChatScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
