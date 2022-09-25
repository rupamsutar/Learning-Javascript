'use strict';

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


























/*


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