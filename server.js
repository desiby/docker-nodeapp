'use strict';

const express = require('express');

// Constants
const PORT = 9000;

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Hello World from node, this is a new release!');
});

app.listen(PORT);
console.log(`Running on port: ${PORT}`);
