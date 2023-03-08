import { NavigationContainer } from "@react-navigation/native";
import { ChatListScreen, ChatScreen, NonImplementedScreen } from "../screens";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackParamList } from "./types";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import React from "react";
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
    <Tab.Navigator
      initialRouteName="chat_list_screen"
      screenOptions={{
        tabBarStyle: { backgroundColor: "whitesmoke" },
        headerStyle: { backgroundColor: "whitesmoke" },
      }}>
      <Tab.Screen
        name="chat_list_screen"
        component={ChatListScreen}
        options={{
          title: "Chats",
          headerTitle: "Chats",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="ios-chatbubbles-sharp" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="calls_screen"
        component={NonImplementedScreen}
        options={{
          headerTitle: "Calls",
          title: "Calls",
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
          title: "Camera",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="camera-outline" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="status_screen"
        component={NonImplementedScreen}
        options={{
          headerTitle: "Status",
          title: "Status",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="logo-whatsapp" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="settings_screen"
        component={NonImplementedScreen}
        options={{
          headerTitle: "Settings",
          title: "Settings",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="settings-outline" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
