from fastapi import APIRouter, Depends, HTTPException
from pydantic import BaseModel, EmailStr
from sqlalchemy.orm import Session
from app.config.database import SessionLocal
from app.models.user import User
from app.schemas.user import UserCreate, UserLogin, LoginResponse
from app.services.user_service import create_user
from passlib.context import CryptContext
from jose import jwt
import datetime
from app.config.settings import settings
from app.utils.email import send_verification_email
import random 

SECRET_KEY = settings.SECRET_KEY
ALGORITHM = settings.ALGORITHM


auth_router = APIRouter()

pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

# Dependency: Get database session
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

# Signup Route
@auth_router.post("/signup")
async def signup(user: UserCreate, db: Session = Depends(get_db)):
    try:
        new_user = await create_user(db, user)
        return {"message": "User created successfully", "user_id": new_user.id}
    except ValueError as e:
        raise HTTPException(status_code=400, detail=str(e))

# Login Route
@auth_router.post("/login", response_model=LoginResponse)
async def login(request: UserLogin, db: Session = Depends(get_db)):
    user = db.query(User).filter(User.email == request.email).first()
    
    # User does not exist
    if not user:
        raise HTTPException(status_code=401, detail="Invalid email or password")
    
    # Check password
    if not pwd_context.verify(request.password, user.password):
        raise HTTPException(status_code=401, detail="Invalid email or password")
    
    # If 2FA is enabled, generate OTP and send it
    if user.two_factor_enabled:
        otp_code = str(random.randint(100000, 999999))  # ✅ Generate 6-digit OTP
        user.otp_code = otp_code  # ✅ Store OTP in the database
        db.commit()

        # ✅ Send OTP via email (without token)
        await send_verification_email(email=user.email, otp=otp_code)  

        return {
            "user_id": str(user.id),
            "user_type": user.user_type,
            "two_factor_enabled": True
        }
    
    # Generate JWT token (for users without 2FA)
    token_data = {
        "sub": str(user.id),
        "exp": datetime.datetime.utcnow() + datetime.timedelta(hours=12)
    }
    token = jwt.encode(token_data, SECRET_KEY, algorithm=ALGORITHM)

    return {
        "user_id": str(user.id),
        "user_type": user.user_type if user.user_type else "user",
        "two_factor_enabled": False,
        "token": token
    }

# Verify email with token
@auth_router.get("/verify-email")
def verify_email(token: str, db: Session = Depends(get_db)):
    user = db.query(User).filter(User.verification_token == token).first()

    if not user:
        raise HTTPException(status_code=400, detail="Invalid or expired token.")

    user.is_verified = True
    user.verification_token = None  # Remove token after verification
    db.commit()
    
    return {"message": "Email verified successfully!"}


# ✅ Define expected request body schema
class OTPVerification(BaseModel):
    email: EmailStr  # Ensures email is required and valid
    otp: str         # Ensures OTP is required

@auth_router.post("/verify-otp")
def verify_otp(data: OTPVerification, db: Session = Depends(get_db)):
    user = db.query(User).filter(User.email == data.email, User.otp_code == data.otp).first()

    if not user:
        raise HTTPException(status_code=400, detail="Invalid OTP or email.")

    user.is_verified = True
    user.otp_code = None
    db.commit()

    return {"message": "OTP verified successfully!"}
