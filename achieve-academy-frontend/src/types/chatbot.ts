export interface ChatMessage {
    id: number;
    sender: "user" | "bot";
    message: string;
}

export interface ChatRequest {
    message: string;
}

export interface ChatResponse {
    reply: string;
}