var express = require('express');
var app = express();
var tomatoes = require('./db/tomatoes.json');

app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
  res.render('index');
});

app.get('/tomatoes', function(req, res) {
  res.json(tomatoes);
  res.redirect('/');
})

app.listen(process.env.PORT || 3000);