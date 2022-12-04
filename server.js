// Import the routes and express
const express = require('express');
const PORT = process.env.port || 3001;
const app = express()

const apiRoutes = require('./routes/apiRoutes/notesApi.js');
const htmlRoutes = require('./routes/index.js');

// Set the port

// Express
;

// Middleware for parsing JSON and urlencoded form data
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



// Directing the app
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);



// Makes the server listen
app.listen(PORT, () => {
    console.log(`App listening at http://localhost:${PORT} 🚀`)
});

