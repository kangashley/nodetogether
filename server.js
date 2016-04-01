var port = "2000" // CREATE LOCATION
var host = "0.0.0.0";
var express = require('express'); // REQUIRE EXPRESS

var app = express(); // CREATE EXPRESS APP

app.use(require("./app")); //can also use app/index, app/index.js

app.listen (port, host); // .listen()

console.log('Yay! The server started.');