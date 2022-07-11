/* OBJECTIVE: Did you know that giraffes sleep 4.6 hours a day? We humans need more than that. If we don’t sleep enough, we accumulate sleep debt. In this project we’ll calculate if you’re getting enough sleep each week using a sleep debt calculator.

The program will determine the actual and ideal hours of sleep for each night of the last week.

Finally, it will calculate, in hours, how far you are from your weekly sleep goal. */

// sleep hours per day
const getSleepHours = day => {
    switch (day) {
      case 'monday':
        return 8;
      case 'tuesday':
        return 7;
      case 'wednesday':
        return 8;
      case 'thursday':
        return 9;
      case 'friday':
        return 6;
      case 'saturday':
        return 10;
      case 'sunday':
        return 9;
    }
  }
  
  // add up total sleep throughout the week
  const getActualSleepHours = () =>
    getSleepHours('monday')
    + getSleepHours('tuesday')
    + getSleepHours('wednesday')
    + getSleepHours('thursday')
    + getSleepHours('friday')
    + getSleepHours('saturday')
    + getSleepHours('sunday');
  
  // get ideal amount of sleep per week
  const getIdealSleepHours = () => {
    const idealHours = 8;
    return (idealHours * 7);
  }
  
  // calculate sleep debt
  const calculateSleepDebt = () => {
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours();
    if (actualSleepHours === idealSleepHours) {
      console.log('You got the perfect amount of sleep!');
    } else if (actualSleepHours > idealSleepHours) {
      console.log('You got ' + (actualSleepHours - idealSleepHours) + ' hour(s) more sleep than you needed this week. You\'re good to go!');
    } else if (actualSleepHours < idealSleepHours) {
      console.log('You got ' + (idealSleepHours - actualSleepHours) + ' hour(s) less sleep than you needed this week. Get some rest.');
    }
  }
  console.log(calculateSleepDebt());
  