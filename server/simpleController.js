var express = require('express')
var app = express.Router();

module.exports = app

/*
This first thing we output is what's in the use function
then next() checks whether we're at '/hello' or '/goodbye'
and outputs the corresponding message. 
*/

.use(function(req, res, next){
	res.write('This is an example..');
	next();

})

// This shows how to respond when someones requests /hello or /goodbye
// respond with "hello world" when a GET request is made to the homepage/hello

.get('/hello', function (req, res) {
  res.write('hello world yay');
  res.end();
})

.get('/goodbye', function (req, res) {
  res.write('New Paltz');
  res.end();
})