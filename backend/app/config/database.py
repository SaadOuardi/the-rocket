import os
from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
from app.config.settings import SQLALCHEMY_DATABASE_URL
from dotenv import load_dotenv

# ✅ Load environment variables
load_dotenv()

# Create database engine
engine = create_engine(SQLALCHEMY_DATABASE_URL)

# Create session factory
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

# Define Base for models (DO NOT IMPORT `Base` HERE AGAIN)
Base = declarative_base()

# ✅ Dependency for Getting DB Session
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()