from pydantic_settings import BaseSettings

class Settings(BaseSettings):
    # Environment Mode
    ENVIRONMENT: str  # [production / development]

    # Database Configuration
    DATABASE_URL: str = ""
    DATABASE_HOSTNAME: str = ""
    DATABASE_PORT: int = 5432
    DATABASE_USERNAME: str = ""
    DATABASE_PASSWORD: str = ""
    DATABASE_NAME: str = ""

    # Frontend & Backend URLs
    FRONTEND_URL: str
    FRONTEND_URL_PROD: str
    BACKEND_URL: str
    BACKEND_URL_PROD: str

    # Application Configuration
    SECRET_KEY: str
    ALGORITHM: str
    ACCESS_TOKEN_EXPIRE_MINUTES: int
    DEBUG: bool

    # Email Configuration (Gmail)
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

    @property
    def get_database_url(self) -> str:
        if self.ENVIRONMENT == "production":
            return self.DATABASE_URL
        return f"postgresql://{self.DATABASE_USERNAME}:{self.DATABASE_PASSWORD}@{self.DATABASE_HOSTNAME}:{self.DATABASE_PORT}/{self.DATABASE_NAME}"

    class Config:
        env_file = ".env"

settings = Settings()

SQLALCHEMY_DATABASE_URL = settings.get_database_url


# from pydantic_settings import BaseSettings

# class Settings(BaseSettings):
#     # Database Configurations
#     ENVIRONMENT: str
#     DATABASE_URL: str = ""
#     DATABASE_HOSTNAME: str
#     DATABASE_PORT: int
#     DATABASE_USERNAME: str
#     DATABASE_PASSWORD: str
#     DATABASE_NAME: str
#     SECRET_KEY: str
#     ALGORITHM: str
#     ACCESS_TOKEN_EXPIRE_MINUTES: int
#     DEBUG: bool
    
#     # Environment Mode
#     ENVIRONMENT: str

#     # Frontend & Backend URLs
#     FRONTEND_URL: str
#     FRONTEND_URL_PROD: str
#     BACKEND_URL: str
#     BACKEND_URL_PROD: str
    
#     # Email Configurations
#     MAIL_USERNAME: str
#     MAIL_PASSWORD: str
#     MAIL_FROM: str
#     MAIL_PORT: int
#     MAIL_SERVER: str
#     MAIL_STARTTLS: bool
#     MAIL_SSL_TLS: bool    

#     @property
#     def get_frontend_url(self) -> str:
#         return self.FRONTEND_URL_PROD if self.ENVIRONMENT == "production" else self.FRONTEND_URL

#     @property
#     def get_backend_url(self) -> str:
#         return self.BACKEND_URL_PROD if self.ENVIRONMENT == "production" else self.BACKEND_URL
#     class Config:
#         env_file = ".env"

# settings = Settings()

# if settings.ENVIRONMENT == "production":
#     SQLALCHEMY_DATABASE_URL = settings.DATABASE_URL
# else:
#     SQLALCHEMY_DATABASE_URL = f"postgresql://{settings.DATABASE_USERNAME}:{settings.DATABASE_PASSWORD}@{settings.DATABASE_HOSTNAME}:{settings.DATABASE_PORT}/{settings.DATABASE_NAME}"
