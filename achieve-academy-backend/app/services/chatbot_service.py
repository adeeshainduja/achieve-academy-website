from sqlalchemy import text
from sqlalchemy.orm import Session

from app.services.gemini_service import generate_response
from app.utils.intent_detector import detect_intent, Intent
from app.utils.guard import check_restricted


def process_chat(message: str, db: Session):

    # -------------------------
    # Guard Layer
    # -------------------------
    restricted, reply = check_restricted(message)

    if restricted:
        return reply

    # -------------------------
    # Detect Intent
    # -------------------------
    intent = detect_intent(message)

    context = ""

    # -------------------------
    # Grades
    # -------------------------
    if intent == Intent.GRADES:

        result = db.execute(
            text("""
                SELECT grade_name
                FROM grade
                ORDER BY grade_id
            """)
        )

        grades = [row.grade_name for row in result]

        context = f"""
Available Grades:

{', '.join(grades)}
"""

    # -------------------------
    # Streams
    # -------------------------
    elif intent == Intent.STREAMS:

        result = db.execute(
            text("""
                SELECT stream_name
                FROM grade_stream
                ORDER BY stream_name
            """)
        )

        streams = [row.stream_name for row in result]

        context = f"""
Available Streams:

{', '.join(streams)}
"""

    # -------------------------
    # Subjects
    # -------------------------
    elif intent == Intent.SUBJECTS:

        result = db.execute(
            text("""
                SELECT subject_name
                FROM subject
                ORDER BY subject_name
            """)
        )

        subjects = [row.subject_name for row in result]

        context = f"""
Available Subjects:

{', '.join(subjects)}
"""

    # -------------------------
    # Fees
    # -------------------------
    elif intent == Intent.FEES:

        result = db.execute(
            text("""
                SELECT
                    c.class_name,
                    cf.monthly_fee,
                    cf.currency
                FROM class_fees cf
                JOIN class c
                    ON c.class_id = cf.class_id
                ORDER BY c.class_name
            """)
        )

        rows = result.fetchall()

        if rows:
            fee_text = "\n".join(
                f"{row.class_name}: {row.monthly_fee} {row.currency}"
                for row in rows
            )
        else:
            fee_text = "No fee information available."

        context = f"""
Public Fee Information:

{fee_text}
"""

    # -------------------------
    # Admission
    # -------------------------
    elif intent == Intent.ADMISSION:

        context = """
Admissions Information

Students can apply online through the admissions page
or visit the academy office.

Required Documents

• Birth Certificate
• Parent/Guardian NIC
• Previous School Records (if applicable)
"""

    # -------------------------
    # Contact
    # -------------------------
    elif intent == Intent.CONTACT:

        context = """
Contact Information

Phone:
011-2345678

Email:
info@achieveacademy.com

Office Hours:
Monday-Friday
8:30 AM - 5:00 PM
"""

    # -------------------------
    # Timetable
    # -------------------------
    elif intent == Intent.TIMETABLE:

        context = """
Class timetables are available through the academy office.

Please contact the administration office
for the latest timetable.
"""

    # -------------------------
    # Unknown
    # -------------------------
    else:

        context = """
No matching database information was found.

If the user asks something outside the academy's public information,
politely explain that you can only answer questions related to
Achieve Academy.
"""

    # -------------------------
    # Final Prompt
    # -------------------------
    prompt = f"""
You are the official AI Assistant for Achieve Academy.

IMPORTANT RULES

1. Answer ONLY using the database information provided.
2. Never make up information.
3. Never reveal confidential information.
4. Keep answers short, professional, and friendly.
5. If the answer is unavailable, ask the user to contact the academy office.
6. Do not answer unrelated questions.

=========================
DATABASE INFORMATION
=========================

{context}

=========================
USER QUESTION
=========================

{message}
"""

    return generate_response(prompt)