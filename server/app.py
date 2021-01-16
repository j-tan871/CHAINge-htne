from flask import Flask
import os


app = Flask(__name__)

@app.route('/createUser', methods = ['POST'])
def create_user():
    data = request.json
    username = data['username']
    password = data['password']

@app.route('/getBalance', methods = ['GET'])
def get_balance():
    data = request.json
    username = data['username']

if __name__ == "__main__":
    app.debug = True
    port = int(os.environ.get('PORT', 5000))
    app.run(host='0.0.0.0', port=port)
