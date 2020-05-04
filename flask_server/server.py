from flask import Flask, request
from pymongo import MongoClient

client = MongoClient('localhost', 27017)
db = client['scratchpad-db']
app = Flask(__name__)

app.run()