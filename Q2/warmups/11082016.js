'use strict';
//
// var array = [12,2,3,90,0];
//
// //Print an array that has only numbers larger than 10
// //expect [12,90]
//
// function larger (array) {
//   var largeArray = [];
//   for(var i = 0; i < array.length; i++){
//     if(array[i] >= 10){
//       largeArray.push(array[i]);
//     };
//   };
//   console.log(largeArray);
// }
// larger(array);
//
// //What if I want the numbers that are less than 10?
// //expect [2,3,0]
//
// function smaller (array) {
//   var smallArray = [];
//   for(var i = 0; i < array.length; i++){
//     if(array[i] <= 10){
//       smallArray.push(array[i]);
//     };
//   };
//   console.log(smallArray);
// }
// smaller(array);

////////////////////////////////////////////////////
var students =
[
  {name: "Lori", grade:"3"},
  {name: "Finn", grade:"5"},
  {name: "Sally", grade:"3"},
  {name: "Cory", grade:"1"}
];
//
//


// using a for loop write code that will show the info for people in 3rd grade


  var thirdGraders = [];

  function thirdGrade (students){
  for(var i = 0; i < students.length; i++){
    if(students[i].grade === "3") {
    thirdGraders.push(students[i]);
  }
}
}
thirdGrade(students)
console.log(thirdGraders);
// console.log(thirdGraders); // Lori and Sally objects

// use the filter method to produce the same results
// YOUR CODE HERE


// console.log(filteredThirdGraders);

// What if I just want the names of the third graders? Write code that will return an array with just their names.

// YOUR CODE HERE

//
// console.log(firstLetterOfThirdGraders);// [Lori, Sally]
