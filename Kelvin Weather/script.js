/* OBJECTIVE: Deep in his mountain-side meteorology lab, the mad scientist Kelvin has mastered weather prediction. Recently, Kelvin began publishing his weather forecasts on his website. However there’s a problem: All of his forecasts describe the temperature in Kelvin. With our knowledge of JavaScript, let’s convert Kelvin to Celsius, then to Fahrenheit.*/

// today's forecast
const kelvin = 293;
// convert kelvin to celsius
const celsius = kelvin - 273;
// convert celsius to fahrenheit
let fahrenheit = celsius * (9 / 5) + 32;
// convert fahrenheit decimal to whole number
fahrenheit = Math.floor(fahrenheit);
console.log(`The temperate is ${fahrenheit} degrees fahrenheit.`)