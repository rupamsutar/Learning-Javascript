'use strict';

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





























/*

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