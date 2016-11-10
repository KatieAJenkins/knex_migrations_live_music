'use strict';

var express = require('express');
var app = express();
var port = 8080;

app.use(express.static('public'));
app.get('/api', function(req, res){
  res.send("Hi from API");
})

app.listen(port, function(){
  console.log("Listening on port " + port);
})
