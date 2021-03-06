var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

var onRequest = function(request, response) {
	var data = fs.readFileSync('index.html')

	response.send(data.toString());
}

app.get('/', onRequest);

var port = process.env.PORT || 8081;
app.listen(port, function() {
  console.log("Listening on " + port);
});
