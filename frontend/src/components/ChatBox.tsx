import MessageBubble from "./MessageBubble";

interface Message {
  role: "user" | "bot";
  text: string;
}

export default function ChatBox({ messages }: { messages: Message[] }) {
  return (
    <div className="space-y-3">
      {messages.map((msg, i) => (
        <MessageBubble key={i} role={msg.role} text={msg.text} />
      ))}
    </div>
  );
}
