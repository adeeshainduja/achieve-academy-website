import { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import ChatWindow from "./ChatWindow";

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Chat Window */}
      <div
        className={`fixed bottom-24 right-6 z-50 transition-all duration-300 ${
          isOpen
            ? "translate-y-0 scale-100 opacity-100"
            : "pointer-events-none translate-y-5 scale-95 opacity-0"
        }`}
      >
        <ChatWindow />
      </div>

      {/* Floating Button */}
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-r from-green-700 to-green-500 text-white shadow-[0_12px_35px_rgba(34,197,94,0.35)] transition-all duration-300 hover:scale-110 active:scale-95"
      >
        {isOpen ? (
          <X size={24} />
        ) : (
          <MessageCircle size={24} />
        )}
      </button>

      {/* Floating Badge */}
      {!isOpen && (
        <div className="fixed bottom-20 right-8 z-40 animate-pulse rounded-full bg-white px-3 py-1 text-xs font-medium text-green-700 shadow-lg">
          💬 Need Help?
        </div>
      )}
    </>
  );
}