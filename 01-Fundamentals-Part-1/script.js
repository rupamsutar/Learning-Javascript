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

// let marksWeight = 95;
// let marksHeight = 1.88;

// let marksBmiCalculator = marksWeight / (marksHeight ** 2);


// let johnsWeight = 85;
// let johnsheight = 1.76;

// let johnsBmiCalculator = johnsWeight / (johnsheight ** 2);


// let marksHigherBmi = marksBmiCalculator > johnsBmiCalculator;

// if (marksHigherBmi) {
//     console.log(`Mark's BMI = ${marksBmiCalculator}
// john's BMI = ${johnsBmiCalculator}
// Mark's BMI is greater than John`);
// } else {
//     console.log(`Mark's BMI = ${marksBmiCalculator}
// john's BMI = ${johnsBmiCalculator}
// John's BMI is greater than Mark`);
// }

// Type Conversion

// const inputYear = "1998";
// console.log(inputYear + 24);
// console.log(Number(inputYear) + 24);

// console.log(Number("Jonas"));
// console.log(typeof (NaN));

// console.log(String(24) + 24);

// Type Coercion

// console.log("I am " + 24 + " years of old");

// console.log("I am " + (30 - 6) + " years  old");


// + coverts into string
// where as any other sign converts into number

/*

5 Falsy Values

1. 0
2. ""
3. undefined
4. null
5. NaN

*/

// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean("Jonas"));
// console.log(Boolean(""));
// console.log(Boolean(Number("Jonas")));

// const money = 0;
// if (money) {
//     console.log("Money is Non-zero");
// } else {
//     console.log("Money is Zero");
// }


// Coding Challenge #3

// const dScore1 = 111;
// const dScore2 = 111;
// const dScore3 = 111;

// const kScore1 = 111;
// const kScore2 = 111;
// const kScore3 = 111;

// const dAvg = (dScore1 + dScore2 + dScore3) / 3;
// const kAvg = (kScore1 + kScore2 + kScore3) / 3;

// if (dAvg > kAvg && dAvg >= 100) {
//     console.log("Dolphins Win");
// } else if (kAvg > dAvg && kAvg >= 100) {
//     console.log("Koalas Win");
// } else if (kAvg === dAvg && kAvg >= 100) {
//     console.log("Its a Draw !")
// } else {
//     console.log("Uh Oh ! No team wins")
// };


// Switch Statements

// const day = "Wednesday";

// switch (day) {
//     case "Monday":
//         console.log("Its a Monday");
//         break;
//     case "Tuesday":
//         console.log("Its a tuesday");
//         break;
//     case "Wednesday":
//         console.log("Its a Wednesday");
//        break;
//     case "Thursday":
//         console.log("Its a Thursday");
//         break;
//     case "Friday":
//         console.log("Its a friday");
//         break;
//     case "Saturday":
//         console.log("Its a saturday");
//         break;
//     default:
//         console.log("Invalid Day !");

// }

//coding challenge #4

const bill = 250;

const tip = 50 <= bill <= 300 ? 0.15 * bill : 0.2 * bill;

console.log("bill value: " + bill + ", Tip value: " + tip + ", Total Value: " + (bill + tip));

