"use strict";

// let hasDriversLicense = false;
// let passTest = true;

// if (passTest) hasDriversLicense = true;
// if (hasDriversLicense) console.log("I can Drive !");

// why using strict is signified in the example above.

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

