
var express = require("express");
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));
var session = require('express-session');
app.use(session({secret: 'codingdojorocks'}));
app.set('views', __dirname + '/views'); 
app.set('view engine', 'ejs');
var path = require('path');
app.set('views', path.join(__dirname, './views'));
var mongoose = require('mongoose');




mongoose.Promise = global.Promise;
require("./server/config/mongoose.js")
var routes_setter = require("./server/config/routes.js")
routes_setter(app);



app.listen(8000, function() {
    console.log("successfully connect!")
})