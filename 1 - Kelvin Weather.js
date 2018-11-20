// a constant varible for Kelvin temperature
const kelvin = 0;
// a constant variable for Celsius temperature
const celsius = kelvin - 273;
//formula working out the Newton temperature
let newton = celsius * (33 / 100);
//rounds down fahrenheit to a whole number
newton = Math.floor(newton);
console.log(`The temperature is ${newton} degrees Newton`);