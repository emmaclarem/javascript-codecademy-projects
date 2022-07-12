// OBJECTIVE: Write a function, agreeOrDisagree(), that takes in two strings, and returns 'You agree!' if the two strings are the same and 'You disagree!' if the two strings are different.

const agreeOrDisagree = (string1, string2) => {
    if (string1 === string2) {
      return 'You agree!';
    } else {
      return 'You disagree!';
    }
  }
  
  // The lines below will test the function
  console.log(agreeOrDisagree("yep", "yep")) // Should print 'You agree!'
  console.log(agreeOrDisagree("yep", "yes")) // Should print 'You disagree!'
  console.log(agreeOrDisagree("nope", "yep")) // Should print 'You disagree!'
  console.log(agreeOrDisagree("nah", "nah")) // Should print 'You agree!'
  