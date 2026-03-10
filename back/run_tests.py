import pytest
import os
import sys

sys.path.insert(0, os.path.abspath(os.path.join(os.path.dirname(__file__), '..')))

if __name__ == '__main__':
    args = [
        '-v',
        '--tb=short',
        'tests/'
    ]
    sys.exit(pytest.main(args))