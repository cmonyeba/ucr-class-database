from pydantic import BaseModel

# class ReviewIn(BaseModel):
#     name: str
#     quarter: str
#     professor: str
#     difficulty: int
#     experience: int
#     passed: bool
#     review: str


class StudySpot(BaseModel):
    id: int
    name: str
    noise: int
    seating: int
    comfortable: int
    regular: bool
    review: str