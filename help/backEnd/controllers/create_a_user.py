from fastapi import FastAPI
from "../users_base_model" import *

app = FastAPI()

@app.post("users{id}")
def creat_a_user():
    pass