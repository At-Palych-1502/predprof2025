from flask import jsonify, request, Blueprint
from flask_jwt_extended import create_access_token, jwt_required, get_jwt_identity
from app import db
from app.models import Dot
from ..utils_api import get_all_titles

bp = Blueprint('routes', __name__)

@bp.route('/map')
def map():
    return jsonify({"message": {"data": get_all_titles('')}})