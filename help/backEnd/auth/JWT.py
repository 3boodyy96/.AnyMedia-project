import JWT
from datetime import datetime, timedelta
from fastapi import Depends, HTTPException, status
from fastapi.security import HTTPBearer, HTTPAuthorizationCredentials
from dotenv import load_dotenv, dotenv_values

load_dotenv('..\\.env\\main.py')

header = {
    "alg": "HS256",
    "typ": "JWT" 
}

security = HTTPBearer()
