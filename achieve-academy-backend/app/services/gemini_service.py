import google.generativeai as genai

from app.core.config import GEMINI_API_KEY

genai.configure(api_key=GEMINI_API_KEY)

model = genai.GenerativeModel("gemini-2.5-flash")


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
reply politely that you can only provide public information.
"""


def generate_response(message: str) -> str:

    prompt = f"""
{SYSTEM_PROMPT}

User Question:
{message}
"""

    response = model.generate_content(prompt)

    return response.text