let raceNumber = Math.floor(Math.random() * 1000);
const early = true;
const age = 18;

if (early && age > 18) {
  raceNumber += 1000
};

if (early && age > 18) {
  console.log(`You will race at 09:30am. Your race number is ${raceNumber}.`); 
} else if (!early && age > 18) {
  console.log(`You will race at 11:00am. Your race number is ${raceNumber}.`);
} else if (age < 18) {
  console.log(`You will race at 12.30pm. Your race number is ${raceNumber}.`);
} else {
  console.log("Please see the registration desk for assistance")
};