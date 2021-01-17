from flask import Flask, request
from database import *
import os
from flask_cors import CORS, cross_origin

app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'


@app.route('/createUser', methods=['POST'])
@cross_origin()
def create_user():
    data = request.json
    username = data['username']
    password = data['password']
    create_user_hash(username, password)
    return {"Status": True}


@app.route('/getBalance', methods=['GET'])
@cross_origin()
def get_balance():
    data = request.json
    # data = {'username':'bryant1',
    #         'password':'password'}
    username = data['username']
    return str(int(get_user_balance(username).split('.')[0]))


@app.route('/addTransaction', methods=["POST"])
@cross_origin()
def add_transaction():
    data = request.json
    username = data['username']
    password = data['password']
    amt = str(data['amt'])
    destination = data['destination']
    process_transaction(username, password, amt, destination)
    return "Success"

@app.route('/publicKey', methods=['GET'])
@cross_origin()
def get_wallet():
    data = request.json
    username = data['username']
    return get_public(username)

@app.route('/privateKey', methods = ['GET'])
@cross_origin()
def get_private():
    data= request.json
    username = data['username']
    password = data['password']
    return get_secret(username, password)

if __name__ == "__main__":
    app.debug = True
    port = int(os.environ.get('PORT', 5000))
    app.run(host='0.0.0.0', port=port)
