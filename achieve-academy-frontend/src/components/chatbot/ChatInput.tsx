import { useState } from "react";
import { Send } from "lucide-react";

interface Props {
  onSend: (message: string) => void;
}

export default function ChatInput({ onSend }: Props) {
  const [message, setMessage] = useState("");

  const handleSend = () => {
    if (!message.trim()) return;

    onSend(message.trim());
    setMessage("");
  };

  return (
    <div className="border-t border-green-100 bg-white p-3">
      <div className="flex items-center gap-2 rounded-full border border-green-200 bg-green-50 p-2 shadow-sm">

        <input
          type="text"
          placeholder="Ask about courses..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSend();
            }
          }}
          className="flex-1 bg-transparent px-3 text-sm text-gray-700 outline-none placeholder:text-gray-400"
        />

        <button
          onClick={handleSend}
          className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-green-700 to-green-500 text-white shadow transition-all duration-300 hover:scale-105 hover:from-green-800 hover:to-green-600 active:scale-95"
        >
          <Send size={18} />
        </button>

      </div>
    </div>
  );
}