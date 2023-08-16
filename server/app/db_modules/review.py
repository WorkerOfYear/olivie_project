# from sqlalchemy import Column, Integer, String, ForeingKey
# from sqlalchemy.orm import relationship

# from . import Base

# class Reviev(Base):
# 	__tablename__ = "review"

# 	user_id: Mapped[int] = mapped_column(primary_key=True)
# 	artist_id: Mapped[int] = mapped_column(primary_key=True)
# 	grade: Mapped[int]
# 	comment: Mapped[str]

# 	user: Mapped[User] = relationship("User", back_populates="reviews")
#     artist: Mapped[Artist] = relationship("Artist", back_populates="reviews")