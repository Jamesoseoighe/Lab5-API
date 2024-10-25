const express = require('express');
const app = express();
const port = 3000;

// Home route
app.get('/', (req, res) => {
    res.send('Welcome to Data Representation & Querying');
});

// Route with URL parameters
app.get('/hello/:name/:lname', (req, res) => {
    res.send("hello " + req.params.name + " " + req.params.lname);
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});

// API route to get movies
app.get('/api/movies', (req, res) => {
    const myMovies = [
        {
            "Title": "Avengers: Infinity War",
            "Year": "2018",
            "imdbID": "tt4154756",
            "Type": "movie",
            "Poster": "https://example.com/poster1.jpg"
        },
        {
            "Title": "Captain America: Civil War",
            "Year": "2016",
            "imdbID": "tt3498820",
            "Type": "movie",
            "Poster": "https://example.com/poster2.jpg"
        },
        {
            "Title": "World War Z",
            "Year": "2013",
            "imdbID": "tt0816711",
            "Type": "movie",
            "Poster": "https://example.com/poster3.jpg"
        }
    ];
    res.json({ myMovies }); // Send movies as JSON
});

// Serve the HTML file
const path = require('path');
app.get('/index', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Route to handle name query parameters
app.get('/name', (req, res) => {
    const firstname = req.query.firstname;
    const lastname = req.query.lastname;
    res.send(`Hello ${firstname} ${lastname}`);
});

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Middleware for parsing URL-encoded data
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

// Route to handle form submission
app.post('/name', (req, res) => {
    const firstname = req.body.firstname;
    const lastname = req.body.lastname;
    res.send(`Hello ${firstname} ${lastname}`);
});
