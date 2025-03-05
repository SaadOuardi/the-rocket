import uuid
from sqlalchemy import Column, String, Boolean, Integer, DateTime, ForeignKey, Text
from sqlalchemy.dialects.postgresql import UUID
from sqlalchemy.orm import relationship
from datetime import datetime
from app.config.database import Base

class User(Base):
    __tablename__ = "users"

    id = Column(UUID(as_uuid=True), primary_key=True, default=uuid.uuid4, unique=True, index=True)
    
    # Basic User Information
    firstname = Column(String, nullable=False)
    lastname = Column(String, nullable=False)
    username = Column(String, unique=True, nullable=False)
    email = Column(String, unique=True, nullable=False)
    phone_number = Column(String, unique=True, nullable=True)
    password = Column(String, nullable=False)  # Will be hashed
    bio = Column(Text, nullable=True)  # User bio
    profile_picture = Column(String, nullable=True)  # URL to profile picture
    cover_picture = Column(String, nullable=True)  # URL to cover picture
    is_private = Column(Boolean, default=False)  # Public or private account
    user_type = Column(String, default="user")  # User type (user, admin, moderator)
    
    # Account Status
    is_verified = Column(Boolean, default=False)  # Verified checkmark
    is_banned = Column(Boolean, default=False)  # If user is banned
    last_seen = Column(DateTime, nullable=True)  # Last time user was online
    
    # Social Features
    followers_count = Column(Integer, default=0)  # Number of followers
    following_count = Column(Integer, default=0)  # Number of following
    posts_count = Column(Integer, default=0)  # Number of posts made
    
    # Security & Authentication
    reset_password_token = Column(String, nullable=True)  # For password reset
    reset_password_expiry = Column(DateTime, nullable=True)  # Expiry time for reset token
    two_factor_enabled = Column(Boolean, default=False)  # 2FA security
    verification_token = Column(String, nullable=True, unique=True)  # Email token
    otp_code = Column(String, nullable=True)  # Alternative OTP code
    
    # Account Timestamps
    created_at = Column(DateTime, default=datetime.utcnow)  # Account creation date
    updated_at = Column(DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)  # Last profile update

