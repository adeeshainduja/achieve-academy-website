from enum import Enum


class Intent(str, Enum):
    GRADES = "grades"
    STREAMS = "streams"
    SUBJECTS = "subjects"
    FEES = "fees"
    ADMISSION = "admission"
    CONTACT = "contact"
    TIMETABLE = "timetable"
    UNKNOWN = "unknown"


def detect_intent(question: str) -> Intent:

    q = question.lower()

    if any(word in q for word in [
        "grade",
        "grades",
        "class level"
    ]):
        return Intent.GRADES

    if any(word in q for word in [
        "stream",
        "streams",
        "science",
        "commerce",
        "arts",
        "technology",
        "mathematics",
        "humanities"    
    ]):
        return Intent.STREAMS

    if any(word in q for word in [
        "subject",
        "subjects",
        "math",
        "biology",
        "physics",
        "chemistry",
        "ict"
    ]):
        return Intent.SUBJECTS

    if any(word in q for word in [
        "fee",
        "fees",
        "payment",
        "price",
        "cost"
    ]):
        return Intent.FEES

    if any(word in q for word in [
        "admission",
        "apply",
        "registration",
        "register"
    ]):
        return Intent.ADMISSION

    if any(word in q for word in [
        "contact",
        "phone",
        "email",
        "office"
    ]):
        return Intent.CONTACT

    if any(word in q for word in [
        "timetable",
        "schedule",
        "time"
    ]):
        return Intent.TIMETABLE

    return Intent.UNKNOWN