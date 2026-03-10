from . import db
from datetime import datetime
from werkzeug.security import generate_password_hash, check_password_hash


class Dot(db.Model):
    __tablename__ = 'dots'

    id = db.Column(db.Integer, primary_key=True)
    x = db.Column(db.Integer, nullable=True)
    y = db.Column(db.Integer, nullable=True)
    z = db.Column(db.Integer, nullable=True)

    def __repr__(self):
        return f'<Dot {self.id}: ({self.x}, {self.y}, {self.z})>'

    def to_dict(self):
        return {
            'id': self.id,
            'x': self.x,
            'y': self.y,
            'z': self.z
        }