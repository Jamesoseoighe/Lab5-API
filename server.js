const express = require('express');
const app = express();
const port = 4000;

app.get('/', (req, res) => {
    res.send('Welcome to Data Respresentation & Querying');
});


app.get('/hello/:name', (req, res) => {
    const name = req.params.name;
    res.send(`Hello ${name}`);
});


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});


app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});