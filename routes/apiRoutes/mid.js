const router = require('express').Router();
const apiRoutes = require('./notesApi');

router.use('/notes', apiRoutes);

module.exports = router;