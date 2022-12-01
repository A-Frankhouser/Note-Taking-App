// Import the routes and express
const express = require('express');
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

// Set the port
const PORT = process.env.port || 3001;

// Express
const app = express();

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));

// Directing the app
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);



// Makes the server listen
app.listen(PORT, () => {
    console.log(`App listening at http://localhost:${PORT} 🚀`)
});

