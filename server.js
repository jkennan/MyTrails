const express    = require('express');
const path       = require('path');
const bodyParser = require('body-parser');
const api        = require('./server/routes/api');
const config     = require('./config');

const app = express(); // CHANGE THIS LATER WHEN I MOVE TO IMPORTS

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'dist'))); // 'dist' is produced by angular cli on ng build

// Enable CORS
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// Set API routes
app.use('/api', api);

// Catch routes and return index file if no other routes found (eventually this will prob be 404)
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});


// Store port
app.set('port', config.port);

/*server*/app.listen(config.port, () => console.log(`API running on localhost:${config.port}`));