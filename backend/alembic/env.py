import sys
import os
from logging.config import fileConfig
from sqlalchemy import create_engine, pool
from alembic import context
from dotenv import load_dotenv

# ✅ Manually add `app/` to Python’s module search path
sys.path.insert(0, os.path.abspath(os.path.join(os.path.dirname(__file__), "..", "app")))

# ✅ Load environment variables
load_dotenv()

# ✅ Dynamically import `Base` to avoid circular imports
from app.config.database import DATABASE_URL

# ✅ Set up Alembic config
config = context.config
config.set_main_option("sqlalchemy.url", DATABASE_URL)

# ✅ Load logging configuration if available
if config.config_file_name is not None:
    fileConfig(config.config_file_name)

# ✅ Import models **AFTER** setting up the database URL
import app.models  # Make sure all models are imported correctly

target_metadata = app.models.Base.metadata

def run_migrations_offline() -> None:
    """Run migrations in 'offline' mode."""
    context.configure(
        url=DATABASE_URL,
        target_metadata=target_metadata,
        literal_binds=True,
        dialect_opts={"paramstyle": "named"},
    )
    with context.begin_transaction():
        context.run_migrations()

def run_migrations_online() -> None:
    """Run migrations in 'online' mode."""
    connectable = create_engine(DATABASE_URL, poolclass=pool.NullPool)

    with connectable.connect() as connection:
        context.configure(connection=connection, target_metadata=target_metadata)
        with context.begin_transaction():
            context.run_migrations()

if context.is_offline_mode():
    run_migrations_offline()
else:
    run_migrations_online()
