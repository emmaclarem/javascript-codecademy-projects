// OBJECTIVE: Write a function, reportingForDuty(), that has two string parameters, rank and lastName, and returns a string in the following format: ‘rank lastName reporting for duty!’

const reportingForDuty = (rank, lastName) => {
    return `${rank} ${lastName} reporting for duty!`;
  }
  
// The lines below will test the function
console.log(reportingForDuty('Private', 'Fido')) // Should return 'Private Fido reporting for duty!'
console.log(reportingForDuty('Colonel', 'Ryan')) // Should return 'Private Fido reporting for duty!'  
  