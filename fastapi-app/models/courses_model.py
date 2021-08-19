from pydantic import BaseModel
from datetime import datetime

# class ReviewIn(BaseModel):
#     name: str
#     quarter: str
#     professor: str
#     difficulty: int
#     experience: int
#     passed: bool
#     review: str


class Review(BaseModel):
    id: int
    course: str
    quarter: str
    professor: str
    difficulty: int
    overall_experience: int
    outcome: bool
    review: str