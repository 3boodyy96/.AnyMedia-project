import os
from dotenv import load_dotenv, dotenv_values
from sqlalchemy import Column, String, Integer, create_engine, Sequence, ForeignKey
from sqlalchemy.orm import sessionmaker, declarative_base, relationship
import sqlalchemy as sa

load_dotenv('..\\.env\\main.py')
engine = create_engine(os.getenv("DB_URL"))
Session = sessionmaker(bind=engine)
session = Session()

Base = declarative_base()


class Users(Base):
    __tablename__ = "users"
    id = Column(Integer, Sequence("user_id_seq"), nullable=False, primary_key=True)
    name = Column(String(50), nullable=True)
    UserName = Column(String(50), unique=True, nullable=False)
    email = Column(String(100), unique=True, nullable=False)
    password = Column(String(255), nullable=False)

Base.metadata.create_all(engine)

test = Users(id=2, name="3boodyy962", UserName="3boodyy962", email="test2", password="123456")

session.add(test)
session.commit()