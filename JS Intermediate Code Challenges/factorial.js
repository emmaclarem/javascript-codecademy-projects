// OBJECTIVE: Write a function factorial() that takes a number as an argument and returns the factorial of the number. Assume only positive numbers will be given as an argument for the factorial() function.

const factorial = num => {
    for (let i = num - 1; i >= 1; i--) {
      num *= i;
    } return num;
  };
  
// The lines below will test the function
console.log(factorial(6));
console.log(factorial(3));
console.log(factorial(4));