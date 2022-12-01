const noteRoute = require('express').Router();
const fs = require('fs');
const uuid = require('../../helpers/uuid');

// get the notes from db
noteRoute.get('/notes', ( req, res ) => {
    fs.readFile('db/db.json', (err, data) => {
        let results = notes;
        res.json(results);
    })
});

// Creates new note and adds to existing array
noteRoute.post('/notes', ( req, res ) => {

    // fs to db.json
    fs.readFile('../db/db.json', (err, data) => {
        let notes = JSON.parse(data);

        const note = {
            title: req.body.title,
            text: req.body.text
        };

        notes.push(note);

        fs.writeFile('db/db.json', JSON.stringify(notes, null, 2));

    })
});

module.exports = router;