const path = require('path');
const router = require('express').Router();

// Gets landing page
router.get('/', ( req, res ) => {
    res.sendFile(path.join(__dirname, '../public/index.html'))
});

// Gets notes page
router.get('/notes', ( req, res ) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'))
});

// Brings you back to the landing page
router.get('*', ( req, res ) => {
    res.sendFile(path.join(__dirname, '../public/index.html'))
});
