from google import genai

from app.core.config import GEMINI_API_KEY

# Initialize Gemini client
client = genai.Client(api_key=GEMINI_API_KEY)

SYSTEM_PROMPT = """
You are the official AI Assistant for Achieve Academy.

You may ONLY answer questions about:

- Courses
- Subjects
- Grade offerings
- Streams
- Admissions
- Fees
- Timetable
- Office hours
- Contact details
- General FAQs

Rules:
1. Answer only questions related to Achieve Academy.
2. Never provide confidential information.
3. Never invent information.
4. If the information is unavailable, politely say you don't know.
5. Keep answers short, friendly, and professional.

Never answer questions about:
- Student records
- Student marks
- Attendance
- Passwords
- Payments
- Internal documents
- Staff salaries
"""

MODEL_NAME = "gemini-2.5-flash-lite"


def generate_response(message: str) -> str:
    prompt = f"""
{SYSTEM_PROMPT}

User Question:
{message}
"""

    try:
        response = client.models.generate_content(
            model=MODEL_NAME,
            contents=prompt,
        )

        if hasattr(response, "text") and response.text:
            return response.text

        return "Sorry, I couldn't generate a response."

    except Exception as e:
        print(f"Gemini Error: {e}")
        return "Sorry, I'm having trouble answering right now. Please try again later."