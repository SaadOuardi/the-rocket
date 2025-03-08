from fastapi_mail import FastMail, MessageSchema, ConnectionConfig
from pydantic import EmailStr
from app.config.settings import settings

conf = ConnectionConfig(
    MAIL_USERNAME=settings.MAIL_USERNAME,
    MAIL_PASSWORD=settings.MAIL_PASSWORD,
    MAIL_FROM=settings.MAIL_FROM,
    MAIL_PORT=settings.MAIL_PORT,
    MAIL_SERVER=settings.MAIL_SERVER,
    MAIL_STARTTLS=settings.MAIL_STARTTLS,
    MAIL_SSL_TLS=settings.MAIL_SSL_TLS,
    USE_CREDENTIALS=True
)

async def send_verification_email(email: EmailStr, token: str = None, otp: str = None):
    """
    Sends an email for either:
    - Email verification (during sign-up)
    - OTP verification (for login when 2FA is enabled)

    Args:
        email (str): Recipient email
        token (str, optional): Email verification token for sign-up
        otp (str, optional): OTP code for 2FA login
    """
    verification_link = f"{settings.FRONTEND_URL}/verify-email?token={token}" if token else None

    # Construct email message
    if token and otp:
        subject = "Complete Your Sign-Up - Verify Email & OTP"
        body = f"""
        Hi,

        Please verify your email by clicking the link below:
        {verification_link}

        Or enter this OTP to complete verification: {otp}

        Regards,
        Rocket App Team
        """
    elif token:
        subject = "Verify Your Email - Rocket App"
        body = f"""
        Hi,

        Click the link below to verify your email:
        {verification_link}

        Regards,
        Rocket App Team
        """
    elif otp:
        subject = "Your One-Time Password (OTP) for Login"
        body = f"""
        Hi,

        Your OTP code for login is: {otp}.
        This code is valid for 5 minutes.

        Regards,
        Rocket App Team
        """
    else:
        raise ValueError("Either a token or an OTP must be provided for email verification.")

    # Send email
    message = MessageSchema(
        subject=subject,
        recipients=[email],
        body=body,
        subtype="plain"
    )

    fm = FastMail(conf)
    await fm.send_message(message)

async def send_password_reset_email(email: str, reset_link: str):
    subject = "Reset Your Password"
    body = f"Click the link below to reset your password:\n\n{reset_link}\n\nThis link expires in 15 minutes."
    
    message = MessageSchema(
        subject=subject,
        recipients=[email],
        body=body,
        subtype="plain"
    )

    fm = FastMail(conf)
    await fm.send_message(message)