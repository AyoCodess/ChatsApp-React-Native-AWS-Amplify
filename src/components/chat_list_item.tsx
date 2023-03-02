import React from "react";
import { Text, View, Image } from "react-native";

interface Props {
  chat: {
    id: string;
    user: {
      id: string;
      name: string;
      image: string;
    };
    lastMessage: {
      id: string;
      text: string;
      createdAt: string;
    };
  };
}

export function ChatListItem({ chat }: Props) {
  if (!chat) {
    return null;
  }

  return (
    <View className="flex-row mx-3 my-2 h-16  ">
      <Image
        className="w-12 h-12 rounded-full mr-2"
        source={{
          uri: chat.user.image,
        }}
      />
      <View className="flex-1 border-b-[0.5px] border-gray-300">
        <View className="flex-row mb-1 ">
          <Text numberOfLines={1} className="flex-1 font-bold">
            {chat.user.name}
          </Text>
          <Text className="text-gray-500">{chat.lastMessage.createdAt}</Text>
        </View>
        <Text numberOfLines={2} className=" text-gray-500">
          {chat.lastMessage.text}
        </Text>
      </View>
    </View>
  );
}
