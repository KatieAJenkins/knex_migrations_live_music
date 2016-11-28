'use strict';

var array = [1,2,2,3,3,5,5,1,6];
var singleElement = [];

function sortNums (array){
  array.sort(function (a, b){
    console.log(a - b);
    // console.log(b);
  });
}

sortNums(array);




// function onlyElement(array){
//   //loop through array looking at var i
//   for( var i = 0; i < array.length; i++){
//     console.log(i);
//   //loop through array, look at i + 1 = j
//     // for(var j = i + 1; j < array.length; j++){
//       // console.log(j);
//       //if i is the same as i + 1 (the next number), don't push
//       // if ( array[i] === array[j]){
//         // console.log(array[i]);
//       }
//       //if i does not match any numbers, push to singleElement array
//     //    else {
//     //   if (array[i] !== array[j]) {
//     //     // console.log('false');
//     //   };
//     // };
//   // };
//
//   // console.log(singleElement);
// };
// }
// onlyElement(array);
