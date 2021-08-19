from pydantic import BaseModel

# class ReviewIn(BaseModel):
#     name: str
#     quarter: str
#     professor: str
#     difficulty: int
#     experience: int
#     passed: bool
#     review: str


class Restroom(BaseModel):
    id: int
    name: str
    cleanliness: int
    peaceful: int
    gem: bool
    review: str