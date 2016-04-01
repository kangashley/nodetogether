var express = require('express'); // REQUIRE EXPRESS
var exphbs = require("express-handlebars");
var app = express(); // CREATE EXPRESS APP

app.use(express.static('./app/public'));

app.engine('handlebars', exphbs({
  defaultLayout: 'main', 
  layoutsDir:'./app/views/layouts'
}));

app.set('views', './app/views');
app.set('view engine', 'handlebars');

var motivations = require('motivations'); //npm package
var pickOne = require('pick-one'); //npm package //stores array
var catImages = [1,2,3,4,5,6]; // array //from "img" directory

app.get('/', function(request, response) {
	var motivation = pickOne(motivations); //function, expects array
	var image = pickOne(catImages); //function, expects array
	response.render('motivation', {motivation, image}); // RULES //or { motivation: motivation} aka name of view: variable
	//don't forget to render both motivation + image
});

module.exports = app;