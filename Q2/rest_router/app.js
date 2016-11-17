'use strict';

var express = require('express'); //require express
var app = express();

var guests = [{ name: 'Teagan' }, {name: 'Katie'}, {name: 'Brando'}];
console.log(guests);

//morgan = npm module that logs information in console
var morgan = require('morgan'); //require morgan. cmd --> npm install --save morgan
app.use(morgan('dev')); //can type 'dev' = more readable
console.log(morgan);

var bodyParser = require('body-parser'); //need to npm install --save body-parser
app.use(bodyParser.json());

app.get('/guests', function(req, res) { //gets list of all guests in object
  res.send(guests); //sending this data back to client
});

app.get('/guests/:index', function(req, res) { //gets list of guests by index in object
  var index = Number.parseInt(req.params.index); //parse index into number
  // console.log(index);

  if (Number.isNaN(index) || index < 0 || index >= guests.length) { //error checking if index is less than 0, NaN, or larger than array length
    return res.sendStatus(404);
  }
  res.send(guests[index]); //responding to request with element at this index #
});

app.post('/guests', function(req, res) {
  var guest = req.body;

  if (!guest) {
    return res.sendStatus(400);
  }

  guests.push(guest);

  res.send(guest);
});

app.put('/guests/:index', function(req, res) {
  var index = Number.parseInt(req.params.index); //storing variable so we can check index is valid below

  if (Number.isNaN(index) || index < 0 || index >= guests.length) {
    return res.sendStatus(404);
  }

  var guest = req.body;

  if (!guest) {
    return res.sendStatus(400);
  }

  guests[index] = guest; //if it does exist, replacing guest at this location with new guest

  res.send(guest);
});

app.delete('/guests/:index', function(req, res) {//deleting element at the position we passed in our parameter.
  var index = Number.parseInt(req.params.index);

  if (Number.isNaN(index) || index < 0 || index >= guests.length) {
    return res.sendStatus(404);
  }

  var guest = guests.splice(index, 1)[0]; //splices the array with an object, then takes [0] index of the object

  res.send(guest);
});

app.listen('8080', function() {
  console.log('Listening on ', 8080);
});
