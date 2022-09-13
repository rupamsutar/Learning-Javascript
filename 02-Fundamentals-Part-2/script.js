"use strict";

/*

let hasDriversLicense = false;
let passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log("I can Drive !");

why using strict is signified in the example above.

function logger() {
    console.log("My name is Rupam");
};

// calling / running / Invoking,  a function
logger();

function fruitProcessor(apples, oranges) {
    console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges !`;
    return juice;
}



console.log(fruitProcessor(5, 2));

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice)

const orangeJuice = fruitProcessor(0, 5);
console.log(orangeJuice);

const appleOrangeMixJuice = fruitProcessor(2.5, 2.5);
console.log(appleOrangeMixJuice);

Function Declaration



function calcAge1(birthYear) {
    return (2022 - birthYear);
};

console.log(calcAge1(1998));

// function Expression:

const calcAge2 = function (birthYear) {
    return (2022 - birthYear);
};

console.log(calcAge2(1999));



Function can be called before the "Function Declarations are formed".


// Arrow Functions !

const calcAge3 = birthYear => 2022 - birthYear;

console.log(calcAge3(1996));

const yearsUntillRetirement = (birthYear, firstName) => {
    return (`${firstName} has left ${58 - (2022 - birthYear)} years of Service !`);
};

console.log(yearsUntillRetirement(1996, "Revan"));



// Function Calling Other Function :

function cutFruitPieces(fruits) {
    return (fruits * 4);
};

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    return (`Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges !`);
}

console.log(fruitProcessor(4, 12));



//Coding Challenge

const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

const dAvg = calcAverage(85, 54, 41);
const kAvg = calcAverage(23, 34, 27);

function checkWinner(dAvg, kAvg) {
    if (dAvg >= 2 * kAvg) {
        console.log(`Dolphins Win (${dAvg} vs ${kAvg}) !`);
    } else if (kAvg >= 2 * dAvg) {
        console.log(`Koalas Win (${kAvg} vs ${dAvg}) !`);
    } else {
        console.log("No Team Wins");
    };
};

checkWinner(dAvg, kAvg);



// Arrays :

const friend1 = "Pranali Newaskar";
const friend2 = "Amol Goykar"
const friend3 = "Revan Shelke"

const friends = ["Pranali", "Amol", "Revan"];
console.log(friends);

const newFriends = new Array("Sanchi", "Abhinandan", "Pragati Tai");
console.log(newFriends);

console.log(friends.length);
console.log(newFriends[newFriends.length - 1]);

newFriends[2] = "Jeevan";
console.log(newFriends);

const firstName = "Rupam";
const rupam = [firstName, "Sutar", 2022 - 1998, "Student", friends];
console.log(rupam);

*/

// Basic Array Operation

const friends = ["Pranali", "Amol", "Revan", "Chetan", "Jeevan"];

// Adding an element to the array;:
friends.push("Digamber");
console.log(friends);

// pushing act contains a returned value of number of length
const newLength = friends.push("Shubham");
console.log(friends);
console.log(newLength);

// Adding an element to the front on the array
// this act also containes the returned value of number of length

const newShift = friends.unshift("Chiku");
console.log(friends);
console.log(newShift);

// removing an element from the array from last:
// this pop holds the returned value of an element that has been removed

friends.pop();
console.log(friends);
const newpop = friends.pop();
console.log(friends);
console.log(newpop);

// Removing the element from the front 
// This will also store the removed value from the front:

friends.shift();
console.log(friends);

const newshiftl = friends.shift();
console.log(friends);
console.log(newshiftl);

// TO know the position of an element 
friends.unshift("Pranali");
friends.unshift("Chiku");

console.log(friends);
console.log(friends.indexOf("Amol"));

//to know whether it is there or not 

console.log(friends.includes("Chetan"));