import json
from yawac import ApiException


class ClientError(RuntimeError):
    def __init__(self, api_exception: ApiException):
        body_json = json.loads(api_exception.body)
        self.timestamp = body_json.get("timestamp")
        self.status = body_json.get("status")
        self.message = body_json.get("message")
        self.path = body_json.get("path")
