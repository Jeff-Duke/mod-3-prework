'use strict';
const express = require('express');
const bodyParse = require('body-parser');
const app = express();

app.use(bodyParse.urlencoded({extended: false}));

app.post('/form', (req, res) => {
    res.send(req.body.str.split('').reverse().join(''));
});

app.listen(process.argv[2] || 3000);