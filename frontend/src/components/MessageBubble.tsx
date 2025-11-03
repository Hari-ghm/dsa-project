interface Props {
  role: "user" | "bot";
  text: string;
}

export default function MessageBubble({ role, text }: Props) {
  const isUser = role === "user";
  return (
    <div
      className={`max-w-2xl p-4 rounded-2xl ${
        isUser
          ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white ml-auto"
          : "bg-gray-800/80 backdrop-blur-sm text-gray-100 border border-purple-500/30"
      }`}
    >
      {text}
    </div>
  );
}
