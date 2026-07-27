from fastapi import FastAPI

from app.routers.chatbot import router as chatbot_router

app = FastAPI(
    title="Achieve Academy AI Assistant",
    version="1.0.0"
)

app.include_router(chatbot_router)


@app.get("/")
def home():
    return {
        "message": "Backend Running Successfully"
    }