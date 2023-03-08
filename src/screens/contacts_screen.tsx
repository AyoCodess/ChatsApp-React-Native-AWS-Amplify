import { View, Text, FlatList } from "react-native";
import React from "react";
import chats from "../../assets/data/chats.json";
import { ContactListItem } from "../components";

export function ContactsScreen() {
  return (
    <View>
      {/* <FlatList
        data={chats}
        renderItem={({ item }) => <ContactListItem chat={item} />}
        keyExtractor={(item) => item.id}
      /> */}
    </View>
  );
}
