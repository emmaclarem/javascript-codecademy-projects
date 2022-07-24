// OBJECTIVE: Write a function subLength() that takes 2 parameters, a string and a single character. The function should search the string for the two occurrences of the character and return the length between them including the 2 characters. If there are less than 2 or more than 2 occurrences of the character the function should return 0.

function subLength(str, char) {
    let bits = str.split(char);
    if (bits.length !== 3) {
      return 0;
    } else {
    let newStr = char + bits[1] + char;
    return newStr.length;
    }
  };
  
// The lines below will test the function
subLength('Saturday', 'a'); // returns 6
subLength('summer', 'm'); // returns 2
subLength('digitize', 'i'); // returns 0
subLength('cheesecake', 'k'); // returns 0