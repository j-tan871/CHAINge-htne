from stellar_sdk import TransactionBuilder, Network, Keypair, Account, server, Server, Asset, operation, \
    TransactionEnvelope, ChangeTrust, Transaction
# from stellar_base.transaction_envelope import TransactionEnvelope as Te
from server.database import *



root_keypair = Keypair.from_secret(secretSource)

op = ChangeTrust(chaingeCoin, source=public)

tx = Transaction(
    source=public,
    sequence=get_sequence('admin', 'adminpassword'),
    operations=[
        op,
    ],
    fee=100
)
g = Keypair.from_secret(secret)
root_account = Account(account_id=root_keypair.public_key, sequence=get_sequence('bryant', 'password'))
# envelope = TransactionEnvelope(tx, network_passphrase='https://horizon-testnet.stellar.org/')
# envelope.sign(root_keypair)
# xdr_envelope = envelope.xdr()
# response = horizon.submit(xdr_envelope)
server = Server(horizon_url='https://horizon-testnet.stellar.org/', client=None)
transaction = TransactionBuilder(
        source_account=root_account,
        network_passphrase=Network.TESTNET_NETWORK_PASSPHRASE,
        base_fee=100) \
        .append_change_trust_op(asset_code='chaingeCoin', asset_issuer=root_keypair.public_key, source=public)\
        .append_payment_op(  # add a payment operation to the transaction
        destination=public,
        asset_code="chaingeCoin",
        amount="1000000",
        asset_issuer=root_keypair.public_key) \
        .set_timeout(60) \
        .build()  # mark this transaction as valid only for the next 30 seconds
transaction.sign(g)
transaction.sign(root_keypair)


response = server.submit_transaction(transaction)





#
# root_account = Account(account_id=root_keypair.public_key, sequence=get_sequence('bryant', 'password'))
# server = Server(horizon_url='https://horizon-testnet.stellar.org/', client=None)
#
# # todo: create DB for contracts so amt cant be hacked
# transaction = TransactionBuilder(
#     source_account=root_account,
#     network_passphrase=Network.TESTNET_NETWORK_PASSPHRASE,
#     base_fee=100) \
#     .append_payment_op(  # add a payment operation to the transaction
#     destination=public,
#     asset_code="chaingeCoin",
#     amount="1000000000",
#     asset_issuer= public
#     ) \
#     .append_set_options_op(  # add a set options operation to the transaction
#     home_domain="overcat.me") \
#     .append_allow_trust_op(public, 'chaingeCoin', True, ) \
#     .append_allow_trust_op(root_keypair.public_key, 'chaingeCoin', True, ) \
#     .set_timeout(60) \
#     .build()  # mark this transaction as valid only for the next 30 seconds
# transaction.sign(root_keypair)
# response = server.submit_transaction(transaction)
