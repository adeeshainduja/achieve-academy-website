from typing import Tuple

RESTRICTED_KEYWORDS = [
    # Student Information
    "student",
    "students",
    "who is",
    "is enrolled",
    "enrolled",
    "student id",
    "student number",

    # Academic Records
    "mark",
    "marks",
    "exam mark",
    "exam marks",
    "result",
    "results",
    "grade report",
    "attendance",

    # Personal Information
    "nic",
    "address",
    "phone number",
    "guardian",
    "parent",
    "email address",

    # Staff Information
    "salary",
    "income",
    "teacher salary",
    "lecturer salary",
    "staff salary",

    # Administration
    "internal",
    "confidential",
    "disciplinary",
    "medical",

    # Security
    "password",
    "username",
    "login",

    # Payments
    "payment",
    "payments",
    "pay fees",
    "pay tuition",
]

REFUSAL_MESSAGE = """
I'm sorry, I can't provide personal student records, marks, attendance, or other confidential information.

Please contact the Achieve Academy Admissions Office for assistance.

📧 Email: info@achieveacademy.com
☎ Phone: 011-2345678
🕘 Office Hours: Monday–Friday, 8:30 AM – 5:00 PM
""".strip()


def check_restricted(question: str) -> Tuple[bool, str]:

    q = question.lower()

    for keyword in RESTRICTED_KEYWORDS:
        if keyword in q:
            return True, REFUSAL_MESSAGE

    return False, ""