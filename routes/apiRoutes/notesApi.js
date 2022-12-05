// Imports
const noteRoutes = require('express').Router();
const fs = require('fs');
const uuid = require('../../helpers/uuid');
// ---------------------------------------------


//Pulls the note api
noteRoutes.get('/notes', (req, res) => {
    fs.readFile('db/db.json', (err, data) => {
        let results = JSON.parse(data);
        res.json(results);

    })
});
// ---------------------------------------------

//Posts the note to db
noteRoutes.post('/notes', (req, res) => {
    fs.readFile('db/db.json', (err,data) => {
        let notes = JSON.parse(data);
        const note = {
            title: req.body.title,
            text: req.body.text,
            id: uuid(),
        };
    console.log(note);
    

    notes.push(note);
    console.log(notes);


    fs.writeFile('db/db.json', JSON.stringify(notes),(data, err) => {
        console.log(data);
        res.json(data);
    });
    });
});
// ---------------------------------------------

module.exports = noteRoutes;