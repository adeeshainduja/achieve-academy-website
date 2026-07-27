import ChatMessage from "./ChatMessage";
import ChatInput from "./ChatInput";
import QuickSuggestions from "./QuickSuggestions";
import { useChat } from "../../hooks/useChat";

export default function ChatWindow() {
  const { messages, loading, send } = useChat();

  return (
    <div className="flex h-[540px] w-[340px] flex-col overflow-hidden rounded-3xl border border-green-100 bg-white shadow-[0_15px_45px_rgba(34,197,94,0.18)]">

      {/* Header */}
      <div className="bg-gradient-to-r from-green-800 via-green-700 to-green-500 p-4 text-white">

        <div className="flex items-center gap-3">

          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-xl">
            🎓
          </div>

          <div>
            <h2 className="text-base font-bold">
              Achieve AI Assistant
            </h2>

            <p className="text-xs text-green-100">
              Admissions & Academic Assistant
            </p>
          </div>

        </div>

      </div>

      {/* Suggestions */}
      <QuickSuggestions onSelect={send} />

      {/* Messages */}
      <div className="flex-1 overflow-y-auto bg-gradient-to-b from-green-50 to-white p-3">

        {messages.length === 0 && (
          <ChatMessage
            sender="bot"
            text={`👋 Welcome!

I can help you with:

📚 Courses
📝 Admissions
💰 Fees
📅 Timetables
📞 Contact

How can I help you today?`}
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
          <div className="mb-3 flex justify-start">

            <div className="flex items-center gap-2 rounded-2xl border border-green-100 bg-white px-4 py-3 shadow">

              <div className="h-2 w-2 animate-bounce rounded-full bg-green-600"></div>

              <div
                className="h-2 w-2 animate-bounce rounded-full bg-green-600"
                style={{ animationDelay: "150ms" }}
              ></div>

              <div
                className="h-2 w-2 animate-bounce rounded-full bg-green-600"
                style={{ animationDelay: "300ms" }}
              ></div>

              <span className="ml-2 text-xs text-gray-500">
                Achieve AI is typing...
              </span>

            </div>

          </div>
        )}

      </div>

      {/* Footer */}
      <div className="border-t border-green-100 bg-green-50 py-2 text-center text-[10px] text-gray-500">
        Public Information Only
      </div>

      {/* Input */}
      <ChatInput onSend={send} />

    </div>
  );
}