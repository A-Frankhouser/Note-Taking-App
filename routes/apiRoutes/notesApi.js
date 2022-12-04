const noteRoute = require('express').Router();
const fs = require('fs');
const uuid = require('../../helpers/uuid');

// get the notes from 
noteRoute.get('/notes', ( req, res ) => {
    fs.readFile('db/db.json', (err, data) => {
        let results = JSON.parse(data);
        res.json(results);
    })
});

// Creates new note and adds to existing array
noteRoute.post('/notes', ( req, res ) => {

    // fs to db.json
    fs.readFile('db/db.json', (err, data) => {
        let notes = JSON.parse(data);

        const note = {
            title: req.body.title,
            text: req.body.text,
            id: uuid()
        };
        console.log(note);


        notes.push(note);
        console.log(notes);

        // writes note to db
        fs.writeFile('db/db.json', JSON.stringify(notes), (data, err) => {
            console.log(data);
            res.json(data);
        });
    });
});

module.exports = noteRoute;