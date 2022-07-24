// OBJECTIVE: Write a function, convertToBaby(), that takes in an array as an argument and, using a loop, returns a new array with each string in the array prepended with 'baby'. You are not allowed to use the map method.

function convertToBaby(arr) {
    let babyArr = [];
    for (i = 0; i < arr.length; i++) {
      babyArr.push('baby ' + arr[i]);
    } return babyArr;
  }

// The lines below will test the function
const animals = ['panda', 'turtle', 'giraffe', 'hippo', 'sloth', 'human'];
console.log(convertToBaby(animals));
 