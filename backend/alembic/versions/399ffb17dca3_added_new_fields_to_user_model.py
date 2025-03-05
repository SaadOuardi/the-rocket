"""Added new fields to User model

Revision ID: 399ffb17dca3
Revises: db470d6d4c6a
Create Date: 2025-03-05 00:09:49.291027

"""
from typing import Sequence, Union

from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision: str = '399ffb17dca3'
down_revision: Union[str, None] = 'db470d6d4c6a'
branch_labels: Union[str, Sequence[str], None] = None
depends_on: Union[str, Sequence[str], None] = None


def upgrade() -> None:
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('users', sa.Column('user_type', sa.String(), nullable=True))
    # ### end Alembic commands ###


def downgrade() -> None:
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column('users', 'user_type')
    # ### end Alembic commands ###
