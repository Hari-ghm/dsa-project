"use client";

import { useState } from "react";
import ChatBox from "@/components/ChatBox";
import ChatInput from "@/components/ChatInput";

export default function Home() {
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
    <div className="flex flex-col h-screen bg-gray-950 text-gray-100">
      <div className="flex-1 overflow-y-auto p-4">
        <ChatBox messages={messages} />
      </div>
      <ChatInput onSend={handleSend} />
    </div>
  );
}
