'use strict';
const express = require('express');
const app = express();

app.get('/search', (req, res) => {
    const query = req.query;
    res.send(query);
});

app.listen(process.argv[2] || 3000);