var express = require("express");
var cors = require('cors');
var app = express();

var mongoose = require('mongoose');
var config = require("./config");

var setupController = require('./controllers/setupController')
var apiController = require('./controllers/apiController')

var port = process.env.PORT || 3000;

app.use(cors());

app.use('/assets', express.static(__dirname + '/public'));

app.set('view engine', 'ejs');

console.log("connection string");
console.log(config.getDbConnectionString());

mongoose.connect(config.getDbConnectionString()).then(() => console.log('Database connection successful'))
.catch(err => console.error('Database connection error:', err));

setupController(app);
apiController(app);

app.listen(port);