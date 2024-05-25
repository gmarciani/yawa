from os import path

RESOURCES_DIR = path.abspath(f"{path.dirname(__file__)}/../../../resources")

DEFAULT_ENDPOINT = "https://localhost:8002"

DEFAULT_PROFILE = None

CA_FILE = path.abspath(f"{RESOURCES_DIR}/certificates/GMARCIANI-Root-CA-Cert.pem")
