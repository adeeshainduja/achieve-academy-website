from fastapi import APIRouter

from app.schemas.chatbot import ChatRequest, ChatResponse
from app.services.gemini_service import generate_response

router = APIRouter(
    prefix="/api/chat",
    tags=["Chatbot"]
)


@router.post("/", response_model=ChatResponse)
def chat(request: ChatRequest):

    reply = generate_response(request.message)

    return ChatResponse(reply=reply)