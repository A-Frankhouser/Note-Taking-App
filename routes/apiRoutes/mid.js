const router = require('express').Router();
const apiRoutes = require('./noteRoutes');

router.use('/notes', apiRoutes);

module.exports = router;