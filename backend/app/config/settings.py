from pydantic_settings import BaseSettings

class Settings(BaseSettings):
    # Database Configurations
    DATABASE_HOSTNAME: str
    DATABASE_PORT: int
    DATABASE_USERNAME: str
    DATABASE_PASSWORD: str
    DATABASE_NAME: str
    SECRET_KEY: str
    ALGORITHM: str
    ACCESS_TOKEN_EXPIRE_MINUTES: int
    DEBUG: bool
    
    # Environment Mode
    ENVIRONMENT: str

    # Frontend & Backend URLs
    FRONTEND_URL: str
    FRONTEND_URL_PROD: str
    BACKEND_URL: str
    BACKEND_URL_PROD: str
    
    # Email Configurations
    MAIL_USERNAME: str
    MAIL_PASSWORD: str
    MAIL_FROM: str
    MAIL_PORT: int
    MAIL_SERVER: str
    MAIL_STARTTLS: bool
    MAIL_SSL_TLS: bool    

    @property
    def get_frontend_url(self) -> str:
        return self.FRONTEND_URL_PROD if self.ENVIRONMENT == "production" else self.FRONTEND_URL

    @property
    def get_backend_url(self) -> str:
        return self.BACKEND_URL_PROD if self.ENVIRONMENT == "production" else self.BACKEND_URL
    class Config:
        env_file = ".env"

settings = Settings()
