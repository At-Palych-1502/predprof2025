from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask_jwt_extended import JWTManager
from flask_cors import CORS

from .config import Config

# Глобальные экземпляры расширений
db = SQLAlchemy()
migrate = Migrate()
jwt = JWTManager()

def create_app(config_class=Config):
    app = Flask(__name__)
    CORS(app)
    app.config.from_object(config_class)

    # Инициализация расширений привязкой к приложению
    db.init_app(app)
    migrate.init_app(app, db)
    jwt.init_app(app)

    # Регистрация Blueprint'ов
    from .api import bp as api_bp
    app.register_blueprint(api_bp, url_prefix='/api')

    # ВАЖНО: Импорт моделей должен быть здесь, чтобы Flask-Migrate их увидел
    from . import models

    return app