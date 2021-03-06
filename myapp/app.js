var express = require('express');
var app = express();
var db = require('./db');
var cors = require("cors");

app.use(cors());

var UserController = require('./user/UserController');
app.use('/users', UserController);


module.exports = app;

