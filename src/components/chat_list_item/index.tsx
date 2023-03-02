import React from "react";
import { Text, View, Image } from "react-native";

export function ChatListItem() {
  return (
    <View className="flex-row mx-3 my-2 h-16  ">
      <Image
        className="w-12 h-12 rounded-full mr-2"
        source={{
          uri: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/elon.png",
        }}
      />
      <View className="flex-1 border-b-[0.5px] border-gray-300">
        <View className="flex-row mb-1 ">
          <Text numberOfLines={1} className="flex-1 font-bold">
            Sarah
          </Text>
          <Text className="text-gray-500">8:30</Text>
        </View>
        <Text numberOfLines={2} className=" text-gray-500">
          Hello there
        </Text>
      </View>
    </View>
  );
}
