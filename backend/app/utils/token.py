from datetime import datetime, timedelta
from jose import JWTError, jwt
from app.config.settings import settings

# Token expiration time (15 minutes)
RESET_TOKEN_EXPIRE_MINUTES = 15

def create_password_reset_token(email: str) -> str:
    expire = datetime.utcnow() + timedelta(minutes=RESET_TOKEN_EXPIRE_MINUTES)
    payload = {"sub": email, "exp": expire}
    token = jwt.encode(payload, settings.SECRET_KEY, algorithm=settings.ALGORITHM)
    return token

def verify_password_reset_token(token: str) -> str:
    try:
        payload = jwt.decode(token, settings.SECRET_KEY, algorithms=[settings.ALGORITHM])
        return payload.get("sub")
    except JWTError:
        return None
