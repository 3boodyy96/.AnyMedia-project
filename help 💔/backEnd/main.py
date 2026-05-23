from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def root():
    return {"message": "الي زمان ما برمجت ببايثون والاسوا من هيك قاعد عم برمج فيها باك اند"}