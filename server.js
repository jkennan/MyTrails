const express    = require('express');
const path       = require('path');
// const http       = require('http');
const bodyParser = require('body-parser');
const api        = require('./server/routes/api');

const app = express(); // CHANGE THIS LATER WHEN I MOVE TO IMPORTS

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'dist'))); // 'dist' is produced by angular cli on ng build

// Set API routes
app.use('/api', api);

// Catch routes and return index file if no other routes found (eventually this will prob be 404)
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});


// Store port
const port = process.env.PORT || '3000';
app.set('port', port);

// const server = http.createServer(app);

/*server*/app.listen(port, () => console.log(`API running on localhost:${port}`));