const express = require('express');

const app = express();

const port = 8000;

app.get('/', (req, res) => {
	res.send("We're in main page");
});

app.get('/:something', (req, res) => {
	res.send(req.params.something);
});

app.listen(port, () => {
	console.log('We are live on ' + port)
});