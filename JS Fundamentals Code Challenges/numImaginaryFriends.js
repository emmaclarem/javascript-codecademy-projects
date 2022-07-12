/* A person’s number of imaginary friends are always 25% (or 1/4) of their total friends.

Write a function, numImaginaryFriends(), that takes in the total number of friends a person has and returns the number of imaginary friends they have.

Since friends can only come in whole numbers, be sure to round your result up to the nearest whole number before returning it. */

const numImaginaryFriends = num => {
    if (num < 0) {
        return 'You can\'t have a negative amount of friends!'
    }
    
imaginaryFriends = Math.ceil(num / 4);
    return imaginaryFriends;
  }

// The lines below will test the function
console.log(numImaginaryFriends(20)) // Should print 5
console.log(numImaginaryFriends(10)) // Should print 3 (2.5 rounded up!)
console.log(numImaginaryFriends(-2)) // Should print 3 'You can\'t have a negative amount of friends!'
