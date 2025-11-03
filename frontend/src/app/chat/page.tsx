"use client";

import { useState } from "react";
import ChatBox from "@/components/ChatBox";
import ChatInput from "@/components/ChatInput";

export default function ChatPage() {
  const [messages, setMessages] = useState<
    { role: "user" | "bot"; text: string }[]
  >([]);

  const handleSend = (text: string) => {
    if (!text.trim()) return;
    setMessages((prev) => [...prev, { role: "user", text }]);

    // mock bot reply for now
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { role: "bot", text: "🤖 This is a bot reply!" },
      ]);
    }, 500);
  };

  return (
    <div className="flex flex-col h-screen bg-gradient-to-br from-gray-950 via-purple-950 to-blue-950">
      <div className="flex-1 overflow-y-auto p-4 flex items-center justify-center">
        <div className="w-full max-w-2xl">
          <ChatBox messages={messages} />
        </div>
      </div>
      <div className="flex items-center justify-center pb-6 px-4">
        <div className="w-full max-w-2xl">
          <ChatInput onSend={handleSend} />
        </div>
      </div>
    </div>
  );
}

