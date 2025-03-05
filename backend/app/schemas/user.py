from pydantic import BaseModel, EmailStr, constr
import re

class UserLogin(BaseModel):
    email: EmailStr
    password: str

class LoginResponse(BaseModel):
    user_id: str
    user_type: str
    two_factor_enabled: bool
    token: str | None = None

# Password validation function
def validate_password(password: str) -> str:
    if len(password) < 8:
        raise ValueError("Password must be at least 8 characters long.")
    if not re.search(r"\d", password):
        raise ValueError("Password must contain at least one number.")
    if not re.search(r"[A-Z]", password):
        raise ValueError("Password must contain at least one uppercase letter.")
    if not re.search(r"[@$!%*?&]", password):
        raise ValueError("Password must contain at least one special character (@$!%*?&).")
    return password

# User Signup Schema
class UserCreate(BaseModel):
    firstname: constr(strip_whitespace=True, min_length=2, max_length=50)
    lastname: constr(strip_whitespace=True, min_length=2, max_length=50)
    username: constr(strip_whitespace=True, min_length=3, max_length=30)
    email: EmailStr
    phone_number: str | None = None
    password: constr(min_length=8)
    bio: str | None = None
    profile_picture: str | None = None
    cover_picture: str | None = None
    is_private: bool = False
    user_type: str = "user"

    class Config:
        from_attributes = True

    @classmethod
    def validate_password(cls, password: str):
        return validate_password(password)
