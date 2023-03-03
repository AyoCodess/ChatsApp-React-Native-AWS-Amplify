import { View, Text, FlatList } from "react-native";
import React from "react";

interface Props {
  message: {
    id: string;
    text: string;
    createdAt: string;
    user: {
      id: string;
      name: string;
    };
  };
}

export function Message({ message }: Props) {
  return (
    <View>
      <Text>{message.text}</Text>
    </View>
  );
}
