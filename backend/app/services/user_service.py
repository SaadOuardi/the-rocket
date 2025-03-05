import uuid
import random
from sqlalchemy.orm import Session
from app.utils.email import send_verification_email
from app.models.user import User
from app.schemas.user import UserCreate
from app.utils.hashing import hash_password

async def create_user(db: Session, user_data: UserCreate):
    # Check if email or username already exists
    existing_user = db.query(User).filter(
        (User.email == user_data.email) | (User.username == user_data.username)
    ).first()

    if existing_user:
        raise ValueError("Email or username already taken.")

    # Generate verification token and OTP
    hashed_password = hash_password(user_data.password)
    verification_token = str(uuid.uuid4())
    otp_code = str(random.randint(100000, 999999))  # 6-digit OTP

    # Create new user (not verified yet)
    new_user = User(
        firstname=user_data.firstname,
        lastname=user_data.lastname,
        username=user_data.username,
        email=user_data.email,
        password=hashed_password,
        user_type=user_data.user_type,
        verification_token=verification_token,
        otp_code=otp_code,
    )

    db.add(new_user)
    db.commit()
    db.refresh(new_user)

    # Send verification email
    await send_verification_email(new_user.email, new_user.verification_token, new_user.otp_code)

    return new_user
