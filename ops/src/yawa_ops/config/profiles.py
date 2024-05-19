import json
import os

from yawa_ops.config.constants import RESOURCES_DIR
from yawa_ops.config.credentials import Credentials

PROFILES_DIR = os.path.join(RESOURCES_DIR, "profiles")


class Profile:
    def __init__(self, name: str, credentials: Credentials):
        self.name = name
        self.credentials = credentials

    @staticmethod
    def from_file(file_path: str):
        with open(file_path) as f:
            profile_as_json = json.load(f)
            return Profile(
                name=profile_as_json["name"],
                credentials=Credentials(
                    access_token=profile_as_json["accessToken"],
                    access_token_expiration=profile_as_json["accessTokenExpiration"],
                    refresh_token=profile_as_json["refreshToken"],
                    refresh_token_expiration=profile_as_json["refreshTokenExpiration"],
                )
            )


def load_profile(profile_name: str):
    return Profile.from_file(f"{PROFILES_DIR}/{profile_name}.json")
