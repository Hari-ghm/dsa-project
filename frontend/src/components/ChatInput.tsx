import { useState } from "react";

export default function ChatInput({
  onSend,
}: {
  onSend: (text: string) => void;
}) {
  const [text, setText] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSend(text);
    setText("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center gap-3 p-4 bg-gray-900/80 backdrop-blur-sm border border-purple-500/30 rounded-2xl shadow-lg"
    >
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type your message..."
        className="flex-1 bg-transparent outline-none px-4 py-3 text-white placeholder-gray-400"
      />
      <button
        type="submit"
        className="bg-gradient-to-r from-purple-600 to-blue-600 px-6 py-3 rounded-xl hover:from-purple-500 hover:to-blue-500 transition-all duration-300 font-semibold text-white shadow-lg shadow-purple-500/50"
      >
        Send
      </button>
    </form>
  );
}
