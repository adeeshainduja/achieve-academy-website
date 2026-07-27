import { useState } from "react";
import { sendMessage } from "../api/chatbotApi";
import type { Message } from "../types/chatbot";

export function useChat() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(false);

  const send = async (text: string) => {
    if (!text.trim()) return;

    const userMessage: Message = {
      id: Date.now(),
      sender: "user",
      text,
    };

    setMessages((prev) => [...prev, userMessage]);

    setLoading(true);

    try {
      const response = await sendMessage({
        message: text,
      });

      const botMessage: Message = {
        id: Date.now() + 1,
        sender: "bot",
        text: response.reply,
      };

      setMessages((prev) => [...prev, botMessage]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 2,
          sender: "bot",
          text: "Sorry, something went wrong.",
        },
      ]);
    }

    setLoading(false);
  };

  return {
    messages,
    loading,
    send,
  };
}