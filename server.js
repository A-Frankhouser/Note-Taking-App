// Import the routes and express
const express = require('express');
const apiRoutes = require('./Develop/routes/apiroutes');
const htmlRoutes = require('./Develop/routes/htmlroutes');

// Set the port
const PORT = process.env.port || 3001;

// Express
const app = express();

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Directing the app
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

// Directs the app the the public folder
app.use(express.static('public'));

// Starts the server
app.listen(PORT, () => console.log(`App listening at http://localhost:${PORT} 🚀`))