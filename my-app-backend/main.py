from typing import List

import databases
import sqlalchemy
from sqlalchemy import create_engine
from sqlalchemy import Table, Column, Integer, String, MetaData, ForeignKey
from sqlalchemy import inspect
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import os
import urllib


# SQLAlchemy specific code, as with any other app
#DATABASE_URL = "sqlite:///./test.db"

host_server = os.environ.get('host_server', 'localhost')
db_server_port = urllib.parse.quote_plus(str(os.environ.get('db_server_port', '5432')))
database_name = os.environ.get('database_name', 'ucr')
db_username = urllib.parse.quote_plus(str(os.environ.get('db_username', 'postgres')))
db_password = urllib.parse.quote_plus(str(os.environ.get('db_password', '')))
ssl_mode = urllib.parse.quote_plus(str(os.environ.get('ssl_mode','prefer')))
DATABASE_URL = 'postgresql://{}:{}@{}:{}/{}?sslmode={}'.format(db_username, db_password, host_server, db_server_port, database_name, ssl_mode)

# DATABASE_URL = "postgresql://user:password@postgresserver/db"

database = databases.Database(DATABASE_URL)

metadata = sqlalchemy.MetaData()

reviews = sqlalchemy.Table(
    "reviews",
    metadata,
    sqlalchemy.Column("review_id", sqlalchemy.Integer, primary_key=True),
    sqlalchemy.Column("review", sqlalchemy.String),
    sqlalchemy.Column("class_id", sqlalchemy.Integer),
    sqlalchemy.Column("professor", sqlalchemy.String),
    sqlalchemy.Column("quarter", sqlalchemy.String),
)

review_view = sqlalchemy.Table(
    "review_view",
    metadata,
    sqlalchemy.Column("review_id", sqlalchemy.Integer),
    sqlalchemy.Column("review", sqlalchemy.String),
    sqlalchemy.Column("class_name", sqlalchemy.String),
    sqlalchemy.Column("professor", sqlalchemy.String),
    sqlalchemy.Column("quarter", sqlalchemy.String),
)


classes = sqlalchemy.Table(
    "classes",
    metadata,
    sqlalchemy.Column("class_id", sqlalchemy.Integer, primary_key=True),
    sqlalchemy.Column("class_name", sqlalchemy.String),
    
)


engine = sqlalchemy.create_engine(
    DATABASE_URL
)
metadata.create_all(engine)



class Review(BaseModel):
    review_id: int
    review: str
    class_name: str
    professor: str
    quarter: str

app = FastAPI()

origins= ['http://localhost:3000']

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=['*'],
    allow_headers=['*']
)

@app.on_event("startup")
async def startup():
    await database.connect()


@app.on_event("shutdown")
async def shutdown():
    await database.disconnect()

#ALL REVIEWS 
@app.get("/", response_model=List[Review])
async def read_notes():
    query = review_view.select().limit(3)
    return await database.fetch_all(query)

#REVIEWS BASED ON CLASS
@app.get("/review/{class_id}", response_model=List[Review])
async def read_notes(class_id: str):
    query = review_view.select().where(review_view.c.class_name == class_id)
    return await database.fetch_all(query)



#@app.post("/notes/", response_model=Note)
#async def create_note(note: NoteIn):
    query = notes.insert().values(text=note.text, completed=note.completed)
    last_record_id = await database.execute(query)
    return {**note.dict(), "id": last_record_id}
