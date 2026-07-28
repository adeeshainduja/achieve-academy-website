import axios from "axios";
import type { ChatRequest, ChatResponse } from "../types/chatbot";

const API_URL =
  import.meta.env.VITE_API_URL ?? "http://127.0.0.1:8000";

console.log("API URL:", API_URL);

const api = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const sendMessage = async (
  data: ChatRequest
): Promise<ChatResponse> => {
  const response = await api.post("/api/chat/", data);
  return response.data;
};