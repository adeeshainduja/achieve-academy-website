from fastapi import FastAPI

app = FastAPI(
    title="Achieve Academy AI Assistant",
    version="1.0.0"
)

@app.get("/")
def home():
    return {
        "message": "Backend Running Successfully"
    }