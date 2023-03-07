import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { ChatScreen, ChatScreens } from "../screens";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackParamList } from "./types";

export function Navigation() {
  const Stack = createNativeStackNavigator<RootStackParamList>();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="chat_screens"
          component={ChatScreens}
          options={{ headerTitle: "Chats" }}
        />
        <Stack.Screen
          name="chat_screen"
          component={ChatScreen}
          options={{ headerTitle: "Chat" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
