from typing import Tuple

RESTRICTED_KEYWORDS = [
    "student",
    "students",
    "mark",
    "marks",
    "exam mark",
    "attendance",
    "payment",
    "payments",
    "salary",
    "teacher salary",
    "password",
    "username",
    "login",
    "email address",
    "phone number",
    "nic",
    "address",
    "private",
    "confidential",
    "record",
    "records",
    "result",
    "results",
]

REFUSAL_MESSAGE = (
    "I'm sorry, I can only provide general public information about "
    "Achieve Academy. Please contact the academy office for assistance "
    "with confidential information."
)


def check_restricted(question: str) -> Tuple[bool, str]:

    q = question.lower()

    for keyword in RESTRICTED_KEYWORDS:
        if keyword in q:
            return True, REFUSAL_MESSAGE

    return False, ""