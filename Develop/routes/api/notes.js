const router = require('express').Router();
const fs = require('fs');

// get the notes from db
router.get('/notes', ( req, res ) => {
    const results = notes;
    res.json(results);
});

// Creates new note and adds to existing array
router.post('/notes', ( req, res ) => {
    fs.readFile('db/db.json', (err, data) => {
        let notes
    })
});