/* Create a function numberDigits() that takes the variable x as its only parameter.

If the variable x is between 0 and 9, return the string 'One digit: N', where N is the value of x. 

If the variable x is between 10 and 99, return the string 'Two digits: N', where N is the value of x. 

Any other value of x, including negative numbers, return the string 'The number is: N', where N is the value of x. */

const numberDigits = x => {
    if (x >= 0 && x <= 9) {
        return `One Digit: ${x}`;
    }
    else if (x >= 10 && x <= 99) {
        return `Two Digits: ${x}`;
    }
    else {
        return `The number is: ${x}`;
    }
}

// The lines below will test the function
console.log(numberDigits(12)); // should print 'Two Digits: 12'
console.log(numberDigits(3)); // should print 'One Digit: 3'
console.log(numberDigits(-25)); // should print 'The number is: -25'
