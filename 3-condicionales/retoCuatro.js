'Use strict';

let dogAge = 12;
let ageFromDogToHuman;
let message = document.querySelector('h1');
const oneYears = 15;
const twoYears = 9;
const threeOrMoreYears = 5;

if (dogAge === 1) {
   ageFromDogToHuman = dogAge * oneYears;        
} else if (dogAge === 2) {
    ageFromDogToHuman =  oneYears + twoYears;
} else {
    ageFromDogToHuman = (dogAge - 2 ) * threeOrMoreYears + oneYears + twoYears ;
}
message.innerHTML = ageFromDogToHuman;