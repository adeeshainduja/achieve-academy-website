interface Props {
  sender: "user" | "bot";
  text: string;
}

export default function ChatMessage({
  sender,
  text,
}: Props) {

  const isUser = sender === "user";

  return (
    <div
      className={`mb-3 flex ${
        isUser ? "justify-end" : "justify-start"
      }`}
    >
      <div
        className={`max-w-[80%] rounded-2xl px-4 py-2 text-sm shadow ${
          isUser
            ? "bg-blue-600 text-white"
            : "bg-white text-gray-800"
        }`}
      >
        {text}
      </div>
    </div>
  );
}