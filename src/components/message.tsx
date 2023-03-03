import { View, Text, FlatList } from "react-native";
import React from "react";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);

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
  function isMyMessage() {
    return message.user.id === "u1";
  }

  return (
    <View
      className={` m-2 p-2 rounded-lg max-w-[80%]  ${
        isMyMessage() ? "bg-emerald-100 self-end" : " bg-white self-start"
      }`}>
      <Text>{message.text}</Text>
      <Text className="text-gray-500 self-end">
        {dayjs(message.createdAt).fromNow(true)}
      </Text>
    </View>
  );
}
