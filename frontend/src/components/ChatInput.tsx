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
      className="flex items-center p-3 border-t border-gray-700 bg-gray-900"
    >
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Send a message..."
        className="flex-1 bg-transparent outline-none px-3 py-2 text-gray-200"
      />
      <button
        type="submit"
        className="bg-blue-600 px-4 py-2 rounded-md hover:bg-blue-700 transition"
      >
        Send
      </button>
    </form>
  );
}
