
// Write a function called parseQueryString which takes a URL string as an argument and returns a Javascript object containing the key-value pairs from the query string. For example:
 // parseQueryString("http://www.yelp.com/search?find_desc=tacos&find_loc=San+FranciscoCA")
//
// //=> {find_desc: "tacos", find_loc: "San+FranciscoCA"}
//
// parseQueryString("http://www.reddit.com/r/aww/search?q=dogs&sort=top&t=week")
//
// //=> {q: "dogs", sort: "top", t: "week"}
'use strict';

var parseQueryString = function ( queryString) {


  var params = {}, queries, temp, i, l;
//
//   //Split into key/value pairs
  queries = queryString.split ("&");
console.log(queries);
//
//   //Convert the array of strings into an object
//   for ( i = 0, l = queries.length; i < l; i++) {
//     temp = queries[i].split('=');
//     params[temp[0]] = temp[1];
//   }
//
//   return params;
};

console.log(parseQueryString("http://www.reddit.com/r/aww/search?q=dogs&sort=top&t=week"));
