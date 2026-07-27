from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.database import get_db
from app.schemas.chatbot import ChatRequest, ChatResponse
from app.services.chatbot_service import process_chat

router = APIRouter(
    prefix="/api/chat",
    tags=["Chatbot"]
)


@router.post("/", response_model=ChatResponse)
def chat(
    request: ChatRequest,
    db: Session = Depends(get_db)
):

    reply = process_chat(request.message, db)

    return ChatResponse(reply=reply)