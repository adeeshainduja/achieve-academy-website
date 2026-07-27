from sqlalchemy import text
from sqlalchemy.orm import Session

from app.services.gemini_service import generate_response


def process_chat(message: str, db: Session):

    question = message.lower()

    context = ""

    # Grades
    if "grade" in question:

        result = db.execute(
            text("""
                SELECT grade_name
                FROM grade
                ORDER BY grade_id
            """)
        )

        grades = [row.grade_name for row in result]

        context = f"Available Grades: {', '.join(grades)}"

    # Streams
    elif "stream" in question:

        result = db.execute(
            text("""
                SELECT stream_name
                FROM grade_stream
                ORDER BY stream_name
            """)
        )

        streams = [row.stream_name for row in result]

        context = f"Available Streams: {', '.join(streams)}"

    # Subjects
    elif "subject" in question:

        result = db.execute(
            text("""
                SELECT subject_name
                FROM subject
                ORDER BY subject_name
            """)
        )

        subjects = [row.subject_name for row in result]

        context = f"Available Subjects: {', '.join(subjects)}"

    # Fees
    elif "fee" in question:

        result = db.execute(
            text("""
                SELECT
                    c.class_name,
                    cf.monthly_fee,
                    cf.currency
                FROM class_fees cf
                JOIN class c
                    ON c.class_id = cf.class_id
            """)
        )

        rows = result.fetchall()

        fee_text = "\n".join(
            f"{r.class_name} : {r.monthly_fee} {r.currency}"
            for r in rows
        )

        context = fee_text

    else:

        context = """
No relevant database information found.
"""

    prompt = f"""
You are the official AI Assistant of Achieve Academy.

Use ONLY the database information below.

Database Information:

{context}

User Question:

{message}

If the question is about confidential information
(student records, marks, attendance, payments, passwords, personal details),
politely refuse.

Answer naturally and professionally.
"""

    return generate_response(prompt)