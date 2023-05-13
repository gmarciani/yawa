import os
from enum import Enum

ENDPOINT = "https://localhost:8002"


class Identity(Enum):
    ADMIN = "admin"
    NORMAL_FREE = "normal_free"
    ANONYMOUS = "anonymous"

    @classmethod
    def parse(cls, s):
        for k, v in cls.__members__.items():
            if k == str(s).upper():
                return v
        else:
            raise ValueError(f"'{cls.__name__}' enum not found for '{s}'")

    @classmethod
    def values(cls):
        return list(cls._value2member_map_.keys())


IDENTITY = Identity.ANONYMOUS

TOKENS = {
    Identity.ADMIN: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VybmFtZSI6ImFkbWluIn0.e3UwvG12weaHaVWZ2u-vuH1SkOb6Ee0NFMVJGtTgwio",
    Identity.NORMAL_FREE: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VybmFtZSI6InRlc3Qtbm9ybWFsLWZyZWUifQ.2kZkbxGdijcI8CfM2MvO6NW9st8OLv8wdr7kz0kmmyo",
    Identity.ANONYMOUS: None,
}

TOKEN = TOKENS[IDENTITY]

CA_FILE=os.path.join(os.path.dirname(__file__), "gmarciani-root-ca.pem")
