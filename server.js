var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

var router = require('./app/routes');

mongoose.connect('mongodb://localhost/example');

var port = process.env.PORT || 8080;

app.use('/', express.static(__dirname + '/dist'));
app.use(bodyParser.urlencoded({
    extended: true
}));

router(app);

app.listen(port);
console.log('Server running on port ' + port);