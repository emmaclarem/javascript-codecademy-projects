// OBJECTIVE: Write a function sortSpeciesByTeeth() that takes in an array of species objects in the format: {speciesName: 'shark', numTeeth: 50 } and sorts the array in ascending order based on the average number of teeth that species possesses (numTeeth) . 

const sortSpeciesByTeeth = arr => {
    const compareTeeth = (species1, species2) => species1.numTeeth > species2.numTeeth
    return arr.sort(compareTeeth);
};


// The lines below will test the function
const speciesArray = [ {speciesName:'shark', numTeeth:50}, {speciesName:'dog', numTeeth:42}, {speciesName:'alligator', numTeeth:80}, {speciesName:'human', numTeeth:32}];

console.log(sortSpeciesByTeeth(speciesArray));