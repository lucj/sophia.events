'use strict';

// Private variables and functions

var util        = require('util'),
    winston     = require('./log').winston,
    config      = require('../config'),
    url         = config.db.url,
    MongoClient = require('mongodb').MongoClient,
    client;

// Connect to underlying database
function connection(callback){
    winston.debug("-> connection");

    // Check if db already there
    if(client){
        return callback(null, client);
    }
    MongoClient.connect(url, { reconnectTries:3, reconnectInterval: 1000}, function(err, conn) {
        if(err){
            client = null;
            return callback(err);
        } else {
            client = conn;
            return callback(null, client);
        }
    });
}

// Public variables and functions

module.exports = {

    /*
     * Connect to the database
     */
    connect: (cb) => {
        winston.debug("-> connect");

        connection( (err, conn) => {
            if(err){
                winston.error(util.format("connection with error:%s", err.message));
                client = null;
                return cb(err);
            } else {
                client = conn;
                cb(null, client);
            }
        });
    },

    /**
     * List all events
     */
    findAllEvents: (cb) => {
        winston.debug("findAllEvents");
        connection((err, client) => {
            if(err) { return cb(err); }
            const db = client.db(config.db.name);
            const collection = db.collection('events');
            collection.find({}).toArray((err, items) => {
              if (err) { return cb(err); }
              return cb(null, items);
            });
        });
    }

};
