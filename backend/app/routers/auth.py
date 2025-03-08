import datetime
import random 
from fastapi import APIRouter, Depends, HTTPException, status
from pydantic import BaseModel, EmailStr
from sqlalchemy.orm import Session
from jose import jwt
from passlib.context import CryptContext
from app.config.database import SessionLocal, get_db
from app.config.settings import settings
from app.models.user import User
from app.services.user_service import create_user
from app.utils.email import send_verification_email, send_password_reset_email
from app.utils.token import create_password_reset_token, verify_password_reset_token
from app.utils.hashing import hash_password
from app.schemas.user import UserCreate, UserLogin, LoginResponse, validate_password
from app.schemas.auth import PasswordResetRequest, SetNewPassword, OTPVerification

SECRET_KEY = settings.SECRET_KEY
ALGORITHM = settings.ALGORITHM


auth_router = APIRouter()

pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

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

# Verify email with OTP
@auth_router.post("/verify-otp")
def verify_otp(data: OTPVerification, db: Session = Depends(get_db)):
    user = db.query(User).filter(User.email == data.email, User.otp_code == data.otp).first()

    if not user:
        raise HTTPException(status_code=400, detail="Invalid OTP or email.")

    user.is_verified = True
    user.otp_code = None
    db.commit()
    
    return {"message": "OTP verified successfully!"}

# Request Password Reset
@auth_router.post("/reset-password", status_code=status.HTTP_200_OK)
async def request_password_reset(request: PasswordResetRequest, db: Session = Depends(get_db)):
    user = db.query(User).filter(User.email == request.email).first()
    
    if not user:
        raise HTTPException(status_code=404, detail="User with this email does not exist")

    # Generate reset token (valid for 15 mins)
    reset_token = create_password_reset_token(user.email)
    
    # Choose the correct frontend URL based on the environment
    frontend_url = settings.get_frontend_url

    # Send email with reset link
    reset_link = f"{frontend_url}/reset-password?token={reset_token}"
    await send_password_reset_email(user.email, reset_link)

    return {"message": "Password reset link sent. Check your email."}

# Set New Password
@auth_router.post("/set-new-password", status_code=status.HTTP_200_OK)
def set_new_password(request: SetNewPassword, db: Session = Depends(get_db)):
    try:
        # Verify the reset token
        email = verify_password_reset_token(request.token)
        if not email:
            raise HTTPException(status_code=400, detail="Invalid or expired token")

        # Find the user in the database
        user = db.query(User).filter(User.email == email).first()
        if not user:
            raise HTTPException(status_code=404, detail="User not found")

        # Validate new password using the same policy as signup
        validate_password(request.new_password)

        # Ensure new password and confirm password match
        if request.new_password != request.confirm_password:
            raise HTTPException(status_code=400, detail="Passwords do not match")

        # Update and hash new password
        user.password = hash_password(request.new_password)
        db.commit()

        return {"message": "Password updated successfully. You can now log in."}

    except HTTPException as http_ex:
        raise http_ex  # Re-raise HTTP exceptions with proper messages
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"An unexpected error occurred: {str(e)}")