export interface ChatRequest {
  message: string;
}

export interface ChatResponse {
  reply: string;
}

export interface Message {
  id: number;
  sender: "user" | "bot";
  text: string;
}