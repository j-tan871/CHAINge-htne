import requests
from firebase import Firebase
from stellar_sdk import TransactionBuilder, Network, Keypair, Account, server, Server

# database config
config = {
    "apiKey": "AIzaSyBQyS8QpRZdCr31a6EjLgFTbgCAIrj0N6k",
    "authDomain": "folding-297715.firebaseapp.com",
    "projectId": "folding-297715",
    'databaseURL': 'https://folding-297715-default-rtdb.firebaseio.com/',
    "storageBucket": "folding-297715.appspot.com",
    "messagingSenderId": "600647983935",
    'appId': "1:600647983935:web:ed9cf81bc0fe3a8595698a",
    'measurementId': "G-1QWR71QESH"
}
firebase = Firebase(config)
auth = firebase.auth()
user = auth.sign_in_with_email_and_password('gbhou5@gmail.com', 'secret123456')
db = firebase.database()


def add_to_db(username, password, data):
    # if not authenticate(username, password):
    #     return False

    results = db.child(username).push(data, user['idToken'])
    return "Data added to DB, " + user['idToken']


def get_secret(username, password):
    results = db.child(username).get()
    for i in results.val():
        if results.val()[i]['password'] == password:
            return results.val()[i]['secret_hash']
    return "User not found"


def get_public(username):
    results = db.child(username).get()
    for i in results.val():
        return results.val()[i]['public_key']
    return "User not found"


def authenticate(username, password):
    results = db.child(username).get()
    if not results.val():
        return False
    for i in results.val():
        if results.val()[i]['password'] == password:
            return True
    return False


def create_user_hash(username, password):
    if authenticate(username, password):
        return "User already exists"
    keypair = Keypair.random()
    url = 'https://friendbot.stellar.org'
    response = requests.get(url, params={'addr': keypair.public_key})
    data = {
        'public_key': keypair.public_key,
        'secret_hash': keypair.secret,
        'password': password,
        'status': 0
    }
    return add_to_db(username, password, data)


def get_user_balance(username):
    # kpdata = get_secret(username, password)
    # # if kpdata == 'User not found':
    # #     return "Transaction not valid, user not found"
    # #
    # root_keypair = Keypair.from_secret(kpdata)
    # # root_account = Account(account_id=root_keypair.public_key, sequence=1)
    # # return root_account.account()
    crawl = server.Server(horizon_url='https://horizon-testnet.stellar.org/', client=None).accounts()
    return crawl.account_id(get_public(username)).call()['balances'][0]['balance']

def get_sequence(username, password):
    kpdata = get_secret(username, password)
    # if kpdata == 'User not found':
    #     return "Transaction not valid, user not found"
    #
    root_keypair = Keypair.from_secret(kpdata)
    # root_account = Account(account_id=root_keypair.public_key, sequence=1)
    # return root_account.account()
    crawl = server.Server(horizon_url='https://horizon-testnet.stellar.org/', client=None).accounts()
    return int(crawl.account_id(root_keypair.public_key).call()['sequence'])


def process_transaction(username, password, amt, destination):
    kpdata = get_secret(username, password)
    if kpdata == 'User not found':
        return "Transaction not valid, user not found"

    root_keypair = Keypair.from_secret(kpdata)
    root_account = Account(account_id=root_keypair.public_key, sequence = get_sequence(username, password))
    server = Server(horizon_url ='https://horizon-testnet.stellar.org/', client = None )

    # todo: create DB for contracts so amt cant be hacked
    transaction = TransactionBuilder(
        source_account=root_account,
        network_passphrase=Network.TESTNET_NETWORK_PASSPHRASE,
        base_fee=100) \
        .append_payment_op(  # add a payment operation to the transaction
        destination=get_public(destination),
        asset_code="XLM",
        amount=amt) \
        .append_set_options_op(  # add a set options operation to the transaction
        home_domain="overcat.me") \
        .set_timeout(60) \
        .build()  # mark this transaction as valid only for the next 30 seconds
    transaction.sign(root_keypair)
    response = server.submit_transaction(transaction)
    return str(response)
