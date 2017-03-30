'use strict'

const express = require('express');
const bodyParser = require('body-parser');

let twitter = require('./routes/twitter');

let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/twitter', twitter);


app.listen(3000);

module.exports = app;
