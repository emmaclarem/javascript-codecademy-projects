// OBJECTIVE: The most common minimum age to vote is 18. Write a function canIVote() that takes in a number, representing the person’s age, and returns the boolean true if they are 18 years old or older, and the boolean false if they are not.


const canIVote = age => age >= 18 ? true : false;


// The lines below will test the function
console.log(canIVote(19)) // Should print true
console.log(canIVote(14)) // Should print false
console.log(canIVote(28)) // Should print true


