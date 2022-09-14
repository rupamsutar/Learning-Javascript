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



//Coding Challenge #3

function calcTip(bill) {
    if (50 <= bill <= 300) {
        tips.push(0.15 * bill);
        total.push(bill + (0.15 * bill));
        return 0.15 * bill;
    } else {
        tips.push(0.2 * bill);
        total.push(bill + (0.2 * bill));
        return 0.2 * bill;
    }
};

const tips = [];
const total = [];

calcTip(125);
calcTip(555);
calcTip(44);

console.log(tips);
console.log(total);




// Introduction to objects:

const jonas = [
    "Rupam",
    "Sutar",
    2022 - 1998,
    "Student",
    ["Pranali", "Chiku", "Shubham"]
];

const rupam = {
    firstName: "Rupam",
    lastName: "Sutar",
    age: 2022 - 1998,
    profession: "Student",
    friends: ["Chiku", "Pranali", "Shubham"]
};

console.log(rupam);
console.log(rupam.lastName);
console.log(rupam["profession"]);

const newName = "Name";
console.log(rupam["first" + newName]);
console.log(rupam["last" + newName]);


const interestedIn = prompt(`What do you want to know about Rupam
Please choose from below
firstName, lastName, age, profession, friends`);

if (rupam[interestedIn]) {
    console.log(rupam[interestedIn]);
} else {
    console.log("Please choose from firstName, lastName, age, profession, friends");
}



// Object Methods:


const rupam = {
    firstName: "Rupam",
    lastName: "Sutar",
    birthYear: 1998,
    profession: "Student",
    friends: ["Chiku", "Pranali", "Shubham"],
    hasDriversLicense: true,

    // calcAge: function (birthYear) {
    //     return (2022 - birthYear);
    // }

    // calcAge: function () {
    //     console.log(this);
    //     return 2022 - this.birthYear;
    // }

    calcAge: function () {
        this.age = 2022 - this.birthYear;
        return this.age;
    },

    getSummary: function () {
        return (`${this.firstName} is a ${this.calcAge()}-year Old ${this.profession}, and he has ${this.hasDriversLicense ? "a" : "no"} drivers license !`);
    }
};

console.log(rupam.getSummary());



// Coding Challenge #4


const markMiller = {
    fullName: "Mark Miller",
    mass: 78,
    height: 1.69,
    calcBMI: function () {
        this.bmi = (this.mass / (this.height ** 2));
        return this.bmi;
    }
}

const johnSmith = {
    fullName: "John Smith",
    mass: 92,
    height: 1.95,
    calcBMI: function () {
        this.bmi = (this.mass / (this.height ** 2));
        return this.bmi;
    }
}

if (markMiller.calcBMI() > johnSmith.calcBMI()) {
    console.log(`Marks BMI (${markMiller.bmi}) is higher than John Smith's BMI (${johnSmith.bmi})`);
} else if (markMiller.calcBMI() === johnSmith.calcBMI()) {
    console.log(`Marks BMI (${markMiller.bmi}) is equal John Smith's BMI (${johnSmith.bmi})`);
} else {
    console.log(`Marks BMI (${markMiller.bmi}) is less than John Smith's BMI (${johnSmith.bmi})`);
}



//Iteration : The for Loop :

for (let rep = 1; rep < 11; rep++) {
    console.log(`Come on boy ! ${10 - rep} More`)
}



// Looping Arrays, Breaking And Continuing !

const rupam = [
    "Rupam",
    "Sutar",
    2022 - 1998,
    "Student",
    ["Pranali", "Chiku", "Shubham"]
];

const types = [];
const newTypes = [];

for (let i = 0; i < rupam.length; i++) {
    console.log(rupam[i]);
    types.push(typeof (rupam[i]));
    newTypes[i] = typeof (rupam[i]);
}

console.log(types);
console.log(newTypes);

const years = [1996, 1998, 1999, 2000, 2003];
const ages = [];
for (let i = 0; i < years.length; i++) {
    ages[i] = (2022 - years[i]);
}

console.log(years);
console.log(ages);


// Continue and Break :
console.log("--- ONLY STRINGs ---");

for (let i = 0; i < rupam.length; i++) {
    if (typeof (rupam[i]) !== "string") continue;
    console.log(rupam[i]);
}

console.log("--- BREAK WITH NUMBER ---")
for (let i = 0; i < rupam.length; i++) {
    if (typeof (rupam[i]) === "number") break;

    console.log(rupam[i]);
}



// Looping Backwards and Loops in Loops :

const rupam = [
    "Rupam",
    "Sutar",
    2022 - 1998,
    "Student",
    ["Pranali", "Chiku", "Shubham"]
];

for (let i = rupam.length - 1; i >= 0; i--) {
    console.log(rupam[i]);
};

// Gym Exercises

for (let i = 1; i <= 6; i++) {
    console.log(`---------- Starting Exercises ${i}`);
    for (let j = 1; j <= 5; j++) {
        console.log(`Exercise ${i}: Lifting Weight Repition ${j}`);
    };
};



let rep = 1;

while (rep <= 5) {
    console.log(`Exercise Repition ${rep}`);
    rep++;
}
console.log("---------------DICE------------------");

let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
};

*/

// Final Coding Challenge:

const bills = [247, 65, 78, 380, 160, 220, 285, 564, 70, 80, 140];
const tips = [];
const totals = [];

function calcTip(bill) {
    if (50 <= bill <= 300) {
        tips.push(0.15 * bill);
        totals.push(bill + (0.15 * bill));
        return 0.15 * bill;
    } else {
        tips.push(0.2 * bill);
        totals.push(bill + (0.2 * bill));
        return 0.2 * bill;
    }
};

for (let i = 0; i < bills.length; i++) {
    calcTip(bills[i]);
}

console.log(bills);
console.log(tips);
console.log(totals);
console.log(" ");

function calcAverage(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    console.log(`The average is ${sum / (arr.length)}`);
}

calcAverage(totals);

