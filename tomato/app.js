var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var tomatoes = require('./seeds/tomatoes.json');

// Configuration
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/bower_components'));
app.set('view engine', 'ejs');

// Routes
app.get('/', function (req, res) {
  res.render('index');
});

app.get('/tomatoes', function (req, res) {
  res.json(tomatoes);
});

app.listen(process.env.PORT || 3000);