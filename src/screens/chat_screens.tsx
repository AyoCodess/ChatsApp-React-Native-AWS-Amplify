import React from "react";
import chats from "../../assets/data/chats.json";
import { FlatList } from "react-native";
import { ChatListItem } from "../components";

export function ChatScreens() {
  return (
    <FlatList
      data={chats}
      renderItem={({ item }) => <ChatListItem chat={item} />}
      keyExtractor={(item) => item.id}
    />
  );
}
