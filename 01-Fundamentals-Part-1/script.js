// let js = "amazing";
// if (js === "amazing") alert("Js is amazing");


// console.log(40 / 52 * 45 + 47 - 10 + 50);
// console.log(40);
// console.log("Newaskar");

// let firstName = "Pranali";
// console.log(firstName);
// console.log(firstName);
// console.log(firstName);

//88888888//  Assignment No 1  //88888888888//

// let country = "India";
// let continent = "Asia";
// let population = "1.35 billion";

// console.log(country, continent, population)

//8888888888888888888888888888888888888888888//

// let javascriptIsFun = true;

// console.log(javascriptIsFun);

// console.log(typeof true);
// console.log(typeof firstName);
// console.log(typeof 23);
// console.log(typeof "Rupam");

//Coding Challenge (BMI)

// let marksWeight = 95;
// let marksHeight = 1.88;

// let marksBmiCalculator = marksWeight / (marksHeight ** 2);
// console.log(marksBmiCalculator);

// let johnsWeight = 85;
// let johnsheight = 1.76;

// let johnsBmiCalculator = johnsWeight / (johnsheight ** 2);
// console.log(johnsBmiCalculator);

// let marksHigherBmi = marksBmiCalculator > johnsBmiCalculator
// console.log(marksHigherBmi);

// const firstName = "Rupam";
// const job = "Web-Developer";
// const birthYear = 1998;
// const currentYear = 2022;

// const rupam = "I'm " + firstName + " a " + (currentYear - birthYear) + " years old " +
//     job + " !";

// console.log(rupam);

// const rupamNew = `I'm ${firstName} a ${currentYear - birthYear} years old ${job} !`;

// console.log(rupamNew);


// let age = 15;

// if (age >= 18) {
//     console.log("Sarah is ready for a driving license");
// } else {
//     console.log(`Sarah is not ready for a driving license ! Wait for another ${18 - age} years !`)
// }

// let birthYear = 2003;
// let century;
// if (birthYear < 2000) {
//     century = 20;
// } else {
//     century = 21;
// }

// console.log(century);


//Coding Challenge #2

let marksWeight = 95;
let marksHeight = 1.88;

let marksBmiCalculator = marksWeight / (marksHeight ** 2);


let johnsWeight = 85;
let johnsheight = 1.76;

let johnsBmiCalculator = johnsWeight / (johnsheight ** 2);


let marksHigherBmi = marksBmiCalculator > johnsBmiCalculator;

if (marksHigherBmi) {
    console.log(`Mark's BMI = ${marksBmiCalculator}
john's BMI = ${johnsBmiCalculator}
Mark's BMI is greater than John`);
} else {
    console.log(`Mark's BMI = ${marksBmiCalculator}
john's BMI = ${johnsBmiCalculator}
John's BMI is greater than Mark`);
}