import ChatMessage from "./ChatMessage";
import ChatInput from "./ChatInput";
import QuickSuggestions from "./QuickSuggestions";
import { useChat } from "../../hooks/useChat";

export default function ChatWindow() {
  const { messages, loading, send } = useChat();

  return (
    <div className="flex h-[600px] w-[380px] flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-2xl">

      {/* Header */}
      <div className="bg-blue-600 p-4 text-white">
        <h2 className="text-lg font-bold">
          🤖 Achieve Academy Assistant
        </h2>

        <p className="text-sm opacity-90">
          Ask me about courses, admissions, fees and more.
        </p>
      </div>

      {/* Quick Suggestions */}
      <QuickSuggestions onSelect={send} />

      {/* Messages */}
      <div className="flex-1 overflow-y-auto bg-gray-50 p-4">

        {messages.length === 0 && (
          <ChatMessage
            sender="bot"
            text="Hello 👋 Welcome to Achieve Academy. How can I help you today?"
          />
        )}

        {messages.map((message) => (
          <ChatMessage
            key={message.id}
            sender={message.sender}
            text={message.text}
          />
        ))}

        {loading && (
          <ChatMessage
            sender="bot"
            text="Typing..."
          />
        )}

      </div>

      {/* Input */}
      <ChatInput onSend={send} />
    </div>
  );
}