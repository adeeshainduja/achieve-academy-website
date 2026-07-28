from google import genai

from app.core.config import GEMINI_API_KEY

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

Never answer:

- Student records
- Marks
- Attendance
- Payments
- Passwords
- Internal documents
- Staff salaries

If someone asks for confidential information,
reply politely that you can only provide public information and ask them to contact the Achieve Academy office.

Keep your answers short, helpful, and professional.
"""


def generate_response(message: str) -> str:
    prompt = f"""
{SYSTEM_PROMPT}

User Question:
{message}
"""

    try:
        response = client.models.generate_content(
            model="gemini-3.6-flash",
            contents=prompt,
        )

        return response.text

    except Exception as e:
        print("Gemini Error:", e)
        return (
            "Sorry, I'm currently unavailable. "
            "Please try again later or contact Achieve Academy."
        )