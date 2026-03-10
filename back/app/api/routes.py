from flask import jsonify, request, Blueprint
from flask_jwt_extended import create_access_token, jwt_required, get_jwt_identity
from app import db
from app.models import Dot
from ..utils_api import get_all_titles, get_data

bp = Blueprint('routes', __name__)

@bp.route('/map')
def map():
    return jsonify({"message": {"data": get_all_titles('')}})


@bp.route('/stations')
def stations():
    return jsonify({"message": {"data": [{"x": 5, "y": 10, "type": 'high32'}, {"x": 15, "y": 45, "type": 'high64'}, {"x": 1, "y": 1, "type": 'station'}, {"x": 56, "y": 62, "type": 'station'}]}})