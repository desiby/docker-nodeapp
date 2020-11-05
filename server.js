'use strict';

const express = require('express');

// Constants
const PORT = 9000;

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Hello World from node, I am in kubernetes!');
});

app.listen(PORT);
console.log(`Running on port: ${PORT}`);
