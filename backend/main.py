from fastapi import FastAPI
from app.routers.auth import auth_router
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
# Register authentication routes
app.include_router(auth_router, prefix="/auth", tags=["Authentication"])

@app.get("/")
def home():
    return {"message": "Welcome to the Social Media API"}
