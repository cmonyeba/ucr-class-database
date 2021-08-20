from models.dining_model import Dining
import sqlalchemy

metadata = sqlalchemy.MetaData()

reviews = sqlalchemy.Table(
    "reviews",
    metadata,
    sqlalchemy.Column("id", sqlalchemy.Integer, primary_key=True),
    sqlalchemy.Column("course", sqlalchemy.String),
    sqlalchemy.Column("quarter", sqlalchemy.String),
    sqlalchemy.Column("professor", sqlalchemy.String),
    sqlalchemy.Column("difficulty", sqlalchemy.Integer),
    sqlalchemy.Column("overall_experience", sqlalchemy.Integer),
    sqlalchemy.Column("outcome", sqlalchemy.Boolean),
    sqlalchemy.Column("review", sqlalchemy.String),

)

study_spots = sqlalchemy.Table(
    "study_spots",
    metadata,
    sqlalchemy.Column("id", sqlalchemy.Integer, primary_key=True),
    sqlalchemy.Column("name", sqlalchemy.String),
    sqlalchemy.Column("college", sqlalchemy.String),
    sqlalchemy.Column("noise", sqlalchemy.Integer),
    sqlalchemy.Column("seating", sqlalchemy.Integer),
    sqlalchemy.Column("comfortable", sqlalchemy.Integer),
    sqlalchemy.Column("regular", sqlalchemy.Boolean),
    sqlalchemy.Column("review", sqlalchemy.String),
)

restrooms = sqlalchemy.Table(
    "restrooms",
    metadata,
    sqlalchemy.Column("id", sqlalchemy.Integer, primary_key=True),
    sqlalchemy.Column("name", sqlalchemy.String),
    sqlalchemy.Column("cleanliness", sqlalchemy.Integer),
    sqlalchemy.Column("peaceful", sqlalchemy.Integer),
    sqlalchemy.Column("gem", sqlalchemy.Boolean),
    sqlalchemy.Column("review", sqlalchemy.String),
)

dining = sqlalchemy.Table(
    "dining",
    metadata,
    sqlalchemy.Column("id", sqlalchemy.Integer, primary_key=True),
    sqlalchemy.Column("name", sqlalchemy.String),
    sqlalchemy.Column("meal", sqlalchemy.String),
    sqlalchemy.Column("ambiance", sqlalchemy.Integer),
    sqlalchemy.Column("taste", sqlalchemy.Integer),
    sqlalchemy.Column("service", sqlalchemy.Integer),
    sqlalchemy.Column("recommend", sqlalchemy.Boolean),
    sqlalchemy.Column("review", sqlalchemy.String),
)