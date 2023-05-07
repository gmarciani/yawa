import os

ENDPOINT = "https://localhost:8002"
ADMIN_TOKEN = (
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VybmFtZSI6ImFkbWluIn0.e3UwvG12weaHaVWZ2u-vuH1SkOb6Ee0NFMVJGtTgwio"
)
CA_FILE=os.path.join(os.path.dirname(__file__), "gmarciani-root-ca.pem")
