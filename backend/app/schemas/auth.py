from pydantic import BaseModel, EmailStr, Field

class PasswordResetRequest(BaseModel):
    email: EmailStr

class SetNewPassword(BaseModel):
    token: str = Field(..., description="Token sent to user's email for verification")
    new_password: str = Field(..., min_length=8, description="New password")
    confirm_password: str = Field(..., min_length=8, description="Confirm new password")
    
class OTPVerification(BaseModel):
    email: EmailStr
    otp: str
