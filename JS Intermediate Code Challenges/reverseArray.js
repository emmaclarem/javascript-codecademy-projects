// OBJECTIVE: Write a function, reverseArray(), that takes in an array as an argument and returns a new array with the elements in the reverse order. There’s a built-in method that does a lot of this work for you, but here you’re not allowed to use it.

function reverseArray(arrayInput) {
    let arrayOutput = [];
    for (i = arrayInput.length-1; i >= 0; i--) {
      arrayOutput.push(arrayInput[i]);
    }
    return arrayOutput;
  }

// The lines below will test the function
const sentence = ['sense.','make', 'all', 'will', 'This'];

console.log(reverseArray(sentence)) // Should print ['This', 'will', 'all', 'make', 'sense.'];
