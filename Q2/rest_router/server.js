'use strict';

var express = require('express');
var app = express();
var port = 8080;

//REST process learned today
//Store data in an array since we don't have access to a db yet. Each has own id
var superheroes = [{name: 'Batman'}, {name: 'Batgirl'}, {name: 'Antman'}];


app.use(express.static('public'));

app.get('/superheroes', function(req, res){ //when we want to get all of a resource, use name of resource in request URL
  res.send(superheroes); //open localhost:8080/superheroes in browser to see all
})

app.get('/superheroes/:id', function(req, res){ //add on /id: to find a specific index of superhero
  console.log('write code to return single resource');
})

app.post('/superheroes', function (req, res){ //create new method of post. do not include anything after superhero
  console.log('write code to create new superhero');
})

app.put('/superheroes/:id', function(req, res){
  console.log('write code to update superhero');
})//now need to update specific superhereo

app.delete('/superheroes/:id', function (req, res){
  console.log("write code to delete superhero");
}) //use same route as put to only delete a specific superhero

app.listen(port, function(){
  console.log("Listening on port " + port);
})
