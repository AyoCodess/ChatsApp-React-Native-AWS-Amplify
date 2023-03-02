import React from "react";
import { ChatListItem } from "../components";

export function ChatScreen() {
  const chat = {
    id: "1",
    user: {
      id: "u2",
      name: "Lukas",
      image:
        "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/lukas.jpeg",
    },
    lastMessage: {
      id: "m1",
      text: "Well done this sprint, guys!",
      createdAt: "07:30",
    },
  };

  return <ChatListItem chat={chat} />;
}
