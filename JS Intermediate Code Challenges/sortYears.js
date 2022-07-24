// OBJECTIVE: Write a function sortYears() that takes in an array of years, and, using the built-in .sort() method, returns that array with the years sorted in descending order.

const sortYears = arr => {
    arr = arr.sort().reverse();
    return arr;
  }


// The lines below will test the function
const years = [1970, 1999, 1951, 1982, 1963, 2011, 2018, 1922]
console.log(sortYears(years)) // Should print [ 2018, 2011, 1999, 1982, 1970, 1963, 1951, 1922 ]
