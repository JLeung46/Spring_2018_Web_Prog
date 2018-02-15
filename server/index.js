var express = require('express')
var app = express()

/*
This first thing we output is what's in the use function
then next() checks whether we're at 'hello' or 'goodbye'
and outputs the corresponding message. 
*/

app.use(function(req, res, next){
	res.write('This is an example..');
	next();

});

// respond with "hello world" when a GET request is made to the homepage/hello

app.get('/hello', function (req, res) {
  res.write('hello world');
  res.end();
})

app.get('/goodbye', function (req, res) {
  res.write('New Paltz');
  res.end();
})

app.listen(8080);