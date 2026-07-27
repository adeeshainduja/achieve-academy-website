import axios from "axios";
import type { ChatRequest, ChatResponse } from "../types/chatbot";

const api = axios.create({
  baseURL: "http://127.0.0.1:8000",
});

export const sendMessage = async (
  data: ChatRequest
): Promise<ChatResponse> => {
  const response = await api.post("/api/chat/", data);
  return response.data;
};