var express = require('express');
var path = require('path');
var logger = require('morgan');
var swig = require('swig');
var bodyParser = require('body-parser');

process.on('uncaughtException', function (err) {
    console.log("uncaughtException", err.stack);
});

var app = express();

app.set('port', process.env.PORT || 8124);
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/A', function(req, res, next) {
    var page = swig.renderFile('views/A.html', {});
    res.send(page);
});

app.get('/B', function(req, res, next) {
    var page = swig.renderFile('views/B.html', {});
    res.send(page);
});

app.get('/C', function(req, res, next) {
    var page = swig.renderFile('views/C.html', {});
    res.send(page);
});

app.get('/test', function(req, res, next) {
    var page = swig.renderFile('views/test.html', {});
    res.send(page);
});

app.get('/test1', function(req, res, next) {
    var page = swig.renderFile('views/test1.html', {});
    res.send(page);
});

app.listen(app.get('port'), function() {
  console.log('Express server listening on port ' + app.get('port'));
});
