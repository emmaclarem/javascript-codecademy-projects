// It can be hard to keep track of what’s truthy or falsy in JavaScript. Write a function, truthyOrFalsy(), that takes in any value and returns true if that value is truthy and false if that value is falsy.

function truthyOrFalsy(value) {
    if (value) {
      return true;
    } else {
      return false;
    }
  }
  
// The lines below will test the function
console.log(truthyOrFalsy(0)) // Should print false
console.log(truthyOrFalsy('yes')) // Should print true
console.log(truthyOrFalsy(10)) // Should print true
