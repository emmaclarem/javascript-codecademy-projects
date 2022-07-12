/*OBJECTIVE: Create a function, tipCalculator(), that has two parameters, a string representing the quality of the service received and a number representing the total cost.

Return the tip, as a number, based on the following:
- ‘bad’ should return a 5% tip
- ‘ok’ should return a 15% tip
- ‘good’ should return a 20% tip
- ‘excellent’ should return a 30% tip
- all other inputs should default to 18%*/

const tipCalculator = (quality, total) => {
    let tip = ''
    switch (quality) {
      case 'bad':
        tip = total * 0.05;
        return tip;
      case 'ok':
        tip = total * 0.15;
        return tip;
      case 'good':
        tip = total * 0.20;
        return tip;
      case 'excellent':
        tip = total * 0.30;
        return tip;
      default:
        tip = total * 0.18;
        return tip;
    }
  }
  
// The lines below will test the function
console.log(tipCalculator('good', 100)) //should return 20
console.log(tipCalculator('bad', 72)) //should return 3.6
console.log(tipCalculator('fine', 86)) //should return 15.48
  