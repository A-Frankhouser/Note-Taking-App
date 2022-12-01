const router = require('express').Router();
const fs = require('fs');
const notes = require('../../db/db.json');

// get the notes from db
router.get('/notes', ( req, res ) => {
    let results = notes;
    res.json(results);
});

// Creates new note and adds to existing array
router.post('/notes', ( req, res ) => {

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