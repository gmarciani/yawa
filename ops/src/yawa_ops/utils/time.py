from datetime import datetime


def parse(str):
    return datetime.strptime(str, "%Y-%m-%dT%H:%M:%S.%f%z")
