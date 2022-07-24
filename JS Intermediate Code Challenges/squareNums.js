// OBJECTIVE: Write a function, squareNums(), that takes in an array of numbers and, using .map(), returns an array with the square of each of the elements of that array.

// started code
const numbers = [2, 7, 9, 171, 52, 33, 14]

const toSquare = num => num * num;

// my code
const squareNums = arr => arr.map(toSquare);

// The line below will test the function
console.log(squareNums(numbers)); // should print [ 4, 49, 81, 29241, 2704, 1089, 196 ]
