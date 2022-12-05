// Importing express
const express = require('express');

//links express and routes
const PORT = process.env.PORT || 3001;
const app = express();
const apiRoutes = require("./routes/apiRoutes/notesApi.js");
const htmlRoutes = require('./routes/htmlRoutes');

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

module.exports = app;

app.listen(PORT, () =>
console.log(`Listening at http://localhost:${PORT}`));
