from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.routers.chatbot import router as chatbot_router

app = FastAPI(
    title="Achieve Academy AI Assistant",
    version="1.0.0"
)

# Allowed Frontend URLs
origins = [
    "http://localhost:5173",
    "http://127.0.0.1:5173",
    "https://achieve-academy-website.vercel.app",
]

# CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(chatbot_router)


@app.get("/")
def home():
    return {
        "message": "Backend Running Successfully"
    }