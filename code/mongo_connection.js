const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

const user = encodeURIComponent('root');
const password = encodeURIComponent('12345678');
const authMechanism = 'DEFAULT';

const dbName = 'testmdb'

// Connection URL
const url = `mongodb://${user}:${password}@mongo:27017/?authMechanism=${authMechanism}`;

// Create a new MongoClient
const client = new MongoClient(url);

// Use connect method to connect to the Server
client.connect(function (err) {
    assert.equal(null, err);
    console.log("Connected correctly to server");

    const db = client.db(dbName);

    const col = db.collection('movie');

    col.find({}).toArray(function(err, docs) {
        if (err) throw err;
        console.log(docs);
        client.close();
    })

    client.close();
});