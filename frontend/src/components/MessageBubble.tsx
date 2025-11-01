interface Props {
  role: "user" | "bot";
  text: string;
}

export default function MessageBubble({ role, text }: Props) {
  const isUser = role === "user";
  return (
    <div
      className={`max-w-lg p-3 rounded-2xl ${
        isUser
          ? "bg-blue-600 text-white self-end ml-auto"
          : "bg-gray-800 text-gray-100 self-start"
      }`}
    >
      {text}
    </div>
  );
}
