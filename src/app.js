const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes');
const middleware = require('./middleware');
const config = require('./config');

const app = express();

// Middleware setup
app.use(bodyParser.json());
app.use(middleware);

// Route setup
app.use('/api', routes);

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

module.exports = app;