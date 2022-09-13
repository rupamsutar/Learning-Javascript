"use strict";

// let hasDriversLicense = false;
// let passTest = true;

// if (passTest) hasDriversLicense = true;
// if (hasDriversLicense) console.log("I can Drive !");

// why using strict is signified in the example above.

// function logger() {
//     console.log("My name is Rupam");
// };

// // calling / running / Invoking,  a function
// logger();

// function fruitProcessor(apples, oranges) {
//     console.log(apples, oranges);
//     const juice = `Juice with ${apples} apples and ${oranges} oranges !`;
//     return juice;
// }



// console.log(fruitProcessor(5, 2));

// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice)

// const orangeJuice = fruitProcessor(0, 5);
// console.log(orangeJuice);

// const appleOrangeMixJuice = fruitProcessor(2.5, 2.5);
// console.log(appleOrangeMixJuice);

//Function Declaration

/*

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
*/

// Arrow Functions !

const calcAge3 = birthYear => 2022 - birthYear;

console.log(calcAge3(1996));

const yearsUntillRetirement = (birthYear, firstName) => {
    return (`${firstName} has left ${58 - (2022 - birthYear)} years of Service !`);
};

console.log(yearsUntillRetirement(1996, "Revan"));