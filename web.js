var express = require('express'),
	fs = require('fs');

var app = express.createServer(express.logger());

app.get('/', function(request, res) {
	fs.readFile(__dirname + '/index.html', 'utf8', function(err, text){
	   res.send(text);
	});
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});