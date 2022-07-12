/* OBJECTIVE: Though an object’s mass remains consistent throughout the universe, weight is determined by the force of gravity on an object. Since different planets have different gravity, the same object would weigh different amounts on each of those planets! Cool, huh?

Write a function, calculateWeight(). It should:
- have two parameters: earthWeight and planet
- expect earthWeight to be a number
- expect planet to be a string
- return a number representing what that Earth-weight would equate to on the planet passed in.
- Handle the following cases:
  - 'Mercury' weight = earthWeight * 0.378
  - 'Venus' weight = earthWeight * 0.907
  - 'Mars' weight = earthWeight * 0.377
  - 'Jupiter' weight = earthWeight * 2.36
  - 'Saturn' weight = earthWeight * 0.916
  - For all other inputs, return 'Invalid Planet Entry. Try: Mercury, Venus, Mars, Jupiter, or Saturn.' */

const calculateWeight = (earthWeight, planet) => {
    let planetWeight = ''
    switch (planet) {
      case 'Mercury':
        planetWeight = earthWeight * 0.378;
        return planetWeight;
      case 'Venus':
        planetWeight = earthWeight * 0.907;
        return planetWeight;
      case 'Mars':
        planetWeight = earthWeight * 0.377;
        return planetWeight;
      case 'Jupiter':
        planetWeight = earthWeight * 2.36;
        return planetWeight;
      case 'Sauturn':
        planetWeight = earthWeight * 0.916;
        return planetWeight;
      default:
        return 'Invalid Planet Entry. Try: Mercury, Venus, Mars, Jupiter, or Saturn.';
    }
  }
  
// The lines below will test the function
console.log(calculateWeight(100, 'Jupiter')) // Should print 236
console.log(calculateWeight(123, 'Mars')) // Should print 46.371
console.log(calculateWeight(78, 'Pluto')) // Should print invalid entry message, sad pluto :(
