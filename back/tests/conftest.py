from pathlib import Path
import sys
import os
import pytest
from app import create_app


backend_dir = Path(__file__).resolve().parent.parent
sys.path.insert(0, str(backend_dir))



@pytest.fixture
def app():
    '''Здесь для бд'''

    test_cf = {
        "TESTING": "True",
        "SQLALCHEMY_TRACK_MODIFICATIONS": False,
    }

    app = create_app(test_congig=test_cf)



@pytest.fixture
def client(app):
    return app.test_client()
