var express = require('express');
fs = require('fs');
var app = express();
app.use(express.logger());

app.get('/', function(request, response) {
 var text = fs.readFileSync('index.html','utf-8');
 response.send(text);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
