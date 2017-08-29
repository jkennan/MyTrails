const express     = require('express');
const router      = express.Router();
const MongoClient = require('mongodb').MongoClient;
const ObjectID    = require('mongodb').ObjectID;
const assert      = require('assert');
const config      = require('../../config');

// Mongo setup
let mdb;

MongoClient.connect(config.mongodbUri, (err, db) => {
    assert.equal(null, err);
    mdb = db;
});

// incoming GET requests -- all slashes are relative to /api
router.get('/', (req, res) => {
    res.send('Api is running, you may choose from \n/alltrails \n/trail/<<trail id>>');
});


// GET all trails
router.get('/alltrails', (req, res) => {
    mdb.collection('trailcollection')
       .find({})
       .project({
            name: 1,
            state: 1,
            ripta: 1,
       })
       .toArray((err, docs) => {
        assert.equal(null, err);
        res.send({ "trails": docs });
    });
});


// GET one specific trail
router.get('/trails/:trailId', (req, res) => {
    mdb.collection('trailcollection')
       .findOne({ _id: ObjectID(req.params.trailId) })
       .then(trail => res.send(trail))
       .catch(error => {
           console.error(error);
           res.status(404).send('Bad API request, try checking the object ID to ensure it is correct');
    });
});

module.exports = router;