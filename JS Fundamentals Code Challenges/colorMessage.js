/* Create a function colorMessage() that takes 2 string arguments, favoriteColor and shirtColor.

If the value of favoriteColor is the same as the value of shirtColor return the string 'The shirt is your favorite color!'.

If not, return the string 'That is a nice color.'
 */

const colorMessage = (favoriteColor, shirtColor) => {
    if (favoriteColor === shirtColor) {
      return 'The shirt is your favorite color!';
    } else {
      return 'That is a nice color.';
    }
  }
  
// The lines below will test the function
console.log(colorMessage('blue', 'pink')) // should print 'That is a nice color.'
console.log(colorMessage('purple', 'purple')) // should print 'The shirt is your favorite color!'
