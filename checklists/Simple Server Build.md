# Simple Server Build

Terminal

* May not need 404 File Not Found page

```
take hello_express
touch server.js
take public
touch index.html
touch 404.html
..
pwd
npm init
npm install --save express
atom .

```

Atom - server.js

```javascript
'use strict';

var express = require('express');
var app = express();

var morgan = require('morgan'); //logs info in console. cmd --> npm install --save morgan
app.use(morgan('dev'));

var bodyParser = require('body-parser'); //parses body info. npm install --save bodyParser
app.use(bodyParser.json());

app.use(express.strict('public'));
app.get('/api', function(req, res){
  res.send("Hello from API");
})

app.listen('3000', function (){
  console.log("Listening on port 3000");
})

app.use(function (req, res, next){
  res.status(404).send("404 Not Found");
})
```

Atom - index.html

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Index</title>
  </head>
  <body>
    <h2>Index</h2>
  </body>
</html>
```

Atom - 404.html

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>404 Not Found</title>
  </head>
  <body>
    <h2>404 Not Found</h2>
  </body>
</html>
```

Terminal

```
nodemon //should return this reponse:
➜  hello_world git:(master) ✗ nodemon
[nodemon] 1.11.0
[nodemon] to restart at any time, enter `rs`
[nodemon] watching: *.*
[nodemon] starting `node server.js`
Listening on port 3000
```

Control + c = quit nodemon

Delete Folder —> cd to drive folder to delete lives in

```javascript
rm -r name_of_directory
```

### Testing

* localhost:3000 —> "Listening on port 3000"


* index.html/api —> "Hello from API"
* index.html/missing —> "404 Not Found"
  * Chrome Dev Tools —> Network —>  will see 404 Not Found status![Screen Shot 2016-11-10 at 1.47.58 PM](/Users/kind2karma/Desktop/Screen Shot 2016-11-10 at 1.47.58 PM.png)



