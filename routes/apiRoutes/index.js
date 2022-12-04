const router = require('express').Router();
const notesRoute = require('./notesApi');

router.use('/notes', notesRoute);

module.exports = router;