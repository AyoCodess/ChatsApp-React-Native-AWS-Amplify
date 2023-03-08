import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { ChatListScreen, ChatScreen, NonImplementedScreen } from "../screens";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackParamList } from "./types";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

export function Navigation() {
  const Stack = createNativeStackNavigator<RootStackParamList>();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="home"
          component={MainTabNavigation}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="chat_screen"
          component={ChatScreen}
          options={{ headerTitle: "Chats" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export function MainTabNavigation() {
  const Tab = createBottomTabNavigator<RootStackParamList>();
  return (
    <Tab.Navigator initialRouteName="chat_list_screen">
      <Tab.Screen
        name="status_screen"
        component={NonImplementedScreen}
        options={{
          headerTitle: "Status",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="logo-whatsapp" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="calls_screen"
        component={NonImplementedScreen}
        options={{
          headerTitle: "Calls",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="call-outline" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="camera_screen"
        component={NonImplementedScreen}
        options={{
          headerTitle: "Camera",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="camera-outline" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="settings_screen"
        component={NonImplementedScreen}
        options={{
          headerTitle: "Settings",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="settings-outline" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="chat_list_screen"
        component={ChatListScreen}
        options={{
          headerTitle: "Chats",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="logo-whatsapp" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
