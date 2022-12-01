const router = require('express').Router();
const notesRoute = require('../apiRoutes/notesApi');

router.use(notesRoute);

module.exports = router;