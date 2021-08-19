from pydantic import BaseModel

# class ReviewIn(BaseModel):
#     name: str
#     quarter: str
#     professor: str
#     difficulty: int
#     experience: int
#     passed: bool
#     review: str


class Dining(BaseModel):
    id: int
    name: str
    meal: str
    ambiance: int
    taste: int
    service: int
    recommend: bool
    review: str