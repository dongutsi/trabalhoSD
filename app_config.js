//app_config.js

var express = require('express');
var bodyParser = require('body-parser');
//var conexao = require('./Banco.js');
var app = express();

app.listen(5000);

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({
    extended: true
}));


module.exports = app;
