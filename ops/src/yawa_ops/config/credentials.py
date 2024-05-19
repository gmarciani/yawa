from datetime import datetime


class Credentials:
    def __init__(self,
                 access_token: str, access_token_expiration: datetime,
                 refresh_token: str, refresh_token_expiration: datetime):
        self.access_token = access_token
        self.access_token_expiration = access_token_expiration
        self.refresh_token = refresh_token
        self.refresh_token_expiration = refresh_token_expiration
