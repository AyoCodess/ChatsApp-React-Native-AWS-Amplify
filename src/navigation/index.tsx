import React, { ReactNode } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { View, Text } from "react-native";
import { ChatScreen } from "../screens";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export function Navigation() {
  const Stack = createNativeStackNavigator<RootStackParamList>();
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Profile" component={Profile} />
      </Stack.Navigator>
      <ChatScreen />
    </NavigationContainer>
  );
}
