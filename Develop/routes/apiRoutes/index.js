const router = require('express').Router();
const notesRoute = require('./notesApi');

router.use(notesRoute);

module.exports = router;