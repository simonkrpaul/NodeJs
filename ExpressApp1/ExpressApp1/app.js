﻿'use strict';
var debug = require('debug');
var express = require('express');
var path = require('path');
var http = require('http');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongo = require('mongodb').MongoClient;
var mongoose = require('mongoose');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

var routes = require('./routes/index');
var users = require('./routes/users');

var app = express();
var CUSTOMCONNSTR_MONGOLAB_URI = 'mongodb://test:Qwer123@ds036638.mlab.com:36638/test150';
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');


// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function (err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});

app.set('port', process.env.PORT || 3000);

var serve = http.createServer(app);
var io = require('socket.io')(serve);

serve.listen(app.get('port'), function () {
	console.log('Express server listening on port ' + app.get('port'));
});
io.on('connection', function (socket) {
	mongo.connect(CUSTOMCONNSTR_MONGOLAB_URI, function (err, db) {
		var collection = db.collection('chat messages')
		var stream = collection.find().sort().limit(10).stream();
		console.log("Stream" + stream)
		stream.on('data', function (chat) { socket.emit('chat', chat.content); });
	});
	console.log('a user connected');
	socket.on('disconnect', function () {
		console.log('user disconnected');
	});
	socket.on('chat', function (msg) {
		socket.broadcast.emit('chat', msg);
		mongo.connect(CUSTOMCONNSTR_MONGOLAB_URI, function (err, db) {
			var collection = db.collection('chat messages');
			collection.insert({ content: msg }, function (err, o) {
				if (err) { console.warn(err.message); }
				else { console.log("chat message inserted into db: " + msg); }
			});
		});
	});
});
