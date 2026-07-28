from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.routers.chatbot import router as chatbot_router

app = FastAPI(
    title="Achieve Academy AI Assistant",
    version="1.0.0"
)

# CORS Configuration
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5174",
        "http://127.0.0.1:5174",
        "https://achieve-academy-website.vercel.app",
    ],
    allow_origin_regex=r"https://.*\.vercel\.app",
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
    expose_headers=["*"],
)

# Routers
app.include_router(chatbot_router)


@app.get("/")
async def home():
    return {
        "status": "success",
        "message": "Backend Running Successfully"
    }


@app.get("/health")
async def health():
    return {
        "status": "healthy"
    }