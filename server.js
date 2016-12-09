var express = require('express');
var bodyParser = require('body-parser');
var session = require('express-session');
var cookieParser = require('cookie-parser');
var MongoClient = require('mongodb').MongoClient;
var URL = 'mongodb://sylbtz:fortuna@ds025459.mlab.com:25459/tractr';

var maDb;
var app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(session({
    secret: '123456789SECRET',
    saveUninitialized: false,
    resave: false
}));


app.use('/static', express.static(__dirname + '/static'));
app.use('/static/js', express.static(__dirname + '/static/js'));
app.use('/static/css', express.static(__dirname + '/static/css'));

app.set('view engine', 'jade');
app.set('views', 'jadeFiles');

app.get('/', function(req, res) { res.render('index') });

app.get('/videos', function(req, res) {
    var collection = maDb.collection('list');
    collection.find().toArray(function(err, data) {
        res.send({ data });
    });
});

MongoClient.connect(URL, function(err, db) {
    maDb = db;
    if (err) {
        return;
    }
    app.listen(process.env.PORT || 8080, function() {
        console.log(' - Le serveur est disponible sur le port 6464');
    });
});
