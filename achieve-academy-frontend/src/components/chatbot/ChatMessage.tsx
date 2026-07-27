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
      className={`mb-4 flex items-end gap-2 ${
        isUser ? "justify-end" : "justify-start"
      }`}
    >
      {/* Bot Avatar */}
      {!isUser && (
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-r from-green-700 to-green-500 text-sm text-white shadow">
          🎓
        </div>
      )}

      {/* Message Bubble */}
      <div
        className={`max-w-[78%] whitespace-pre-line rounded-3xl px-4 py-3 text-sm leading-6 shadow-md transition-all duration-200 ${
          isUser
            ? "rounded-br-md bg-gradient-to-r from-green-600 to-green-500 text-white"
            : "rounded-bl-md border border-green-100 bg-white text-gray-700"
        }`}
      >
        {text}
      </div>

      {/* User Avatar */}
      {isUser && (
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-green-100 text-sm shadow">
          👤
        </div>
      )}
    </div>
  );
}