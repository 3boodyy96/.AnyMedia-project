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

# no coding today just pain 🥀
# staring at the screen and getting dizzy by doing nothing
# shame
# thats not me
# im stronger than this shit called (back end)
# but it seems like its not "back end" but "black end"
# idk what to say
# still determined but need to recharge the battery 🥀😵
# could i refuse?
# like yk i put all my hopes and dreams in my recycle bin
# im not lying btw 🥀
# https://files.catbox.moe/ownzpt.png
# ...
# if you read this
# then you are jobless
# touch a grass plz and leave me suffering alone
# ...
# maybe some "yume nikki" would fix me and make me feel better