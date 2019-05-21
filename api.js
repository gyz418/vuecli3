var express = require('express');
var app = express();

// respond with "hello world" when a GET request is made to the homepage
app.get('/a', function(req, res) {
  res.send('aaa');
});

app.get('/b', function(req, res) {
  res.send('bbb');
});
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});