require('dotenv').config();

const express = require("express");

const methodOverride = require('method-override');
const logger = require('morgan');
const bodyParser = require('body-parser');
const session = require('express-session');

const app = express();

app.use(logger(process.env.NODE_ENV === 'production' ? 'common' : 'dev'));

app.use(bodyParser.urlencoded({
    extended: true,
}));
app.use(bodyParser.json());

// PORT
const PORT = process.argv[2] || process.env.PORT || 8000;

const cors = require("cors");
app.use(cors());

app.use(require('./resources'));

// can make middleware double check login to imgur
    // req, res, next
    // before operation with imgur see if i'm logged in imgur
    // call next (validation check) --- i have correctly logged in imgur api with tokens --- or next(error) 500
// app.set(imgurCreds)

app.listen(PORT, () => console.log(`Listening! Current port is: ${PORT}`));

module.exports = app;
