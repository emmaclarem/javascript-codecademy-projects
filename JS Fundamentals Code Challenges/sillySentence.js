/* OBJECTIVE: Write a function, sillySentence(), that has 3 string parameters and returns the following silly sentence with the blanks filled in by the arguments passed into the function: 'I am so ___ because I ___ coding! Time to write some more awesome ___!'*/

const sillySentence = (adjective, verb, noun) => {
    return `I am so ${adjective} because I ${verb} coding! Time to write some more awesome ${noun}!`;
  }
  
  
// The lines below will test the function
console.log(sillySentence('excited', 'enjoy', 'functions')) 
console.log(sillySentence('tired', 'love', 'JavaScript'))   
  