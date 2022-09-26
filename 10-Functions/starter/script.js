'use strict';

// Immediately Invoked function Expression 

const runOnce = function() {
    console.log("This will never run again !");
}

runOnce();
runOnce();


// Immediately Invoked function Expression :

(function() {
    console.log("This will never run again ! - TRUE");
})();

// Second way of IIFE

(() => console.log("Second way is also true"))();































/*

// Coding Challenge #1

// Let's build a simple poll app!
// A poll has a question, an array of options from which people can choose, and an 
// array with the number of replies for each option. This data is stored in the starter 
// 'poll' object below.


// Your tasks:
// 1. Create a method called 'registerNewAnswer' on the 'poll' object. The 
// method does 2 things:

// 1.1. Display a prompt window for the user to input the number of the 
// selected option. The prompt should look like this:
// What is your favourite programming language?
// 0: JavaScript
// 1: Python
// 2: Rust
// 3: C++
// (Write option number)

// 1.2. Based on the input number, update the 'answers' array property. For 
// example, if the option is 3, increase the value at position 3 of the array by 
// 1. Make sure to check if the input is a number and if the number makes 
// sense (e.g. answer 52 wouldn't make sense, right?)
// 2. Call this method whenever the user clicks the "Answer poll" button.
// 3. Create a method 'displayResults' which displays the poll results. The 
// method takes a string as an input (called 'type'), which can be either 'string'
// or 'array'. If type is 'array', simply display the results array as it is, using 
// console.log(). This should be the default option. If type is 'string', display a 
// string like "Poll results are 13, 2, 4, 1".
// 4. Run the 'displayResults' method at the end of each 
// 'registerNewAnswer' method call.
// 5. Bonus: Use the 'displayResults' method to display the 2 arrays in the test 
// data. Use both the 'array' and the 'string' option. Do not put the arrays in the poll 
// object! So what should the this keyword look like in this situation?


// Test data for bonus:
// § Data 1: [5, 2, 3]
// § Data 2: [1, 5, 3, 9, 6, 1]
// Hints: Use many of the tools you learned about in this and the last section �
// GOOD LUCK �




const poll = {
    question: "What is your favourite programming Language",
    options: ["0: Javascript", "1: Rust", "2: C++", "3: Python"],
    answers: new Array(4).fill(0),
    registerNewAnswer() {
        const answer = Number(prompt(`${this.question}\n${this.options.join("\n")}\nWrite your option`));
        console.log(answer);

        //Register answer
        if (typeof answer === "number" && answer < this.answers.length) {
            this.answers[answer]++;
            console.log(this.answers);
        } else {
            console.log("error")
        }

        this.displayResult("array");
        this.displayResult("string");
    },
    displayResult(type = "array") {
        if (type === "array") {
            console.log(this.answers);
        } else if (type === "string") {
            console.log(`Poll results are ${this.answers.join(", ")}`);
        }
    }
}

document
    .querySelector(".poll")
    .addEventListener("click", poll.registerNewAnswer.bind(poll));





// The Bind Method: 

const lufthansa = {
    airline: "lufthansa",
    iataCode: "LH",
    bookings: [],
    book(flightnum, name) {
        console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightnum}`);
        this.bookings.push({flight: `${this.iataCode}${flightnum}`, name});
        console.log(this);
    }
}

const eurowings = {
    airline: "EuroWings",
    iataCode: "EW",
    bookings: []
}

const swiss = {
    airline: "Swiss Air Line",
    iataCode: "SAL",
    bookings: []
}

const book = lufthansa.book;


//bind methods:

const bookEW = book.bind(eurowings);
const bookLT = book.bind(lufthansa);
const bookSA = book.bind(swiss);

bookEW(578, "Tommy Shelby");
bookSA(987, "Arthur Shelby");

const bookLT846 = book.bind(lufthansa, 846);

bookLT846("Robb Stark");
bookLT846("John Snow");

//With Event Handlers:

lufthansa.planes = 300;
lufthansa.buyPlane = function() {
    console.log(this);
    this.planes ++;
    console.log(this.planes);
}


// This wont work as the this keyword will point to the object of the event handler function:
//document.querySelector(".buy").addEventListener("click", lufthansa.buyPlane);

//Therefore we use bind method here, call method is not used as it calls the function:
document.querySelector(".buy").addEventListener("click", lufthansa.buyPlane.bind(lufthansa));


// Partial Application:

const addTax = (rate, value) => value + value*rate;

console.log(addTax(0.2, 220));

const addVAT = addTax.bind(null, 0.23);
console.log(addVAT(220));













// The call and apply method: 

const lufthansa = {
    airline: "lufthansa",
    iataCode: "LH",
    bookings: [],
    book(flightnum, name) {
        console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightnum}`);
        this.bookings.push({flight: `${this.iataCode}${flightnum}`, name})
    }
}



lufthansa.book(235, "Rupam Sutar");
lufthansa.book(654, "Pranali Sutar");

console.log(lufthansa.bookings);

lufthansa.book(874, "Shantanu Sutar");


const eurowings = {
    airline: "EuroWings",
    iataCode: "EW",
    bookings: []
}

const book = lufthansa.book;

// Does not work due to the this keyword:
//book(475, "Jaywant Sutar");

book.call(eurowings, 475, "Jaywant Sutar");
console.log(eurowings);

const swiss = {
    airline: "Swiss Air Line",
    iataCode: "SAL",
    bookings: []
}

book.call(swiss, 876, "Digamber Gayake");
console.log(swiss);

//Apply Method: 

const flightData = [412, "Gearge Michael"];
book.apply(eurowings, flightData);
console.log(eurowings);

book.call(eurowings, ...flightData);
console.log(eurowings);










//Functions Returning Functions:

const greet = function (greeting) {
    return function(name) {
        console.log(`${greeting} ${name}`);
    }
}

const greeterHey = greet("Hey !");

greeterHey("Rupam");
greeterHey("Pranali");
greeterHey("Shantanu");


const greetme = greeting => name => console.log(`${greeting} ${name}`);

greetme("Hey you there !")("Mummy & Pappa");












//Functions Accepting Callback Functions: 

const oneWord = function(str) {
    return str.replace(/ /g, "").toLowerCase();
}

const upperFirstWord = function(str) {
    const [first, ...other] = str.split(" ");
    return [first.toUpperCase(), ...other].join(" ");
}

//Higher Order Function :

const transformer = function (str, fn) {
    console.log(`Original String: ${str}`);
    console.log(`Transformed String: ${fn(str)}`);
}

transformer("Javascript is the Best !", upperFirstWord);
transformer("Javascript is the Best !", oneWord);

//Javascript uses callback all the time:

function high5() {
    console.log("hey !");
}
document.body.addEventListener("click", high5);
["Rupam", "Jaywant", "Sutar"].forEach(high5);










// Value vs Reference :

const flight = "A343V";

const rupam = {
    name: "Rupam Sutar",
    passportNo: 25548569
}

const checkIn = function (flightNo, passenger) {
    flightNo = "LH999";
    passenger.name = "Mr. " + passenger.name;

    if (passenger.passportNo === 25548569) {
        alert("Checked In");
    } else {
        alert("Wrong Passport !")
    }
}

checkIn(flight, rupam)

console.log(flight);
console.log(rupam);

function newPassport(passenger) {
    passenger.passportNo = Math.trunc(Math.random() * 10000000000)
};

newPassport(rupam);
checkIn(flight, rupam);









//Default Parameters: 

const bookings = [];
 
const createBooking = function(flightNumber, numPassengers = 1, price = numPassengers * 1000) {

    // numPassengers = numPassengers || 1;
    // price = price || 1000;


    const booking = {
        flightNumber,
        numPassengers,
        price
    }

    console.log(booking);
    bookings.push(booking);
}

createBooking(5);
createBooking("A320", 4);
createBooking("A330", 5, 2999);
createBooking("B737", undefined, 4545);

*/ 