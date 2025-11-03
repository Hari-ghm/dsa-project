"use client";

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-gray-950 via-purple-950 to-blue-950 text-white">
      <div className="text-center space-y-8 px-6 max-w-2xl">
        <h1 className="text-7xl font-bold bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent animate-pulse">
          HORIZON
        </h1>
        
        <div className="space-y-4 text-lg text-gray-200">
          <p className="text-xl">Welcome to the future of conversation</p>
          <p className="text-gray-300">
            Experience intelligent AI interactions in a sleek, modern interface.
            Start chatting and explore the possibilities.
          </p>
        </div>

        <button
          onClick={() => router.push("/chat")}
          className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full text-lg font-semibold hover:from-purple-500 hover:to-blue-500 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-purple-500/50"
        >
          Start Chatting →
        </button>
      </div>

    </div>
  );
}
