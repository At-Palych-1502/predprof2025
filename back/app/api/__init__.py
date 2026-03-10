from flask import Blueprint
from .routes import bp as rout_bp

bp = Blueprint('api', __name__)
bp.register_blueprint(rout_bp)
from . import routes