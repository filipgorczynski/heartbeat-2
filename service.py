#!/usr/bin/env python3

from datetime import datetime
import os

from flask import Flask
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/health')
def index():
    pid = os.getpid()
    now = datetime.now()
    now = now.strftime("%Y/%m/%D %H:%M:%S")
    return f"Current PID# {pid}; time: {now}"
