from models.courses_model import Review
from models.studyspots_model import StudySpot
from models.restrooms_model import Restroom
from models.dining_model import Dining
from schemas import reviews, study_spots, restrooms, dining
from typing import List
import databases
import sqlalchemy
from fastapi.middleware.cors import CORSMiddleware
from fastapi import FastAPI


DATABASE_URL = "postgres://goujhmevmdqydl:c8b9e3c8b8bf79327dae1c989fbb4ca6d47e93e901158844589b2a0b993d149b@ec2-52-21-252-142.compute-1.amazonaws.com:5432/d4c4ji0qfft262"

database = databases.Database(DATABASE_URL)

engine = sqlalchemy.create_engine(
    DATABASE_URL
)

app = FastAPI()

origins= ['http://localhost:3000',
          'https://ucr-class-database-80twkfjyh-cmonyeba.vercel.app',
          'https://ucr-class-database-80twkfjyh-cmonyeba.vercel.app/category/courses']

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=['GET'],
    allow_headers=['*']
)

@app.on_event("startup")
async def startup():
    await database.connect()


@app.on_event("shutdown")
async def shutdown():
    await database.disconnect()


# @app.get("/category/courses/", response_model=List[Review])
# async def read_notes():
#     query = reviews.select()
#     return await database.fetch_all(query)
from pydantic import BaseModel

class Suggestions(BaseModel):
    id: int
    name: str

    
# @app.get("hello/{na/", response_model=List[Restroom])
# async def get_suggestions(name: str):
#     # Fetch multiple rows
#     query = "SELECT DISTINCT(course) FROM reviews WHERE course like {name}%"
#     return await database.fetch_all(query=query)

@app.get("/category/restrooms/", response_model=List[Restroom])
async def read_restrooms():
    query = restrooms.select()
    return await database.fetch_all(query)

#REVIEWS BASED ON CLASS
@app.get("/category/courses/{name}", response_model=List[Review])
async def read_course(name: str):
    query = reviews.select().where(reviews.c.course == name)
    return await database.fetch_all(query)

#REVIEWS BASED ON SPOT
@app.get("/category/studyspots/{name}", response_model=List[StudySpot])
async def read_studyspot(name: str):
    query = study_spots.select().where(study_spots.c.name == name)
    return await database.fetch_all(query)

#REVIEWS BASED ON DINING
@app.get("/category/dining/{name}", response_model=List[Dining])
async def read_dining(name: str):
    query = dining.select().where(dining.c.name == name)
    return await database.fetch_all(query)

# @app.get("/notes/", response_model=List[Review])
# async def read_notes():
#     query = reviews.select()
#     return await database.fetch_all(query)

# @app.get("/notes/", response_model=List[Review])
# async def read_notes():
#     query = reviews.select()
#     return await database.fetch_all(query)


# @app.post("/notes/"
# , response_model=Review)
# async def create_note(review: ReviewIn):
#     query = review.insert().values(text=review.text, completed=review.completed)
#     last_record_id = await database.execute(query)
#     return {**review.dict(), "id": last_record_id}
